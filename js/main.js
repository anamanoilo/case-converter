document.getElementById("upper-case").addEventListener("click", function () {
        document.querySelector("textarea").value = document.querySelector("textarea").value.toUpperCase();
    });
    document.getElementById("lower-case").addEventListener("click", function () {
        document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();
    });
    document.getElementById("proper-case").addEventListener("click", function () {
        let valueOfTextArea = document.querySelector("textarea").value;
        let words = valueOfTextArea.split(' ');
        words.forEach(function (value, index) {
            words[index] = wordUppercaser(value);
        });
        function wordUppercaser(word) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        document.querySelector("textarea").value = words.join(' ');
    });
    document.getElementById("sentence-case").addEventListener("click", function () {
        let valueOfTextArea = document.querySelector("textarea").value
        let sentences = valueOfTextArea.split('. ');
        sentences.forEach(Capitalizer);
        function Capitalizer(value, index) {
            sentences[index] = capitalizer(value);
        }
        function capitalizer(sentence) {
            return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
        }
        document.querySelector("textarea").value = sentences.join('. ');
    });
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    document.getElementById(`save-text-file`).addEventListener("click", function (){
        let text = document.querySelector("textarea").value;
        let filename = "text.txt";
        download(filename, text);
    });
