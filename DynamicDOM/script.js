// Arrays of book and dog images
const bookImages = [
    "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
];

const dogImages = [
    "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
    "https://images.dog.ceo/breeds/labrador/n02099712_3363.jpg",
    "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
    "https://images.dog.ceo/breeds/dalmatian/n02107155_2007.jpg",
    "https://images.dog.ceo/breeds/pug/n02110958_14204.jpg"
];

// Track toggle state: true = book, false = dog
let showBook = true;

// DOM elements
const myImage = document.getElementById("myImage");
const btn = document.getElementById("changeImageBtn");

// Change image with fade and spin
btn.onclick = function() {
    myImage.style.opacity = 0;
    myImage.classList.add("spin");

    setTimeout(() => {
        const images = showBook ? bookImages : dogImages;
        const randomIndex = Math.floor(Math.random() * images.length);
        myImage.src = images[randomIndex];
        showBook = !showBook;
        myImage.style.opacity = 1;
        myImage.classList.remove("spin");
    }, 300);
};

// Paragraph add/delete
document.getElementById("addTextNode").onclick = function() {
    let userInput = document.getElementById("userText").value.trim();
    if(userInput === "") {
        alert("Please enter some text!");
        return;
    }
    let textNode = document.createElement("span");
    textNode.textContent = " ➤ " + userInput;
    document.getElementById("output").appendChild(textNode);
    document.getElementById("userText").value = "";
};

document.getElementById("deleteNode").onclick = function() {
    const outputDiv = document.getElementById("output");
    const allSpans = outputDiv.getElementsByTagName("span");
    if (allSpans.length > 0) {
        allSpans[allSpans.length - 1].remove(); // remove last added span
    }
};

// jQuery Features
$(document).ready(function() {
    // Change button text
    $("#changeButtonText").click(function() {
        $(this).text("Button Text Changed!");
    });

    // Form submission
    $("#myForm").submit(function(e) {
        e.preventDefault();
        let username = $("#username").val();
        let email = $("#email").val();
        $("#output").html(`<span>Username: ${username}</span><span>Email: ${email}</span>`);
    });

    // Add image title tooltip
    $("#myImage").attr("title", "Hover to see this tooltip!");
});
