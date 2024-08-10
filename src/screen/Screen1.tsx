import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appTheme'; // Asegúrate de que la ruta es correcta
import { RootStackParamList } from '../navigator/StackNavigator';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Screen1'>;

export const Screen1 = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <Image source={require('../images/matematicas.png')} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
                <Text style={styles.buttonText}>Acceder</Text>
            </TouchableOpacity>
        </View>
    );
};
