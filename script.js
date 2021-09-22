
/* Step 1: STORE MESSAGE COMPONENTS
An array would be a good choice here because you can randomly access an array’s elements. 
Remember, there will be at least 3 sets of data that make up your final message so you might consider having multiple arrays.
You may want to nest these arrays inside of an object to keep them organized.*/

    const allMessages = {
        signInfo: ['star', 'moon', 'sun', 'comet'],
        fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
        advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
    };

/* Step 2: CREATE THE MESSAGE
Add functionality to randomly select the different message components so they can create a cohesive message.
You can use a loop to iterate through the object, 
with a switch case that can select and format each of the different message components*/

 
  const myMessage = [];


const random = array => {
    let index = Math.floor(Math.random()*array.length);
    return array[index];
}


    for( let prop in allMessages) {
    
    switch (prop) {

        case 'signInfo':
            myMessage.push(`Your sign right now is ${random(allMessages.signInfo)} `);

        break;
        
        case 'fortuneOutput':
                myMessage.push(`You are having ${random(allMessages.fortuneOutput)}`);
                break;

        case 'advice':
                myMessage.push(`You should ${random(allMessages.advice)}`);

        break;         
    }
    };  

/* Step 3 PUT THE PROGRAM TOGETHER : 
Combine the different parts of your program so the random messages are:
selected, combined, and then displayed to the user each time they run the program.
You can use a function to handle the overall formatting and display of the randomized message.*/


    formatMessages = array => { 
        const formatted = array.join('\n');
        console.log(formatted);
    }
    
    formatMessages(myMessage);









