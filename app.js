const colorArr = ["green", "red", "Rgba(133, 122, 200)", "#f15025", "#00FFFF", "rgb(255, 192, 203)", "yellow", "white", "black", "brown"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");





btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    color.textContent = colorArr[randomNumber];
    document.body.style.backgroundColor = colorArr[randomNumber];
})


function getRandomNumber() {
    return Math.floor(Math.random() * colorArr.length);
}


