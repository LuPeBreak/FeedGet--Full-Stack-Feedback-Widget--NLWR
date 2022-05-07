import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View, TextInput,Image,Text,TouchableOpacity} from 'react-native';
import { captureScreen } from 'react-native-view-shot'
import * as FileSystem  from 'expo-file-system'

//styles
import { theme } from '../../theme';
import { styles } from './styles';

//types
import { feedbackTypes } from '../../utils/feedbackTypes';

// components
import {FeedbackType} from '../Widget';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

//api
import { api } from '../../libs/api';




interface Props{
  feedbackType: FeedbackType,
  onFeedBackRestart:()=>void,
  onFeedbackSent:()=>void
}

export function Form({feedbackType,onFeedBackRestart,onFeedbackSent}:Props) {
  const [screenshot, setScreenshot] = useState<string|null>(null)
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState('')

  function handleScreenshot(){
    captureScreen({
      format:'jpg',
      quality:0.8,
    })
    .then(uri=>{setScreenshot(uri)})
    .catch(error=>console.log(error))
  }

  function handleScreenshotRemove(){
    setScreenshot(null);
  }

  async function handleSendFeedback(){
    if(isSendingFeedback){
      return;
    }
    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && (await FileSystem.readAsStringAsync(screenshot!, {encoding:'base64'}))
    
    try{
      await api.post('/feedbacks',{
        type:feedbackType,
        screenshot:`data:image/png;base64, ${screenshotBase64}`, 
        comment:comment,
      })

      onFeedbackSent();

    }catch(err){
      console.log(err)
      setIsSendingFeedback(false);
    }
  }

  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedBackRestart}>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image style={styles.image} source={feedbackTypeInfo.image}/>
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>
        <TextInput
          onChangeText={setComment}
          multiline
          style={styles.input}
          placeholder={feedbackTypeInfo.text}
          placeholderTextColor={theme.colors.text_secondary}
        />
        <View style={styles.footer}>
          <ScreenshotButton
            screenshot={screenshot}
            onTakeShot={handleScreenshot}
            onRemoveShot={handleScreenshotRemove}
          /> 
          <Button onPress={handleSendFeedback} isLoading={isSendingFeedback}/>
        </View>
        
    </View>
  );
}