module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
   let Hanoi = {
       turns:0,
       seconds:0,
   }
   
    Hanoi.turns = (2 ** disksNumber)-1;
    Hanoi.seconds = Hanoi.turns / (turnsSpeed/3600);
   return Hanoi;
}