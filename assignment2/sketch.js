function setup() {
  createCanvas(600, 750);
  background(242, 220, 184);
  //차양
  noStroke()
  fill(230, 51, 34)
  rect(0, 0, 120, 100)
  rect(240, 0, 120, 100)
  rect(480, 0, 120, 100)
  circle(60, 100, 120)
  circle(300, 100, 120)
  circle(540, 100, 120)
  fill(255)
  rect(120, 0, 120, 100)
  rect(360, 0, 120, 100)
  circle(180, 100, 120)
  circle(420, 100, 120)
  //판
  stroke(0)
  fill(94, 49, 6)
  rect(276, 670, 48, 70, 10)
  rect(60, 210, 480, 480, 50)
  noStroke()
  fill(94, 49, 6)
  rect(276, 670, 48, 50)
  fill(242, 220, 184)
  rect(288, 720, 24, 12, 6)
  //마르게리따글자
  textSize(70)
  fill(0)
  textAlign(CENTER)
  text('MARGHERITA', 300, 100);
}

function draw() {
  //부오노 손동작 무한 생성하기
  if (frameCount % 30 === 0) {
  let clapSize = random(25, 50);
  let clapx, clapy;
  do {
    clapx = random(0, 600)
    clapy = random(160, 750)
  } while (dist(clapx, clapy, 300, 450) < 225 + clapSize / 2);
    //원에 안 겹치게 하기 위해 박수중심과 도우중심 사이 거리가 도우 반지름보다 작으면 좌표를 다시 뽑게함. 근데 가끔 겹쳐서 지피티의 도움으로 clapSize/2를 추가한다는 조언을 실행, 여유분을 두어 해결.
  textAlign(CENTER);
  textSize(clapSize);
  text("🤌", clapx, clapy);
  }
}

function mousePressed(){
  //원하는 곳에 모짜렐라 토핑하기
  let mozzarellaSize = random(50, 90);
  fill(random(240, 256), random(220, 256), random(200, 256));
  stroke(255, 237, 191);
  circle(mouseX, mouseY, mozzarellaSize);
}

//드래그 하는 대로 파슬리 가루 뿌리기
function mouseDragged() {
  let parsleySize = random(2, 6);
  let parsleyX = mouseX + random(-8, 8);
  let parsleyY = mouseY + random(-8, 8);
  noStroke();
  fill(random(25, 65), random(90, 150), random(25, 65));
  circle(parsleyX, parsleyY, parsleySize);
}

let sauceSize;

//마우스를 더블클릭하면 피자도우와 피자소스 랜덤뽑기 
function doubleClicked(){
  //let doughR = random(165, 245);
  //fill(doughR, doughR - random(15, 40), doughR - random(55, 100))
  //실패한 이유: R값을 기준으로 두고 최대한 도우같은 아이보리~흑미도우들을 생산하려 했으나 생각보다 자주 너무 튀는 값-연분홍, 풀색 등-이 나옴 -> R값을 중심으로 잡되 도우의 핵심인 노란기를 조정할 수 있는 새 변수를 주기로 함.
  let doughBase = random(110, 230);
  let doughWarmth = random(48, 100) * sin(PI * doughBase / 255);
  //노란기를 주기 위한 새 변수 도우웜스를 넣었으나 도우G, 도우B에 뭔 값을 곱하든 종종 말도 안되는 연노랑, 흑겨자색이 나오기 시작. 좀 도우같은 채도를 원해서 여러 시도를 해봤지만 하얀색/검은색에 가까울수록 노란기도 적고, 베이지에 가까울수록 노란기의 배리에이션이 많아질 수 있도록 하는 건 단순히 값을 조정하는 걸로는 불가하다는 결론. 최후의 수단 지피티에게 도움을 요청하니 사인함수를 이용해 sin(PI * doughBase / 255)를 곱해보라는 조언을 받아 적용, 효과적.
  let doughR = constrain(doughBase + doughWarmth, 0, 255);
  let doughG = constrain(doughBase + doughWarmth * 0.55, 0, 255);
  let doughB = constrain(doughBase - doughWarmth * 0.25, 0, 255); 
  noStroke()
  fill(doughR, doughG, doughB);
  circle(300, 450, 450)
  //let sauceR = random(165, 245);
  //fill(sauceR, sauceR - random(85, 120),sauceR - random(130, 165))
  //실패한 이유: 셋 다 범위별 랜덤이 가능할 것 같았으나 빨강만 너무 튀어 방사능빨강소스가 나오는 일이 잦음 -> 역시 어느 정도 소스같은 빨강을 내려고 R값을 기준으로 두었으나 역시 도우랑 비슷한 일이 소스에게도 일어남. 똥색, 풀색 소스가 자주 생성됨 -> 도우처럼 2변수로 가려고 시도했으나 소스에서는 노란기는 중요하지 않아 전체적 톤 밝기를 다양화할 수 있도록 소스브라이트니스 변수를 창조.
  let sauceBase = random(35, 190);     
  let sauceBrightness = random(-12, 12);
  let sauceR = constrain(sauceBase + 55 + sauceBrightness, 0, 255);
  let sauceG = constrain(sauceBase * 0.32 + sauceBrightness, 0, 255);
  let sauceB = constrain(sauceBase * 0.16 + sauceBrightness, 0, 255);
  fill(sauceR, sauceG, sauceB);
  sauceSize = random(385, 405)
  circle(300, 450, sauceSize) //소스사이즈랜덤
}

function keyPressed(){ 
  //스페이스를 누르면 클리어
  if(key === ' '){
    background(242, 220, 184);
    //차양
    noStroke()
    fill(230, 51, 34)
    rect(0, 0, 120, 100)
    rect(240, 0, 120, 100)
    rect(480, 0, 120, 100)
    circle(60, 100, 120)
    circle(300, 100, 120)
    circle(540, 100, 120)
    fill(255)
    rect(120, 0, 120, 100)
    rect(360, 0, 120, 100)
    circle(180, 100, 120)
    circle(420, 100, 120)
    //판
    stroke(0)
    fill(94, 49, 6)
    rect(276, 670, 48, 70, 10)
    rect(60, 210, 480, 480, 50)
    noStroke()
    fill(94, 49, 6)
    rect(276, 670, 48, 50)
    fill(242, 220, 184)
    rect(288, 720, 24, 12, 6)
    //마르게리따글자
    textSize(70)
    fill(0)
    textAlign(CENTER)
    text('MARGHERITA', 300, 100);
  }
  //b를 누르면 바질 랜덤 뿌리기
if (key === 'b') {
    let basilx, basily;
    do {
      basilx = random(80, 520);
      basily = random(230, 670);
    } while (dist(basilx, basily, 300, 450) > 200);
    push();
    translate(basilx, basily);
    rotate(random(-PI, PI));
    noStroke();
    fill(random(20, 50), random(90, 145), random(20, 55));
    ellipse(0, 0, random(20, 40), random(50, 70))
    pop();
}
  //f를 누르면 리얼 피자 문구 팝업
    if(key === 'f'){
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(80);
    fill(random(0, 256), random(0, 256), random(0, 256));
    text("REAL PIZZA", 300, 450);
  }
}