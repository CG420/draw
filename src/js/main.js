var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
ctx.fillRect(10, 10, 100, 100);