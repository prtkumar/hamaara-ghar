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

function enterHome() {
    World.entered = true;
    World.state = "path";
    console.log("घर का द्वार खुल गया।");
}
