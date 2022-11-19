// Code your solutions in this file
function writeCards(names){
    let messages = []
    for(const element of names) {
        messages.push(`Thank you, ${element}, for the wonderful surprise gift!`)
    }
    return messages;
}
function countDown(number){
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}