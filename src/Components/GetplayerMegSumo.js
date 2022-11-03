import {firebase} from '@react-native-firebase/firestore';

export async function GetplayerMegSumo(player) {
  const playerData = {};
  const snapshot = await firebase
    .firestore()
    .collection('Players_MegaSumo')
    .doc(`${player}`)
    .get();
  playerData.push(snapshot.data());
  console.log('This function from asyn: ', playerData);
  player(playerData);
}
