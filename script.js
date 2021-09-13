console.log("2021.09.13");
console.log(new Date())

function sayHello(nameOfPerson, age){
    console.log("my name is"+ nameOfPerson + "my age"+ age);
}

sayHello("nico", 10);
sayHello("dal", 23);

const player ={
    name: "soo",
    sayHello : function(otherPersoneName){
        console.log("hello "+otherPersoneName+" nice to meet you")
    },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("junko"); // 







