import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import { useFonts, GrapeNuts_400Regular } from '@expo-google-fonts/grape-nuts';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    const [pickedNumber, setPickedNumber] = useState<undefined | number>();
    const [gameOver, setGameOver] = useState(false);
    const [round, setRound] = useState([]);

    const handlePickedNumber = (value) => {
        setPickedNumber(value);
    };
    const handleGameOver = () => {
        setGameOver(true);
    };
    const handleRestart = () => {
        setGameOver(false);
        setPickedNumber(undefined);
        setRound([]);
    };

    const handleRound = (round: number) => {
        setRound((prev) => [round, ...prev]);
    };

    const [fontsLoaded, fontError] = useFonts({
        GrapeNuts_400Regular,
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const screen = !pickedNumber ? (
        <StartScreen handlePickedNumber={(number) => handlePickedNumber(number)} />
    ) : gameOver ? (
        <GameOver handleRestart={handleRestart} round={round} pickedNumber={pickedNumber} />
    ) : (
        <GameScreen selected={pickedNumber} handleGameOver={handleGameOver} handleRound={handleRound} round={round} />
    );

    return (
        <LinearGradient colors={['#0d1b2a', '#0d1b2a']} style={styles.rootScreen}>
            <ImageBackground resizeMode="cover" style={styles.rootScreen} source={require('./assets/background.jpg')} imageStyle={styles.bgImage}>
                <SafeAreaView style={styles.rootScreen}>
                    <View style={styles.rootScreen} onLayout={onLayoutRootView}>
                        {screen}
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    bgImage: {
        opacity: 0.15,
    },
});
