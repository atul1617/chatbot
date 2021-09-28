// Text to Speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
    let voice = new SpeechSynthesisUtterance(string);
    voice.voice = synth.getVoices()[0];
    voice.text = string;
    voice.lang = "en-US";
    voice.volume = 1;
    voice.rate = 1;
    voice.pitch = 1; // Can be 0, 1, or 2
    synth.speak(voice);
}