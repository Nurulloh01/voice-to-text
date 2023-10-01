const voiceToText = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'uz-UZ';

  recognition.onresult = (event) => {
    const textContainer = document.getElementById('textContainer');
    const result = event.results[0][0].transcript;
    textContainer.textContent = result;
  };

  recognition.start();
};

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.style.cursor = 'pointer';
  button.style.marginTop = '10px';
  button.textContent = 'Voice to text';
  button.addEventListener('click', voiceToText);
  document.body.appendChild(button);
});
