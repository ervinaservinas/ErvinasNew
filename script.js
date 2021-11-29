function Random() {
    return Math.floor(Math.random() * 10);
}

function randomValue() {
    document.getElementById('tb').value = Random();
}