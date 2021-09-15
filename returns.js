const age = 30;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner +2;
    return "hello" 
}
const krAge = calculateKrAge(age);
console.log("krAge= "+krAge);


const calculator = {
    plus : function(a, b){
        return a+b;
    },

    minus : function(a, b){
        return a-b;
    },

    times : function(a, b){
        return a*b;
    },

    divide : function(a, b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    },
};

const plusResult = calculator.plus(2,3);
console.log("plusResult = "+ plusResult)


function counter(){
    for(var count =1; ; count++){
        console.log( count+"A");
        if( count === 3){
            return;
        }
        console.log(count+"B");
    }
}

counter();


function plus(a,b) {
    return a+b;
 }
 const demo = plus(5,15);
 console.log("demo =" +demo)

 function magic(x) {
    return function calc(x) { return x * 42 };
  }
  
  var answer = magic(1337);

  console.log(answer)

 