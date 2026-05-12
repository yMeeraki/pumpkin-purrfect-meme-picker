import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");

getImageBtn.addEventListener("click", renderCat);
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
  const isGif = gifsOnlyOption.checked;

  if (selectedEmotion) {
    console.log(selectedEmotion.value);
  } else {
    console.log("Please select a radio");
  }

  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked',
    ).value;
    const matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    if (isGif) {
      console.log(isGif);
    } else {
      console.log(isGif);
    }

    return matchingCatsArray;
  }
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();

  if (catsArray.length === 1) {
    console.log(catsArray[0]);
  } else {
    const randomIndex = Math.floor(Math.random() * catsArray.length);
    console.log(randomIndex);
  }
}

function renderCat() {
  getSingleCatObject();
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
