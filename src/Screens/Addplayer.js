import * as React from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import Addsquad from '../Components/Addsquad';

export default function Addplayer() {
  const [newSquad, setnewSquad] = React.useState({
    Institucion: '',
    LiderEqp: '',
    Nom_robot: '',
  });

  const fillInputs = () => {
    if (!newSquad.Institucion.trim()) {
      alert('Ingresa un nombre de Institución');
      return;
    }

    if (!newSquad.LiderEqp.trim()) {
      alert('Ingresa un nombre del representante del equipo');
      return;
    }

    if (!newSquad.Nom_robot.trim()) {
      alert('Ingresa un nombre para el Robot');
      return;
    } else {
      return true;
    }
  };

  return (
    <View style={style.container}>
      <Text>Bienvenido a la Pantalla de Registro de Competidor</Text>

      <Text>Escribe el nombre del representante de Equipo</Text>
      <TextInput
        placeholder="Nombre del Líder"
        onChangeText={text => {
          setnewSquad({...newSquad, LiderEqp: text});
        }}
        ref={input => {
          this.NomLeaderIn = input;
        }}
      />

      <Text>Escribe el nombre de la Universidad de Procedencia</Text>
      <TextInput
        placeholder="Universidad"
        onChangeText={text => {
          setnewSquad({...newSquad, Institucion: text});
        }}
        ref={input => {
          this.NomInstituIn = input;
        }}
      />

      <Text>Escribe el nombre del Robot</Text>
      <TextInput
        placeholder="Robot"
        onChangeText={text => {
          setnewSquad({...newSquad, Nom_robot: text});
        }}
        ref={input => {
          this.NomRobotIn = input;
        }}
      />

      <Button
        title="Registrar Participante"
        onPress={() => {
          if (fillInputs() === true) {
            Addsquad(newSquad);
            this.NomLeaderIn.clear();
            this.NomInstituIn.clear();
            this.NomRobotIn.clear();
            setnewSquad({
              Nom_robot: '',
              LiderEqp: '',
              Institucion: '',
            });
          }
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
