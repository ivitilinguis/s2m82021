var flaco=document.getElementsByClassName('video');
var gordo=document.getElementById('videogor');
var posta=["img/nachovegas0.jpg","img/mafalda0.jpg","img/lesbian0.jpg","img/napoleon0.jpg","img/calavento0.jpg","img/triangulo0.jpg","img/ivanes0.jpg","img/mutantes0.jpg","img/hinds0.jpg","img/botitas0.jpg"];
var sorce=["img/video1.mp4","img/video2.mp4","img/video3.mp4","img/video4.mp4","img/video5.mp4","img/video6.mp4","img/video7.mp4","img/video8.mp4","img/video9.mp4","img/video10.mp4"];
console.log(flaco.length);
console.log(sorce.length);
var i;

for (i = 0; i < flaco.length; i++)
{
flaco[i].addEventListener('click', function(){
 	gordo.src=this.src;	
 	console.log(flaco);
})}


 // flaco[1].addEventListener('click', changa);
 // function changa () {
 // 	flaco[1].poster=gordo.poster;
 // 	flaco[1].src=gordo.src;
 // 	gordo.src=sorce[1];
 // 	gordo.poster=posta[1];
 // }
 //  flaco[2].addEventListener('click', changb);
 // function changb () {
 // 	flaco[2].poster=gordo.poster;
 // 	flaco[2].src=gordo.src;
 // 	gordo.src=sorce[2];
 // 	gordo.poster=posta[2];
 // }
 // flaco[3].addEventListener('click', changc);
 // function changc () {
 // 	flaco[3].poster=gordo.poster;
 // 	flaco[3].src=gordo.src;
 // 	gordo.src=sorce[3];
 // 	gordo.poster=posta[3];
 // }
 // flaco[4].addEventListener('click', changd);
 // function changd () {
 // 	flaco[4].poster=gordo.poster;
 // 	flaco[4].src=gordo.src;
 // 	gordo.src=sorce[4];
 // 	gordo.poster=posta[4];
 // }
 // flaco[5].addEventListener('click', change);
 // function change () {
 // 	flaco[5].poster=gordo.poster;
 // 	flaco[5].src=gordo.src;
 // 	gordo.src=sorce[5];
 // 	gordo.poster=posta[5];
 // }
 // flaco[6].addEventListener('click', changf);
 // function changf () {
 // 	flaco[6].poster=gordo.poster;
 // 	flaco[6].src=gordo.src;
 // 	gordo.src=sorce[6];
 // 	gordo.poster=posta[6];
 // }
 // flaco[7].addEventListener('click', changg);
 // function changg () {
 // 	flaco[7].poster=gordo.poster;
 // 	flaco[7].src=gordo.src;
 // 	gordo.src=sorce[7];
 // 	gordo.poster=posta[7];
 // }
 // flaco[8].addEventListener('click', changh);
 // function changh () {
 // 	flaco[8].poster=gordo.poster;
 // 	flaco[8].src=gordo.src;
 // 	gordo.src=sorce[8];
 // 	gordo.poster=posta[8];
 // }
 // flaco[9].addEventListener('click', changi);
 // function changi () {
 // 	flaco[9].poster=gordo.poster;
 // 	flaco[9].src=gordo.src;
 // 	gordo.src=sorce[9];
 // 	gordo.poster=posta[9];
 // }
 // flaco[0].addEventListener('click', changj);
 // function changj () {
 // 	flaco[0].poster=gordo.poster;
 // 	flaco[0].src=gordo.src;
 // 	gordo.src=sorce[0];
 // 	gordo.poster=posta[0];
 // }

