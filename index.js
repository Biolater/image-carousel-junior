$(document).ready(function () {
    const button = $("button");

    const body = $("body");
    function  randomNumber(){
        return Math.floor(Math.random() * 255);
    }
    button.click(function () {
        console.log(randomNumber())
        let color1 = randomNumber();
        let color2 = randomNumber();
        let color3 = randomNumber();
        body.css("background-color",`rgb(${color1},${color2},${color3})`);
    })

})