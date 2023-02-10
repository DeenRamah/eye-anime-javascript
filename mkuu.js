const stivo = document.getElementById('stivo');
const jicho = document.getElementById('jicho');
const macho = document.getElementById('macho');
const mdomo = document.getElementById('mdomo');
const kichwa = document.getElementById('kichwa');
const haga = document.getElementById('kichwa');

document.querySelector('body').addEventListener('mousemove', eyeball);
        function eyeball(){
           jicho = document.querySelectorAll('.jicho i');
           jicho.forEach(function(jicho){
            let x = (jicho.getBoundingClientRect().left) + (jicho.clientWidth /2);
            let y = (jicho.getBoundingClientRect().top) + (jicho.clientHeight /2);
            let radian = Math.atan2(event.pageX - x, event.pageY -y);
            let rot = (radian * (180 /Math.PI) * -1);
            jicho.style.transform = "rotate("+ rot +"deg)";

   })
}