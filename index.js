// Code your solutions in this file
function writeCards(names){
    let messages = []
    for(let i in names) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}
function countDown(number){
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}