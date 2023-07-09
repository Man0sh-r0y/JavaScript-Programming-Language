//Default Parameters
function interest(p,r=6,y=9) {
    return p*r*y/100;
}
// if the value of r and y are not passed by user then default value will be used

console.log(interest(1000));