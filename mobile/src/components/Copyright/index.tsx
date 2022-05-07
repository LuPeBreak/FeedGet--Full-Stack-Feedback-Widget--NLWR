import React from 'react';
import { Text, View , Image } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Feito com ❤ por Luis F. P. Costa
      </Text>
      <Image style={styles.image} source={{uri:"https://github.com/lupebreak.png"}}/>
    </View>
  );
} 