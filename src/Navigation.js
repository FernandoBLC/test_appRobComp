import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './Screens/Home';
import Addplayer from './Components/Addplayer';

const Stackfunction = createNativeStackNavigator();

function MynavigationT (){
    return (
        <Stackfunction.Navigator >
            <Stackfunction.Screen name="Inicio" component={Home} />
            <Stackfunction.Screen name="Calificar" component={Addplayer} />
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
