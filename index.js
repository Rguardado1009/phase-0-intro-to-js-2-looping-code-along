const cards=[];
function writeCards(array){
    for (let i = 0; i < array.length; i++) {
        cards.message = `Thank you, ${array[i]}, for the wonderful surprise gift!`
        cards.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return cards;
}
writeCards(cards);
  
function countDown(integer){
    
   while (integer >=0) {
       console.log(integer);
       integer--;
    
    }
  }
  countDown(4);