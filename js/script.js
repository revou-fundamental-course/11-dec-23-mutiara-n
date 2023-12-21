// function replaceName() {
//     let yourname = prompt("What's your name?", "");
//     document.getElementById("yourname").innerHTML = yourname;
// }

// replaceName()   

let currentIndex = 0
const images = document.querySelectorAll(".slider-img")
const totalImages = images.length

function changeImage(){
    images[currentIndex].style.display = "none"
    currentIndex = [currentIndex + 1] % totalImages
    images[currentIndex].style.display = "block"
}

setInterval (changeImage, 2000)

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Isi semua data");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = birthDate;
    document.getElementById("sender-messages").innerHTML = messages;
}