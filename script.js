/*let speech = new SpeechSynthesisUtterance();

let voices = [];


let voiceSelect = document.querySelector("select");



window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    
    voices.forEach((voice, i ) => (voiceSelect.options[i]) = new Option(voice.name, i));

   // voiceforEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i ))
};


voiceSelect.addEventListener("change", () => {
    speech.voice = voices [voiceSelect.value];
});


document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});*/













let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Populate voices when available
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Set default voice

    // Clear existing options
    voiceSelect.innerHTML = "";

    // Populate voice options
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};

// Change voice when a new option is selected
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceSelect.value)];
});

// Speak the text when the button is clicked
document.querySelector("button").addEventListener("click", () => {
    let textArea = document.querySelector("textarea");
    if (textArea.value.trim() === "") {
        alert("Please enter some text to speak!");
        return;
    }
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});
