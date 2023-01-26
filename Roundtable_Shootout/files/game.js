let punkteAnzeige = document.querySelector('#highscore_num');

let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/') + 1);

let playground = document.querySelector('.playground');

let spielfeld = document.querySelector('.grid-container');

let hand_left = document.querySelector('.fingergun_l');

let hand_right = document.querySelector('.fingergun_r');

let score;

let highscore;

let random_number;

let Sp1;

let Sp2;

let go = 0;

random_number = Math.random() * (600 - 180) + 180;
random_number = Math.round(random_number);
let countdown = new Timer(random_number);

let zaehler = new Timer(6);

let speed = new Timer(15);

function loop() {
  switch (filename) {
    case 'index.html':
      if (keyboard(32)) {
        Sp1 = 0;
        Sp2 = 0;
        parseInt(localStorage.setItem('punkteSp1', Sp1));
        parseInt(localStorage.setItem('punkteSp2', Sp2));
        window.location.href = 'files/pages/begin.html';
      } else if (keyboard(72)) {
        window.location.href = 'files/pages/highscore.html';
      } else if (keyboard(73)) {
        window.location.href = 'files/pages/instructions.html';
      }
      break;

    case 'highscore.html':
      score = parseInt(localStorage.getItem('time'));
      if (parseInt(localStorage.getItem('highscore')) > score) {
        //Das hat auch nicht so funktioniert wie ich es gerne hätte...
        parseInt(localStorage.setItem('highscore', score)); //Wenigstens zeight es schon "Null" an
      }
      highscore = parseInt(localStorage.getItem('highscore'));
      punkteAnzeige.textContent = highscore;
      if (keyboard(66)) {
        window.location.href = '../../index.html';
      }
      break;

    case 'instructions.html':
      if (keyboard(66)) {
        window.location.href = '../../index.html';
      }
      break;

    case 'begin.html':
      if (keyboard(83) && keyboard(75)) {
        window.location.href = 'duel.html';
      }
      break;

    case 'duel.html':
      if (countdown.ready()) {
        var img = document.createElement('img');
        img.src = '../../images/shoot.png';
        img.id = 'bang';
        playground.appendChild(img);
        go = 1;
      }

      if (go == 1) {
        if (zaehler.ready()) {
          score = score + 0.1;
        }
      }

      if (go == 1 && keyboard(83)) {
        go = 0;
        Sp1 = parseInt(localStorage.getItem('punkteSp1'));
        Sp1 = parseInt(Sp1) + 1;
        localStorage.removeItem('punkteSp1');
        parseInt(localStorage.setItem('punkteSp1', Sp1));
        if (parseInt(localStorage.getItem('time')) > score) {
          parseInt(localStorage.setItem('time', score));
        }
        //window.location.href = 'point1.html';
        window.location.href = 'punkte.html';
      } else if (go == 1 && keyboard(75)) {
        go = 0;
        Sp2 = parseInt(localStorage.getItem('punkteSp2'));
        Sp2 = parseInt(Sp2) + 1;
        localStorage.removeItem('punkteSp2'); //Ich hatte zu viel Ärger mit dem Zwischenspeicher.
        parseInt(localStorage.setItem('punkteSp2', Sp2)); //Da wollte ich auf Nummer sicher gehen wollte
        if (parseInt(localStorage.getItem('time')) > score) {
          parseInt(localStorage.setItem('time', score));
        }
        //window.location.href = 'point2.html';
        window.location.href = 'punkte.html';
      }
      break;

    /*case 'point1.html':
      let bullet_left = document.querySelector('.bullet_l');
      if (speed.ready()) {
        bullet_left.style.left = parseInt(bullet_left.style.left) + 10 + 'px'; //Hat so nicht funktioniert. Die Kugel hat sich nicht bewegt
      }
      if (anyCollision(bullet_left, hand_right)) {
        window.location.href = 'punkte.html';
      }
      break;

    case 'point2.html':
      let bullet_right = document.querySelector('.bullet_r');
      if (speed.ready()) {
        bullet_right.style.right =
          parseInt(bullet_right.style.right) + 10 + 'px';
      }
      if (anyCollision(bullet_right, hand_left)) {
        window.location.href = 'punkte.html';
      }
      break;*/

    case 'punkte.html':
      Sp1 = parseInt(localStorage.getItem('punkteSp1'));
      Sp2 = parseInt(localStorage.getItem('punkteSp2'));

      if (Sp1 == 0) {
        let img_rd0 = document.createElement('img');
        img_rd0.src = '../../images/rot/rd0.png';
        img_rd0.className = 'punktesp1_img';
        spielfeld.appendChild(img_rd0);
        if (keyboard(32)) {
          window.location.href = 'begin.html';
        }
      } else if (Sp1 == 1) {
        let img_rd1 = document.createElement('img');
        img_rd1.src = '../../images/rot/rd1.png';
        img_rd1.className = 'punktesp1_img';
        spielfeld.appendChild(img_rd1);
        if (keyboard(32)) {
          window.location.href = 'begin.html';
        }
      } else if (Sp1 == 2) {
        let img_rd2 = document.createElement('img');
        img_rd2.src = '../../images/rot/rd2.png';
        img_rd2.className = 'punktesp1_img';
        spielfeld.appendChild(img_rd2);
        if (keyboard(32)) {
          window.location.href = 'begin.html';
        }
      } else if (Sp1 == 3) {
        window.location.href = 'spieler1win.html';
      }

      if (Sp2 == 0) {
        let img_bl0 = document.createElement('img');
        img_bl0.src = '../../images/blau/bl0.png';
        img_bl0.className = 'punktesp2_img';
        spielfeld.appendChild(img_bl0);
        if (keyboard(32)) {
          window.location.href = 'begin.html';
        }
      } else if (Sp2 == 1) {
        let img_bl1 = document.createElement('img');
        img_bl1.src = '../../images/blau/bl1.png';
        img_bl1.className = 'punktesp2_img';
        spielfeld.appendChild(img_bl1);
        if (keyboard(32)) {
          window.location.href = 'begin.html';
        }
      } else if (Sp2 == 2) {
        let img_bl2 = document.createElement('img');
        img_bl2.src = '../../images/blau/bl2.png';
        img_bl2.className = 'punktesp2_img';
        spielfeld.appendChild(img_bl2);
        if (keyboard(32)) {
          window.location.href = 'begin.html';
        }
      } else if (Sp2 == 3) {
        window.location.href = 'spieler2win.html';
      }
      break;

    case 'spieler1win.html':
      if (keyboard(32)) {
        window.location.href = '../../index.html';
      }
      break;

    case 'spieler2win.html':
      if (keyboard(32)) {
        window.location.href = '../../index.html';
      }
      break;
  }
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
