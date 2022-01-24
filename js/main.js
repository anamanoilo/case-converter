const upperCaseBtn = document.getElementById("upper-case");
const lowerCaseBtn = document.getElementById("lower-case");
const properCaseBtn = document.getElementById("proper-case");
const sentenceCaseBtn = document.getElementById("sentence-case");
const textarea = document.querySelector("textarea");

upperCaseBtn.addEventListener("click", function () {
  textarea.value = textarea.value.toUpperCase();
});

lowerCaseBtn.addEventListener("click", function () {
  textarea.value = textarea.value.toLowerCase();
});

properCaseBtn.addEventListener("click", function () {
  let words = textarea.value.split(" ");
  words.forEach(function (value, index) {
    words[index] = wordUppercaser(value);
  });
  function wordUppercaser(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  textarea.value = words.join(" ");
});

sentenceCaseBtn.addEventListener("click", function () {
  let sentences = textarea.value.split(". ");
  sentences.forEach(Capitalizer);
  function Capitalizer(value, index) {
    sentences[index] = capitalizer(value);
  }
  function capitalizer(sentence) {
    return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
  }
  textarea.value = sentences.join(". ");
});

function download(filename, text) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
document
  .getElementById(`save-text-file`)
  .addEventListener("click", function () {
    let text = textarea.value;
    let filename = "text.txt";
    download(filename, text);
  });
