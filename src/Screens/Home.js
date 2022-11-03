import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Esta es la Home Screen!</Text>
      <Button
        title="Registrar Equipo"
        onPress={() => navigation.navigate('Registrar')}
      />
      <Button
        title="Mega Sumo"
        onPress={() => navigation.navigate('meg_Sumo')}
      />
    </View>
  );
}
