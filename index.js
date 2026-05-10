import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

emotionRadios.addEventListener("change", highlightCheckedOption);

function highlightCheckedOption(e) {
  const radioArray = document.getElementsByClassName("radio");
  for (let emotion of radioArray) {
    emotion.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
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
  emotionRadios.innerHTML = emotionContent;
}

renderEmotionsRadios(catsData);
