const tra=(b,h)=>{
    let aoft = 1/2 *b*h;
    console.log(`area of triangle ${aoft}`);
};
const ptra = (a,b,c)=>{
    let poft=(a+b+c);
    console.log(`perimeter of triangle : ${poft}`);
};
const rec =(l,b)=>{
    let aofr = l*b;
    console.log(`area of rectangle :  ${aofr}`);
};
const prec = (l,b)=>{
    let pofr=(2*(l+b));
    console.log(`perimeter of rectangle : ${pofr}`);
};
const cir=(r)=>{
    let aofc = Math.PI * Math.pow(r,2);
    console.log(`area of circle :  ${aofc}`);
};
const pcir = (r)=>{
    let pofc= 2 * Math.PI * r;
    console.log(`perimeter of circle : ${pofc}`);
};
tra(4,6);
ptra(6,4,8);
rec(15,18);
prec(14,17);
cir(9);
pcir(9);