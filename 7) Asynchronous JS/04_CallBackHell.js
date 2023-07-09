// The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell.


// The shape of the resulting code structure resembles a pyramid
// and hence callback hell is also called the “pyramid of the doom”.
// It makes the code very difficult to understand and maintain.

// In the Below example:

// step1 - take a milk 
// step2 - turn on the gas
// step3 - add tea leaf
// step4 - add sugar
// step5 - boil tea
// step6 - filter and serve


const makeTea = (nextStep) => {
    getMilk(function(milk) {
        turnOnGas(milk,function onGas(){
            addIngredient(teaLeaf,sugar,function add(){
                boil(function Boiled() {
                    filter(tea,function teaReady(tea){
                        nextStep(tea);
                    });
                });
            });
        });
    });
}

makeTea(milk);
