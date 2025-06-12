function generatePrompt() {
  const idOutput = document.getElementById('output-id');
  const enOutput = document.getElementById('output-en');

  const promptID = "Contoh prompt dalam Bahasa Indonesia.";
  const promptEN = "Sample prompt in English.";

  idOutput.value = promptID;
  enOutput.value = promptEN;
}