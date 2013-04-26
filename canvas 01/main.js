// JavaScript Document

var c=document.getElementById("recCanvas");
var ctx=c.getContext("2d");


ctx.fillStyle="00FFFF";
ctx.fillRect(10,20,150,75);

var c=document.getElementById("linCanvas");
var ctx=c.getContext("2d");

ctx.moveTo(0,0);
ctx.lineTo(100,50);
ctx.stroke(1);
ctx.moveTo(0,0);
ctx.lineTo(100,300);
ctx.stroke();

var c=document.getElementById("cirCanvas");
var ctx=c.getContext("2d");


ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();


var c=document.getElementById("graCanvas");
var ctx=c.getContext("2d");

var grd=ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"black");
grd.addColorStop(1,"white");

ctx.fillStyle=grd;
ctx.fillRect(10,10,150,80);

var c=document.getElementById("texCanvas");
var ctx=c.getContext("2d");

ctx.font="20px Arial";
ctx.fillText("Canvas are Cool",80,80);

var c=document.getElementById("colCanvas");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.fillStyle="blue";
ctx.rect(30,20,100,100);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="red";
ctx.arc(95,50,40,0,2*Math.PI);
ctx.globalAlpha = 0.5;
ctx.stroke();