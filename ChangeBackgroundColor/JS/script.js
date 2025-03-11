function generateRandomBackgroundColor() {
    const color= "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = color;
    console.log("hello")
}
document.getElementById("changeColorBtn").addEventListener("click", generateRandomBackgroundColor);
