import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './Screens/Home';
import Addplayer from './Screens/Addplayer';

const Stackfunction = createNativeStackNavigator();

function MynavigationT (){
    return (
        <Stackfunction.Navigator >
            <Stackfunction.Screen name="Inicio" component={Home} />
            <Stackfunction.Screen name="Registrar" component={Addplayer} />
        </Stackfunction.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MynavigationT />
        </NavigationContainer>
    );
}
