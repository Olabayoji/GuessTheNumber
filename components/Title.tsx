import { StyleSheet, Text } from 'react-native';
import color from '../constants/colors';

type Props = {
    children: string;
};

const Title: React.FC<Props> = ({ children }) => {
    return <Text style={styles.container}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: color.white,
        padding: 12,
        fontFamily: 'GrapeNuts_400Regular',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '600',
        color: color.white,
        textAlign: 'center',
        marginBottom: 32,
    },
});
