var round = 1;
var who = round % 2;

const boxes = [...document.querySelectorAll('.box')];

boxes.forEach(box => box.addEventListener('click', function(){
    var who = round % 2;
    if (who == 0){
        this.classList.add('cir')}
        else
        this.classList.add('cro');
        round++;
}))
