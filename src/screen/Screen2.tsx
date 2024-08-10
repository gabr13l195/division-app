import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appTheme'; // Asegúrate de que la ruta es correcta

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


