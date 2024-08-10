import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const Screen1 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <Image source={require('../images/matematicas.png')} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={() => console.log('Acceder')}>
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
        width: 300, // Ajusta según las dimensiones de tu imagen
        height: 200, // Ajusta según las dimensiones de tu imagen
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
