/*
var topics = "HTML, CSS, Git, JavaScript";
console.log(topics) // see if lines need to end with ;
*/
var topics = ['HTML','CSS','Git','JavaScript'];
/*
for(let x = 0; x < topics.length; x++)
{
    console.log(topics[x]);
}

*/
//var topic = "HTML"
let num = Math.floor(Math.random()* topics.length)
let randomTopic = topics[num]

//console.log(num)

function selectTopic()
{
    if(randomTopic === 'HTML')
    {
        console.log("Let's study HTML!");
    }
    else if(randomTopic ==='CSS')
    {
        console.log("Let's study CSS!");
    }
    else if (randomTopic === 'Git')
    {
        console.log("Let's study Git!")
    }
    else if(randomTopic == 'JavaScript')
    {
        console.log("Let's study JavaScript")   
    }
    else{
        console.log('Please try again');
    }
}
/*
//global declaration
var shapes = ["triangle","square","pentagon", "circle"];
//output the first item in the array starting at 0
//console.log(shapes[0]);

for(var x = 0; x < shapes.length; x++)
{
    console.log(shapes[x]);
}
*/

function helloWorld() 
{
    console.log("Hello, world, I am a function !")
}

function listTopics()
{
    for(let x = 0; x < topics.length; x++)
    {
        console.log(topics[x]);
    }
}

console.log('Here are the topics we learned through Prework:')
listTopics()
console.log('Which topic should we study first?');
selectTopic();