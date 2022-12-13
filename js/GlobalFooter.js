document.addEventListener("DOMContentLoaded", main);

function main() {
    var endOfFile = document.getElementById('thisFooter');
    fetch('../html/globalFooter.html')
        .then(x => x.text())
        .then(y => endOfFile.innerHTML = y);
}