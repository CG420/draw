var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x;
var y;

setInterval(jump, 1000)

function jump(){
    ctx.clearRect(0, 0, 1000, 1000);
    x = Math.random() * 700;
    y = Math.random() * 500;
    ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
    ctx.fillRect(10, 10, 100, 100);

}