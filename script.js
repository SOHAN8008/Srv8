document.addEventListener("DOMContentLoaded", init);

function init() {
  let nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
  let verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
  let adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
  let secondNouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
  let places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
  let phrase = "";

  function getRandomWord(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function clearPhrase() {
    phrase = "";
    document.getElementById("phraseOutput").textContent = "____ ____ ____ ____ ____";
  }

  function generatePhrase() {
    let noun = "";
    let verb = "";
    let adjective = "";
    let secondNoun = "";
    let place = "";
  
    switch (this.id) {
      case "nounButton":
        noun = getRandomWord(nouns);
        break;
      case "verbButton":
        verb = getRandomWord(verbs);
        break;
      case "adjectiveButton":
        adjective = getRandomWord(adjectives);
        break;
      case "secondNounButton":
        secondNoun = getRandomWord(secondNouns);
        break;
      case "placeButton":
        place = getRandomWord(places);
        break;
      case "surprise":
        noun = getRandomWord(nouns);
        verb = getRandomWord(verbs);
        adjective = getRandomWord(adjectives);
        secondNoun = getRandomWord(secondNouns);
        place = getRandomWord(places);
        break;
    }

    phrase = phrase + " " + noun + " " + verb + " " + adjective + " " + secondNoun + " " + place;
    document.getElementById("phraseOutput").textContent = phrase;

    return phrase;
  }

  function speakPhrase() {
    if ('speechSynthesis' in window) {
      let speech = new SpeechSynthesisUtterance();
      speech.text = phrase;
      speech.onend = function(event) {
        console.log('Speech synthesis finished');
      };
      speech.onerror = function(event) {
        console.error('Speech synthesis error occurred:', event.error);
      };
    
      window.speechSynthesis.speak(speech);
    } else {
      alert('Speech synthesis is not supported in your browser.');
    }
  }

  document.getElementById("nounButton").addEventListener("click", generatePhrase);
  document.getElementById("verbButton").addEventListener("click", generatePhrase);
  document.getElementById("adjectiveButton").addEventListener("click", generatePhrase);
  document.getElementById("secondNounButton").addEventListener("click", generatePhrase);
  document.getElementById("placeButton").addEventListener("click", generatePhrase);
  document.getElementById("surprise").addEventListener("click", generatePhrase);
  document.getElementById("speakButton").addEventListener("click", speakPhrase);
  document.getElementById("resetButton").addEventListener("click", clearPhrase);
}