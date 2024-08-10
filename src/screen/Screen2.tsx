// src/screen/Screen2.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { styles } from '../themes/appTheme';
import { ButtonComponent } from '../components/ButtonComponent';

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
            setResult((n1 / n2).toString());
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={customStyles.input}
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1}
                placeholder="Ingrese el primer número"
            />
            <TextInput
                style={customStyles.input}
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2}
                placeholder="Ingrese el segundo número"
            />
            <ButtonComponent textButton="Dividir" onPress={handleDivide} />
            <Text style={styles.resultText}>Resultado: {result}</Text>
        </View>
    );
};

const customStyles = StyleSheet.create({
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    }
});



