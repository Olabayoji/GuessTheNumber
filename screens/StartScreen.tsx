import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Title from '../components/Title';
import color from '../constants/colors';

type Props = {
    handlePickedNumber: (input: number) => void;
};

const StartScreen: React.FC<Props> = ({ handlePickedNumber }) => {
    const [userInput, setUserInput] = useState('');
    const handleInputChange = (text) => {
        setUserInput(text);
    };
    const handleReset = () => {
        setUserInput('');
    };
    const handleConfirm = () => {
        const input = parseInt(userInput);
        console.log({ input, tyoeOf: typeof input, userInput });
        if (isNaN(input) || input <= 0 || input > 99) {
            Alert.alert('Enter a valid number', 'Number has to be between 0 and 99', [{ text: 'Okay', style: 'destructive', onPress: handleReset }]);
            return;
        }
        handlePickedNumber(input);
    };
    return (
        <View style={styles.containerOuter}>
            <Title>Guess The Number</Title>
            <View style={styles.container}>
                <Text style={styles.instruction}>Enter a number to start the game</Text>
                <TextInput style={styles.input} keyboardType="number-pad" maxLength={2} value={userInput} onChangeText={handleInputChange} />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonContainerInner}>
                        <PrimaryButton onPress={handleReset} title="Reset" />
                    </View>
                    <View style={styles.buttonContainerInner}>
                        <PrimaryButton onPress={handleConfirm} title="Confirm" />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    containerOuter: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
    },
    container: {
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: '#7d8597',
        borderRadius: 8,
        elevation: 6,
        textAlign: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        width: '100%',
    },
    buttonContainerInner: {
        flex: 1,
    },

    input: {
        width: 70,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderColor: '#fcfcfc',
        borderBottomWidth: 2,
        padding: 8,
        fontSize: 32,
        marginBottom: 32,
        color: '#daddd8',
    },
    instruction: {
        color: color.white,
    },
});
