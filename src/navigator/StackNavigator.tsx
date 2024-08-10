import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screen/Screen1';
import { Screen2 } from '../screen/Screen2';


const Stack = createStackNavigator();

export const StackNavigator = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Screen1} />
            <Stack.Screen name="Notifications" component={Screen2} />
        </Stack.Navigator>
    );
}