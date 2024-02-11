import { Pressable, StyleSheet, Text, View } from 'react-native';
import color from '../constants/colors';

type Props = {
    title: string;
    onPress?: () => void;
};

const PrimaryButton: React.FC<Props> = ({ title, onPress }) => {
    return (
        <View style={styles.containerOuter}>
            <Pressable style={styles.containerInner} onPress={onPress} android_ripple={{ color: '#00215ef8' }}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    containerOuter: {
        borderRadius: 8,
        marginBottom: 12,
        overflow: 'hidden',
    },
    containerInner: {
        padding: 12,
        backgroundColor: color.primaryColor,
        width: '100%',
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '700',
    },
});
