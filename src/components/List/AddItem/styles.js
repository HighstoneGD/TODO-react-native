import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.03)'
    },
    icon: {
        margin: 5
    },
    input: {
        width: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 5,
        padding: 5,
        fontSize: 16
    }
})