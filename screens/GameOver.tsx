import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import color from '../constants/colors';

type Props = {
    handleRestart: () => void;
    round: number[];
    pickedNumber: number;
};

const GameOver: React.FC<Props> = ({ handleRestart, round, pickedNumber }) => {
    return (
        <View style={styles.containerOuter}>
            <Text style={styles.text}>Game Over</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/game-over.jpg')} />
            </View>
            <Text style={styles.info}>
                Opponent took <Text style={styles.highlight}>{round.length}</Text> to guess the number <Text style={styles.highlight}>{pickedNumber}</Text>
            </Text>
            <View style={styles.buttonContainer}>
                <PrimaryButton title="Restart Game" onPress={handleRestart} />
            </View>
        </View>
    );
};

export default GameOver;

const styles = StyleSheet.create({
    containerOuter: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'center',
        gap: 32,
    },

    buttonContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    text: {
        color: color.yellow,
        fontSize: 32,
        fontWeight: '500',
        width: '100%',
        textAlign: 'center',
        fontFamily: 'GrapeNuts_400Regular',
    },
    imageContainer: {
        overflow: 'hidden',
    },
    image: {
        height: 250,
        width: 250,
        overflow: 'hidden',
        borderRadius: 150,
    },
    info: {
        fontSize: 20,
        textAlign: 'center',
        color: color.white,
    },
    highlight: {
        color: color.yellow,
        fontWeight: '800',
    },
});
