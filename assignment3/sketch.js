let buttonX = 105;
let buttonY = 115;
let cardW = 190;
let cardH = 290;

let cardDrawn = false;
let cardNumber = 0;

// 메이저 아르카나 22장
let cardNames = [
  "0 바보", "I 마법사", "II 여사제", "III 여황제",
  "IV 황제", "V 교황", "VI 연인", "VII 전차",
  "VIII 힘", "IX 은둔자", "X 운명의 수레바퀴", "XI 정의",
  "XII 매달린 사람", "XIII 죽음", "XIV 절제", "XV 악마",
  "XVI 탑", "XVII 별", "XVIII 달", "XIX 태양",
  "XX 심판", "XXI 세계"
];

let cardMessages = [
  "새로운 모험",
  "가능성을 현실로",
  "마음속 목소리",
  "풍요와 창조성",
  "자신의 중심",
  "배움과 믿음의 길",
  "마음이 이끄는 선택",
  "목표를 향해",
  "부드러운 용기",
  "잠시간의 성찰",
  "변화의 흐름",
  "공정과 균형",
  "새로운 관점",
  "끝은 새로운 시작",
  "서로 다른 것의 조화",
  "속박으로부터의 자유",
  "구체제의 파멸",
  "희망과 영감",
  "불안 속의 직감",
  "기쁨과 자신감",
  "부활과 개선",
  "여정의 완성"
];

function setup() {
  createCanvas(700, 520);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(22, 20, 38);
  noStroke();
  fill(40, 35, 65);
  ellipse(350, 260, 500, 500);
  fill(210, 185, 120);
  textSize(28);
  text("THE MAJOR ARCANA", width / 2, 45);
  fill(190, 180, 210);
  textSize(14);
  text("카드 뽑기 버튼을 눌러 오늘의 타로점을 보세요", width / 2, 78);
  
  let mouseOnButton =
    mouseX > buttonX &&
    mouseX < buttonX + cardW &&
    mouseY > buttonY &&
    mouseY < buttonY + cardH;

  if (mouseOnButton) {
    stroke(255, 220, 145);
    strokeWeight(4);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 200, 100);
  } else {
    stroke(175, 140, 90);
    strokeWeight(2);
    drawingContext.shadowBlur = 0;
  }

  fill(48, 39, 75);
  rect(buttonX, buttonY, cardW, cardH, 14);
  drawingContext.shadowBlur = 0;
  noFill();
  stroke(210, 180, 115);
  strokeWeight(1);
  rect(buttonX + 12, buttonY + 12, cardW - 24, cardH - 24, 9);

  let patternColor;
  if (mouseOnButton) {
    patternColor = color(255, 220, 145);
  } else {
    patternColor = color(190, 155, 100);
  }
  fill(patternColor);
  noStroke();
  quad(buttonX + 28, buttonY + 28, buttonX + 35, buttonY + 35, buttonX + 28, buttonY + 42, buttonX + 21, buttonY + 35);
quad(buttonX + 28, buttonY + 63, buttonX + 35, buttonY + 70, buttonX + 28, buttonY + 77, buttonX + 21, buttonY + 70);
quad(buttonX + 28, buttonY + 98, buttonX + 35, buttonY + 105, buttonX + 28, buttonY + 112, buttonX + 21, buttonY + 105);
quad(buttonX + 28, buttonY + 133, buttonX + 35, buttonY + 140, buttonX + 28, buttonY + 147, buttonX + 21, buttonY + 140);
quad(buttonX + 28, buttonY + 168, buttonX + 35, buttonY + 175, buttonX + 28, buttonY + 182, buttonX + 21, buttonY + 175);
quad(buttonX + 28, buttonY + 203, buttonX + 35, buttonY + 210, buttonX + 28, buttonY + 217, buttonX + 21, buttonY + 210);

