document.addEventListener("DOMContentLoaded", main);

function main() {
    var endOfFile = document.getElementById('thisNav');
    fetch('../html/globalNav.html')
        .then(x => x.text())
        .then(y => endOfFile.innerHTML = y);
}