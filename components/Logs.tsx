import { StyleSheet, Text, View } from 'react-native';
import color from '../constants/colors';

type Props = {
    value: number;
    index: number;
};
const Logs: React.FC<Props> = ({ value, index }) => {
    return (
        <View style={styles.container}>
            <Text>#{index}</Text>
            <Text>Opponent's Guess: {value}</Text>
        </View>
    );
};

export default Logs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.yellow,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: `100%`,
        marginBottom: 12,
    },
});
