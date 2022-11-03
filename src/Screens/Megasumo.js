import {Button, FlatList, Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';
import {GetplayerMegSumo} from '../Components/GetplayerMegSumo';
import firestore from '@react-native-firebase/firestore';

function Megasumo() {
  const [playersSumo, setPlayersSumo] = React.useState({
    Player1: '',
    Player2: '',
  });
  const [data, setData] = React.useState();

  async function getPlayer(keyPlayer) {
    const player = await firestore()
      .collection('Players_MegaSumo')
      .doc(`${keyPlayer}`)
      .get();
    setData(player.data);
    console.log('From Async function inside main: ', player.data().Institucion);
  }

  useEffect(() => {
    getPlayer();
  }, []);

  function renderItem({item}) {
    return (
      <View>
        <Text>{item.data()}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Bienvenido a la competencia de Mega Sumo</Text>
      <Text>Empecemos por buscar a los competidores</Text>

      <Text>Competidor 1</Text>
      <TextInput
        placeholder="Escribe el nombre del Robot"
        onChangeText={text => setPlayersSumo({...playersSumo, Player1: text})}
        ref={input => {
          this.namePlayer1 = input;
        }}
      />

      <Text>Competidor 2</Text>
      <TextInput
        placeholder="Escribe el nombre del Robot"
        onChangeText={text => setPlayersSumo({...playersSumo, Player2: text})}
        ref={input => {
          this.namePlayer2 = input;
        }}
      />

      <Button
        title="Buscar Peleadores"
        onPress={() => {
          getPlayer(playersSumo.Player1);
          this.namePlayer1.clear();
          this.namePlayer2.clear();
          setPlayersSumo({
            Player1: '',
            Player2: '',
          });
        }}
      />

      <Text>Informacion Jugador 1</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={player => player.id}
      />
    </View>
  );
}

export default Megasumo;
