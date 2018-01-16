var score=document.querySelector('#score');
var btn1=document.querySelector("#btn1");
var btn2=document.querySelector("#btn2");
var btn3=document.querySelector("#btn3");
var value=0;
var p1=0;
var spam=0;
var audio = new Audio('audio.mp3');
var p2=0;
var click1=true;
var click2=true;
var video=document.querySelector("#stream");
var takePhoto=document.querySelector("#takePhoto");
console.log("connected");
takePhoto.addEventListener("click",function(){
	navigator.mediaDevices.getUserMedia({
		video:true,
		audio:false
	}).then(function(source){
		video.srcObject=source;
		video.addEventListener("canplay",function(){
			video.width=550;
			video.height=360;
		});
		video.play();
	}).catch(function(err){
		console.log("There was an error "+err);
	});
	window.setTimeout(secret,4000);
});

btn3.addEventListener("click",function(){
	value=0;
	p1=0;
	p2=0;
	click1=true;
	click2=true;
	score.innerHTML=value;
})
btn1.addEventListener("click",function(){
p1++;
if(p1<4 && click1==true)
{
	p2=0;
click2=true;
value++;
if(value==21)
{
	alert("Player 2 Wins");
}
score.innerHTML=value;
console.log(value);
}
else{
	click1=false;
	p1=0;
}
});
btn2.addEventListener("click",function(){
p2++;
if(p2<4 && click2==true)
{
	p1=0
click1=true;
value++;
if(value==21)
{
	alert("Player 1 Wins");

}
score.innerHTML=value;
console.log(value);
}
else{
	click2=false;
	p2=0;
}
});
function secret()
{
	spam++;
	if(spam==1)
	{
		audio.play();
		alert("YOUR PHOTO HAS SECRETLY BEEN TAKEN");
	}
}
