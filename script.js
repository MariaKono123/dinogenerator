function generateCompliment() {
    var compliments = [
        "images/compliment1.jpg",
        "images/compliment2.jpg",
        // Add more image paths as needed
    ];

    var randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById('complimentImage').src = compliments[randomIndex];
}