quad(buttonX + cardW - 28, buttonY + 28, buttonX + cardW - 21, buttonY + 35, buttonX + cardW - 28, buttonY + 42, buttonX + cardW - 35, buttonY + 35);
quad(buttonX + cardW - 28, buttonY + 63, buttonX + cardW - 21, buttonY + 70, buttonX + cardW - 28, buttonY + 77, buttonX + cardW - 35, buttonY + 70);
quad(buttonX + cardW - 28, buttonY + 98, buttonX + cardW - 21, buttonY + 105, buttonX + cardW - 28, buttonY + 112, buttonX + cardW - 35, buttonY + 105);
quad(buttonX + cardW - 28, buttonY + 133, buttonX + cardW - 21, buttonY + 140, buttonX + cardW - 28, buttonY + 147, buttonX + cardW - 35, buttonY + 140);
quad(buttonX + cardW - 28, buttonY + 168, buttonX + cardW - 21, buttonY + 175, buttonX + cardW - 28, buttonY + 182, buttonX + cardW - 35, buttonY + 175);
quad(buttonX + cardW - 28, buttonY + 203, buttonX + cardW - 21, buttonY + 210, buttonX + cardW - 28, buttonY + 217, buttonX + cardW - 35, buttonY + 210);

  stroke(patternColor);
  strokeWeight(2);
  noFill();
  ellipse(buttonX + cardW / 2, buttonY + 115, 78, 78);
  noStroke();
  fill(patternColor);
  quad(buttonX + cardW / 2, buttonY + 92, buttonX + cardW / 2 + 23, buttonY + 115, buttonX + cardW / 2, buttonY + 138, buttonX + cardW / 2 - 23, buttonY + 115);

