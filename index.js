import { catsData } from "./data.js";

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion);
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let emotionContent = "";
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    emotionContent += `<p>${emotion}</p>`;
  }
  document.getElementById("emotion-radios").innerHTML = emotionContent;
}

renderEmotionsRadios(catsData);
