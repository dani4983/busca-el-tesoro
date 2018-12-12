const WIDTH = 800;
const HEIGH = 800;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};


let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 30 ) {
    alert(`Has encontrado el tesoro en ${clicks} clicks!`);
    location.reload();
  }
});
