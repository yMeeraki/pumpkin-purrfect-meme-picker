import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");

getImageBtn.addEventListener("click", getMatchingCatsArray);
emotionRadios.addEventListener("change", highlightCheckedOption);

function highlightCheckedOption(e) {
  const radioArray = document.getElementsByClassName("radio");
  for (let emotion of radioArray) {
    emotion.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getMatchingCatsArray() {
  const selectedEmotion = document.querySelector('input[type="radio"]:checked');
  const isGif = document.getElementById("gifs-only-option").checked;

  if (selectedEmotion) {
    console.log(selectedEmotion.value);
  } else {
    console.log("Please select a radio");
  }

  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked',
    ).value;
    console.log(selectedEmotion);
  }

  if (isGif) {
    console.log(isGif);
  } else {
    console.log(isGif);
  }
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
