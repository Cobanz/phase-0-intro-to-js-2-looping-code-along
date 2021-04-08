// Code your solutions in this file

function writeCards(names, surprise) {
    let people = []


    for (let i = 0; i < names.length; i++) {
        
       people.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);

    }
return people

}



function countDown() {
    let i = 10;
    while (i > 0) {
        console.log(i);
        i--;
    }
    console.log(i);
}