quad(buttonX + cardW / 2, buttonY + 105, buttonX + cardW / 2 + 10, buttonY + 115, buttonX + cardW / 2, buttonY + 125, buttonX + cardW / 2 - 10, buttonY + 115);

  fill(245, 225, 180);
  textSize(15);
  text("타로점 보기", buttonX + cardW / 2, buttonY + 230);
  fill(190, 175, 210);
  textSize(11);
  text("PICK A CARD", buttonX + cardW / 2, buttonY + 253);

  fill(150, 140, 170);
  textSize(15);
  text("R 키를 누르면 다시 시작합니다", width / 2, 490);
  
  if (cardDrawn) {
  let x = 405;
  let y = buttonY;
  stroke(225, 205, 155);
  strokeWeight(2);
  fill(235, 225, 200);
  rect(x, y, cardW, cardH, 14);
  noFill();
  stroke(100, 75, 90);
  strokeWeight(1);
  rect(x + 12, y + 12, cardW - 24, cardH - 24, 9);
  fill(65, 50, 70);
  noStroke();
  textSize(16);
  text(cardNames[cardNumber], x + cardW / 2, y + 40);
  //배열 맞추는 것은 아직 몰라서 지피티에게 도움을 받았습니다.

  // 카드별 상징 그림
  let cx = x + cardW / 2
  let cy = y + 135
  stroke(85, 65, 85);
  strokeWeight(3);
  fill(220, 165, 85);

  if (cardNumber == 0) {
    // 바보
    line(cx - 25, cy + 25, cx + 20, cy - 20);
    ellipse(cx - 5, cy - 18, 23, 23);
    line(cx - 5, cy - 6, cx + 5, cy + 18);
    line(cx + 5, cy + 18, cx + 20, cy + 28);
    line(cx + 5, cy + 18, cx - 10, cy + 30);
    ellipse(cx + 30, cy - 30, 10, 10);
  } else if (cardNumber == 1) {
    // 마법사
    line(cx, cy - 40, cx, cy + 5);
    ellipse(cx, cy - 42, 8, 8);
    noFill();
    stroke(85, 65, 85);
    strokeWeight(3);
    ellipse(cx - 12, cy + 20, 25, 20);
    ellipse(cx + 12, cy + 20, 25, 20);
    line(cx - 30, cy + 35, cx + 30, cy + 35);
  } else if (cardNumber == 2) {
    // 여사제
    fill(100, 110, 160);
    ellipse(cx, cy, 50, 50);
    fill(235, 225, 200);
    ellipse(cx + 15, cy - 8, 45, 45);
    stroke(85, 65, 85);
    line(cx - 38, cy + 38, cx - 38, cy - 38);
    line(cx + 38, cy + 38, cx + 38, cy - 38);
  } else if (cardNumber == 3) {
    // 여황제
    triangle(cx - 30, cy - 18, cx - 15, cy - 40, cx, cy - 18);
    triangle(cx, cy - 18, cx + 15, cy - 40, cx + 30, cy - 18);
    rect(cx - 30, cy - 18, 60, 10);
    noStroke();
    fill(190, 90, 105);
    ellipse(cx - 8.33, cy + 13.75, 25, 25);
    ellipse(cx + 8.33, cy + 13.75, 25, 25);
    triangle(cx - 20, cy + 16.875, cx + 20, cy + 16.875, cx, cy + 45);
  } else if (cardNumber == 4) {
    // 황제
    rect(cx - 28, cy - 10, 56, 42);
    rect(cx - 38, cy - 28, 12, 60);
    rect(cx + 26, cy - 28, 12, 60);
    triangle(cx - 25, cy - 28, cx, cy - 45, cx + 25, cy - 28);
  } else if (cardNumber == 5) {
    // 교황
    rect(cx - 35, cy - 30, 12, 65);
    rect(cx + 23, cy - 30, 12, 65);
    ellipse(cx, cy - 20, 16, 16);
    ellipse(cx, cy, 16, 16);
    ellipse(cx, cy + 20, 16, 16);
  } else if (cardNumber == 6) {
    // 연인
    ellipse(cx - 22, cy - 18, 22, 22);
    ellipse(cx + 22, cy - 18, 22, 22);
    line(cx - 22, cy - 5, cx - 22, cy + 22);
    line(cx + 22, cy - 5, cx + 22, cy + 22);
    noStroke();
    fill(190, 90, 105);
    ellipse(cx - 6, cy + 19.5, 18, 18);
    ellipse(cx + 6, cy + 19.5, 18, 18);
    triangle( cx - 14.4, cy + 21.75, cx + 14.4, cy + 21.75, cx, cy + 42);
  } else if (cardNumber == 7) {
    // 전차
    rect(cx - 32, cy - 20, 64, 42);
    ellipse(cx - 22, cy + 28, 20, 20);
    ellipse(cx + 22, cy + 28, 20, 20);
    line(cx, cy - 35, cx, cy - 20);
    ellipse(cx, cy - 35, 12, 12);
  } else if (cardNumber == 8) {
    // 힘
    ellipse(cx, cy + 8, 55, 48);
    ellipse(cx - 18, cy - 18, 20, 20);
    ellipse(cx + 18, cy - 18, 20, 20);
    fill(85, 65, 85);
    ellipse(cx - 10, cy + 5, 5, 5);
    ellipse(cx + 10, cy + 5, 5, 5);
    noFill();
    arc(cx, cy - 35, 40, 18, PI, TWO_PI);
    arc(cx, cy - 35, 40, 18, 0, PI);
  } else if (cardNumber == 9) {
    // 은둔자
    line(cx - 25, cy - 30, cx + 20, cy + 35);
    rect(cx + 5, cy - 28, 30, 30, 5);
    fill(255, 220, 120);
    ellipse(cx + 20, cy - 13, 13, 13);
  } else if (cardNumber == 10) {
    // 운명의 수레바퀴
    noFill();
    ellipse(cx, cy, 75, 75);
    ellipse(cx, cy, 25, 25);
    line(cx, cy - 37, cx, cy + 37);
    line(cx - 37, cy, cx + 37, cy);
    line(cx - 26, cy - 26, cx + 26, cy + 26);
    line(cx + 26, cy - 26, cx - 26, cy + 26);
  } else if (cardNumber == 11) {
    // 정의
    stroke(85, 65, 85);
    strokeWeight(3);
    line(cx, cy - 35, cx, cy + 35);
    line(cx - 32, cy - 25, cx + 32, cy - 25);
    line(cx - 25, cy - 25, cx - 32, cy + 3);
    line(cx - 12, cy - 25, cx - 5, cy + 3);
    line(cx - 38, cy + 3, cx - 32, cy + 12);
    line(cx - 32, cy + 12, cx - 5, cy + 3);
    line(cx + 12, cy - 25, cx + 5, cy + 3);
    line(cx + 25, cy - 25, cx + 32, cy + 3);
    line(cx + 5, cy + 3, cx + 32, cy + 3);
    line(cx + 5, cy + 3, cx + 12, cy + 12);
    line(cx + 12, cy + 12, cx + 38, cy + 3);
    line(cx + 48, cy - 32, cx + 48, cy + 25);
    line(cx + 39, cy - 5, cx + 57, cy - 5);
    line(cx + 43, cy + 25, cx + 48, cy + 33);
    line(cx + 48, cy + 33, cx + 53, cy + 25);
      } else if (cardNumber == 12) {
    // 매달린 사람
    line(cx - 30, cy - 35, cx + 30, cy - 35);
    line(cx + 20, cy - 35, cx + 20, cy - 20);
    ellipse(cx + 20, cy - 10, 18, 18);
    line(cx + 20, cy, cx + 20, cy + 30);
    line(cx + 20, cy + 10, cx, cy + 20);
    line(cx + 20, cy + 10, cx + 38, cy + 20);
  } else if (cardNumber == 13) {
    // 죽음
    fill(235, 225, 200);
    ellipse(cx - 8, cy - 8, 42, 42);
    rect(cx - 20, cy + 8, 24, 15, 5);
    fill(85, 65, 85);
    ellipse(cx - 15, cy - 8, 7, 7);
    ellipse(cx, cy - 8, 7, 7);
    stroke(85, 65, 85);
    line(cx + 15, cy - 35, cx + 30, cy + 35);
    arc(cx + 5, cy - 25, 45, 30, PI, TWO_PI);
  } else if (cardNumber == 14) {
    //절제
    noFill();
    stroke(85, 65, 85);
    strokeWeight(3);
    push();
    translate(cx - 18, cy - 25);
    rotate(PI / 8);
    line(-17, -10, 17, -10);
    line(-17, -10, 0, 14);
    line(17, -10, 0, 14);
    line(0, 14, 0, 34);
    line(-15, 37, 15, 37);
    pop();
    stroke(90, 145, 175);
    strokeWeight(4);
    line(cx + 2, cy - 28, cx + 4, cy - 22);
    line(cx + 4, cy - 22, cx + 6, cy - 16);
    line(cx + 6, cy - 16, cx + 8, cy - 10);
    stroke(85, 65, 85);
    strokeWeight(3);
    line(cx + 8, cy - 10, cx + 42, cy - 10);
    line(cx + 8, cy - 10, cx + 25, cy + 14);
    line(cx + 42, cy - 10, cx + 25, cy + 14);
    line(cx + 25, cy + 14, cx + 25, cy + 34);
    line(cx + 10, cy + 37, cx + 40, cy + 37);
  } else if (cardNumber == 15) {
    // 악마
    triangle(cx - 30, cy - 10, cx - 23, cy - 38, cx - 8, cy - 10);
    triangle(cx + 8, cy - 10, cx + 23, cy - 38, cx + 30, cy - 10);
    ellipse(cx, cy + 5, 45, 45);
    ellipse(cx - 8, cy, 5, 5);
    ellipse(cx + 8, cy, 5, 5);
    noFill();
    ellipse(cx - 32, cy + 35, 20, 12);
    ellipse(cx - 15, cy + 35, 20, 12);
    ellipse(cx + 2, cy + 35, 20, 12);
  } else if (cardNumber == 16) {
    // 탑
    rect(cx - 20, cy - 25, 40, 65);
    rect(cx - 27, cy - 32, 54, 10);
    triangle(cx - 25, cy - 32, cx, cy - 48, cx + 25, cy - 32);
    fill(225, 145, 75);
    quad(cx + 2, cy - 45, cx + 20, cy - 20, cx + 5, cy - 15, cx + 15, cy + 5);
  } else if (cardNumber == 17) {
    // 별
    //별 그리는 작업이 앞으로 9번정도 나오는데 다 일일이 치기가 너무 복잡해서 함수로 만드는 것에 지피티의 도움을 받았습니다.
    fill(110, 145, 190);
    drawStar(cx, cy, 38, 17);
    fill(220, 175, 90);
    drawStar(cx - 35, cy - 30, 10, 4);
    drawStar(cx + 35, cy - 25, 10, 4);
    drawStar(cx - 35, cy + 30, 10, 4);
    drawStar(cx + 35, cy + 30, 10, 4);
  } else if (cardNumber == 18) {
    // 달
    fill(100, 110, 160);
    ellipse(cx, cy - 10, 60, 60);
    fill(235, 225, 200);
    ellipse(cx + 20, cy - 20, 55, 55);
    noFill();
    stroke(90, 125, 160);
    arc(cx - 20, cy + 30, 35, 15, 0, PI);
    arc(cx + 20, cy + 30, 35, 15, 0, PI);
  } else if (cardNumber == 19) {
    // 태양
    stroke(225, 165, 70);
    strokeWeight(3);
    line(cx, cy - 30, cx, cy - 43);
    line(cx, cy + 30, cx, cy + 43);
    line(cx - 30, cy, cx - 43, cy);
    line(cx + 30, cy, cx + 43, cy);
    line(cx - 22, cy - 22, cx - 32, cy - 32);
    line(cx + 22, cy - 22, cx + 32, cy - 32);
    line(cx - 22, cy + 22, cx - 32, cy + 32);
    line(cx + 22, cy + 22, cx + 32, cy + 32);
    fill(225, 165, 70);
    ellipse(cx, cy, 48, 48);
  } else if (cardNumber == 20) {
    // 심판
    fill(190, 145, 85);
    triangle(cx - 25, cy - 8, cx + 20, cy - 25, cx + 20, cy + 8);
    rect(cx - 35, cy - 12, 15, 9);
    noFill();
    arc(cx + 24, cy - 8, 25, 35, -HALF_PI, HALF_PI);
    arc(cx + 32, cy - 8, 40, 50, -HALF_PI, HALF_PI);
    ellipse(cx - 20, cy + 30, 14, 14);
    ellipse(cx + 15, cy + 30, 14, 14);
  } else if (cardNumber == 21) {
    // 세계
    noFill();
    stroke(100, 145, 125);
    strokeWeight(6);
    ellipse(cx, cy, 70, 90);
    strokeWeight(2);
    fill(220, 175, 90);
    drawStar(cx, cy, 17, 8);
    drawStar(cx - 42, cy - 35, 8, 4);
    drawStar(cx + 42, cy - 35, 8, 4);
    drawStar(cx - 42, cy + 35, 8, 4);
    drawStar(cx + 42, cy + 35, 8, 4);
  }

  noStroke();  
  fill(65, 50, 70);
  textSize(12);
  text(cardMessages[cardNumber], x + 15, y + 205, cardW - 30, 55);
  } else {
    fill(170, 160, 190);
    textSize(15);
    text("당신의 카드는 아직 비밀이에요", 500, 260);
  }
}

//별 그리는 작업이 9번정도 나오는데 다 일일이 치기가 너무 복잡해서 함수로 만드는 것에 지피티의 도움을 받았습니다.
function drawStar(x, y, outerSize, innerSize) {
  beginShape();

  for (let i = 0; i < 10; i = i + 1) {
    let angle = -HALF_PI + i * PI / 5;
    let size;

    if (i % 2 == 0) {
      size = outerSize;
    } else {
      size = innerSize;
    }

    let pointX = x + cos(angle) * size;
    let pointY = y + sin(angle) * size;
    vertex(pointX, pointY);
  }

  endShape(CLOSE);
}

function mousePressed() {
  if (
    mouseX > buttonX &&
    mouseX < buttonX + cardW &&
    mouseY > buttonY &&
    mouseY < buttonY + cardH
  ) {
    cardNumber = floor(random(22));
    cardDrawn = true;
  }
}

function keyPressed() {
  if (keyCode == 82) {
    cardDrawn = false;
    cardNumber = 0;
  }
}