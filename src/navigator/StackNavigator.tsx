import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screen/Screen1';
import { Screen2 } from '../screen/Screen2';

export type RootStackParamList = {
    Screen1: undefined;  
    Screen2: undefined;  
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Screen1">
            <Stack.Screen name="Screen1" options={{ title:'Home'}} component={Screen1} />
            <Stack.Screen name="Screen2" options={{ title:'Division'}}component={Screen2} />
        </Stack.Navigator>
    );
};