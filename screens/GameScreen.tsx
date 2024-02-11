import { Alert, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import color from '../constants/colors';
import Logs from '../components/Logs';

type Props = {
    selected: number;
    handleGameOver: () => void;
    handleRound: (value: number) => void;
    round: number[];
};

function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let max = 100;
let min = 1;

const GameScreen: React.FC<Props> = ({ selected, handleGameOver, handleRound, round }) => {
    const initialGuess = getRndInteger(min, max);
    const [opponnetGuess, setOpponnetGuess] = useState(initialGuess);

    const handleGuess: (action: string) => void = (action) => {
        if ((action == 'lower' && opponnetGuess < selected) || (action == 'higher' && opponnetGuess > selected)) {
            Alert.alert('False Information', 'The information you have provided is not correct', [{ text: 'Okay', style: 'default' }]);
            return;
        } else if (action == 'lower') {
            max = opponnetGuess;
        } else {
            min = opponnetGuess + 1;
        }
        console.log({ max, min });
        const guess = getRndInteger(min, max);
        setOpponnetGuess(guess);
        handleRound(guess);
    };

    useEffect(() => {
        handleRound(initialGuess);
    }, []);

    useEffect(() => {
        if (selected === opponnetGuess) {
            handleGameOver();
            max = 100;
            min = 1;
        }
    }, [selected, opponnetGuess]);

    return (
        <View style={styles.containerOuter}>
            <View style={styles.wrapper}>
                <Title>Opponent's Guess</Title>
                <View style={styles.container}>
                    <Text style={styles.value}>{opponnetGuess}</Text>
                </View>
                <Text style={styles.question}>Is the number higher or lower?</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title="Lower" onPress={() => handleGuess('lower')} />
                    <PrimaryButton title="Higher" onPress={() => handleGuess('higher')} />
                </View>
            </View>
            <View style={styles.list}>
                <FlatList data={round} renderItem={({ item, index }) => <Logs value={item} index={round.length - index} key={item} />} />
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    containerOuter: {
        marginTop: 50,
        flex: 1,
        alignItems: 'center',
        padding: 32,
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: 6,
        width: '100%',
    },

    value: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 32,
        color: color.yellow,
        fontWeight: '700',
    },
    container: {
        padding: 32,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: color.yellow,
        width: '100%',
        elevation: 6,
        marginBottom: 16,
    },
    wrapper: {
        width: '100%',
        flex: 1.2,
    },
    question: {
        color: color.white,
        marginBottom: 12,
    },
    list: {
        flex: 1,
    },
});
