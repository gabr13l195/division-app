import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { ButtonComponent } from '../components/ButtonComponent';
import { RootStackParamList } from '../navigator/StackNavigator';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Screen1'>;

export const Screen1 = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido</Text>
            <Image source={require('../images/matematicas.png')} style={styles.image} />
            <ButtonComponent textButton="Acceder" onPress={() => navigation.navigate('Screen2')} />
        </View>
    );
};
