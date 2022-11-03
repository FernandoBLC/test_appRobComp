import * as React from 'react';
import firestore from '@react-native-firebase/firestore';

export default function Addsquad(AddSq) {
  firestore()
    .collection('Players_MegaSumo')
    .add(AddSq)
    .then(() => {
      alert('Se registro correctamente al Equipo! :)');
    });
}
