import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const Screen2 = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleDivide = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (n2 === 0 && n1 === 0) {
            setResult('INDETERMINACIÓN');
        } else if (n2 === 0) {
            setResult('NO EXISTE DIVISIÓN PARA CERO');
        } else {
            const divisionResult = n1 / n2;
            setResult(divisionResult.toString());
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1}
                placeholder="Ingrese el primer número"
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2}
                placeholder="Ingrese el segundo número"
            />
            <TouchableOpacity style={styles.button} onPress={handleDivide}>
                <Text style={styles.buttonText}>Dividir</Text>
            </TouchableOpacity>
            <Text style={styles.resultText}>Resultado: {result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    resultText: {
        fontSize: 18,
        marginVertical: 10,
    },
});

