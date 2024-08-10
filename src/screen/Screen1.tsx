import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';  // Asegúrate de que la ruta es correcta

type Props = StackScreenProps<RootStackParamList, 'Screen1'>;

export const Screen1 = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <Image source={require('../images/matematicas.png')} style={styles.image} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Screen2')}
            >
                <Text style={styles.buttonText}>Acceder</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 20
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});
