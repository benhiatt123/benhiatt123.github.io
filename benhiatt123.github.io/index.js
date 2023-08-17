// Add in any custom javascript functions you need here
// JavaScript
function changeBackgroundColor() {
    var banner = document.getElementById("banner");
    var colors = ["#ff6347", "#2ecc71", "#3498db", "#e74c3c"]; // Array of colors
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    banner.style.backgroundColor = randomColor;
}
