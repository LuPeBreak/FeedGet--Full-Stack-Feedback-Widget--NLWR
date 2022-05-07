import React from 'react';
import { View, Text } from 'react-native';

//style
import { styles } from './styles';

//components
import { Copyright } from '../Copyright';
import { Option } from '../Option';

import {feedbackTypes} from '../../utils/feedbackTypes'
import { FeedbackType } from '../Widget';

interface Props {
  onFeedbackTypeChanged:(feedbacktype:FeedbackType)=>void
}

export function Options({onFeedbackTypeChanged}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback</Text>
      <View style={styles.options}>
        {
          Object
          .entries(feedbackTypes)
          .map(([key,value])=>(
            <Option onPress={()=>{onFeedbackTypeChanged(key as FeedbackType)}} key={key} title={value.title} image={value.image}/>
          ))
        }
      </View>
      <Copyright/>
    </View>
  );
}