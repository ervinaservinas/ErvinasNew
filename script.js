function Random() {
    return Math.floor(Math.random() * 1000000000);
}

function randomValue() {
    document.getElementById('tb').value = Random();
}