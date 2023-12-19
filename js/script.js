function replaceName() {
    let name = prompt("What's your name?", "");
    document.getElementById("name").innerHTML = name
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName();
})

let nameInput = document.getElementById('name-input');
document.getElementById('kirim').addEventListener("click", function() {
    const nama = nameInput.value
})