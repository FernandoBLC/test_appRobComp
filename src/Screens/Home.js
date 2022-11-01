import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home({navigation}) {
  return(
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Esta es la Home Screen!</Text>
        <Button title="Calificar" onPress={() => navigation.navigate('Calificar')} />
      </View>
  );
}


