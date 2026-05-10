import { catsData } from "./data.js";

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if(!(emotionsArray.includes(emotion))){
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let emotionContent = "";
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    emotionContent += `<div class='radio'> 
    <label for ='${emotion}'>${emotion}</label>
    <input 
    id='${emotion}' 
    name='emotions' 
    value='${emotion}' 
    type ='radio'
    >
    </div>`;
  }
  document.getElementById("emotion-radios").innerHTML = emotionContent;
}

renderEmotionsRadios(catsData);
