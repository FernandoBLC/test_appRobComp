import * as React from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import Addsquad from '../Components/Addsquad';

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
export default function Addplayer() {

    const [newSquad, setnewSquad] = React.useState({
        Institucion: '',
        LiderEqp: '',
        Nom_robot: '',
    })

    const fillInputs = () => {
        if (!newSquad.Institucion.trim()){
            alert('Ingresa un nombre de Institución');
            return;
        }
        if (!newSquad.LiderEqp.trim()){
            alert('Ingresa un nombre del representante del equipo');
            return;
        }
        if (!newSquad.Nom_robot.trim()){
            alert('Ingresa un nombre para el Robot');
            return;
        }

        return true;
    }

    return(
        <View style={style.container}>
            <Text>Bienvenido a la Pantalla de Registro de Competidor</Text>

            <Text>Escribe el nombre del representante de Equipo</Text>
            <TextInput placeholder="Nombre del Líder"
                       onChangeText={(text) => {
                           setnewSquad({...newSquad, LiderEqp: text});
                       }}/>

            <Text>Escribe el nombre de la Universidad de Procedencia</Text>
            <TextInput placeholder='Universidad'
                       onChangeText={(text) => {
                           setnewSquad({...newSquad, Institucion: text})
                       }} />

            <Text>Escribe el nombre del Robot</Text>
            <TextInput placeholder="Robot"
                       onChangeText={(text) => {
                           setnewSquad({...newSquad, Nom_robot: text});
                       }
                       }/>

            <Button title="Registrar Participante" onPress={() => {
                if(fillInputs() === true){
                    Addsquad(newSquad);
                }
            }
            }/>
        </View>
    );
}

const style = StyleSheet.create({

    container :{
        flex: 1,
        alignItems : 'flex-start'
    }

})

