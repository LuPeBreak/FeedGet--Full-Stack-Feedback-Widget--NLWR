import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes ={
  BUG:{
    title:"Problema",
    image:{
      source:bugImageUrl,
      alt:"Imagem de um inseto"
    }
  },
  IDEA:{
    title:"Idea",
    image:{
      source:ideaImageUrl,
      alt:"Imagem de uma lampada"
    }
  },
  OTHER:{
    title:"Outro",
    image:{
      source:thoughtImageUrl,
      alt:"Imagem de um balão de pensamento"
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent,setFeedbackSent] = useState(false)

  function handleRestartFeedback(){
    setFeedbackSent(false);
    setFeedbackType(null)
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      

      { feedbackSent? <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>:(
        <>
          {!feedbackType?(
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          ):(
            <FeedbackContentStep onFeedbackSend={()=>{setFeedbackSent(true)}} onFeedbackRestartRequested={handleRestartFeedback} feedbackType={feedbackType}/>
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-1" href="https://github.com/LuPeBreak">Luis F. P. Costa</a>
      </footer>
    </div>
  )
}