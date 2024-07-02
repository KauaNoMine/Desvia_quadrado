
//variaves do player

let posiPlaerX = 200
let posiPlaerY = 275
let diâmetro = 30
let raio = diâmetro / 2

//variaves do obj
let XposiObj = 20
let YposiObj = 200
let XveloObj = 1
let YveloObj = 1
let tama = 20
    
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(001) ;

  plaer();
  moviPlaer();
  obj();
  movi();
  
}

 function plaer() {
  fill(color(255,255,255)) 
 circle(posiPlaerX,posiPlaerY, diâmetro);
   }

 function moviPlaer() {
   if (keyIsDown(87)) {
 posiPlaerY -= 10
       }
   if (keyIsDown(83)) {
 posiPlaerY += 10
       }
    if (keyIsDown(65)) {
 posiPlaerX -= 10
       }
   if (keyIsDown(68)) {
 posiPlaerX += 10
       }
   }

function obj() {
  fill(color(255,1,1))
square(XposiObj,YposiObj,tama)


}

function movi() {
  if (posiPraerX > XposiObj) {
    xposi
