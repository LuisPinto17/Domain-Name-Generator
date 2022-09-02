/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var bigArray = [];

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".us"];

function mix(arr3, arr1, arr2, arr4) {
  for (let k = 0; k < arr3.length; k++) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let l = 0; l < arr4.length; l++) {
          let compareExt = arr4[l].slice(1);
          let compareNoun = arr2[j].slice(-compareExt.length);
          if (compareExt == compareNoun) {
            let word =
              arr3[k] +
              arr1[i] +
              arr2[j].slice(0, -compareExt.length) +
              arr4[l];
            console.log(word);
          } else {
            let word = arr3[k] + arr1[i] + arr2[j] + arr4[l];
            console.log(word);
          }
        }
      }
    }
  }
}

window.onload = function() {
  //write your code here
  mix(pronoun, adj, noun, ext);
};
