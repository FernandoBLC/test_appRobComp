import * as React from 'react';
import firestore from '@react-native-firebase/firestore';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import text from 'react-native-reanimated/src/reanimated2/component/Text';

/* Funcion para añadir a la base de datos. Si funciona asi
firestore()
  .collection('Players_MegaSumo')
  .add({
    Institucion: 'CUI',
    LiderEqp: 'Brian Hernandez Ramirez',
    Nom_robot: 'Robotcin1',
  })
  .then(() => {
    console.log('Se guardo jugador en Mega Sumos');
  });

  function Addsquad(AddSq) {
    firestore()
        .collection('Players_MegaSumo')
        .add(AddSq)
        .then(() => {
            alert('Se registro correctamente al Equipo! :)');
        });
}
*/

const sendData = async () => {
    await firestore().collection('Players_MegaSumo').add(a)
}

export default function Addplayer (){

    const [newSquad,setnewSquad]  = React.useState({
        Institucion: '',
        LiderEqp: '',
        Nom_robot: '',
    });

    return(
        <View style={style.container}>
            <Text>Bienvenido a la Pantalla de Registro de Competidor</Text>

            <Text>Escribe el nombre del representante de Equipo</Text>
            <TextInput placeholder='Nombre del Líder'
                       onChangeText={(text) =>
                           setnewSquad({...newSquad, LiderEqp: toString(text),}
                           )} />

            <Text>Escribe el nombre de la Universidad de Procedencia</Text>
            <TextInput placeholder='Universidad'
                       onChangeText={(text) =>
                           setnewSquad({...newSquad, Institucion: toString(text),}
                           )} />

            <Text>Escribe el nombre del Robot</Text>
            <TextInput placeholder='Robot'
                       onChangeText={(text) =>
                           setnewSquad({...newSquad, Nom_robot: toString(text),}
                           )} />

            <Button title="Guardar Participante" onPress={} />
        </View>
    );
}

const style = StyleSheet.create({

    container :{
        flex: 1,
        alignItems : 'flex-start'
    }

})

