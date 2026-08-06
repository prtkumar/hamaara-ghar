/*

Hamaara Ghar

Engine Version 1.0

*/

const GHAR = {

version : "1.0",

state : "closed",

room : "gate"

};

console.log("हमारा घर प्रारम्भ हो गया।");

const World = {
    state: "gate",
    entered: false,
    currentRoom: "gate"
};

function enterHome(){

const gate = document.querySelector(".arch");
const hero = document.querySelector(".hero");

gate.classList.add("open");
hero.classList.add("light");

setTimeout(()=>{

alert("यहाँ से हमारा घर आरम्भ होगा।");

},1800);

}
