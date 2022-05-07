import React from 'react';
import { View , Image, Text, TouchableOpacity } from 'react-native';

import sucessImg from '../../assets/success.png'
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props{
  onFeedBackRestart:()=>void,
}

export function Sucess({onFeedBackRestart}:Props) {
  return (
    <View style={styles.container}>
      <Image source={sucessImg} style={styles.image}/>
      <Text style={styles.title}>
        Agradecemos o Feedback
      </Text>
      <TouchableOpacity onPress={onFeedBackRestart} style={styles.button}>
        <Text style={styles.buttonTitle}>
          Quero Enviar Outro
        </Text>
      </TouchableOpacity>
      <Copyright/>
    </View>
  );
}