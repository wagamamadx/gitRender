function sumar(a,b){
    return (a+b);
}
console.log(sumar(10,20));

//funcion de flecha
let sumaar = (a,b) =>{
    return (a+b);
}
console.log(sumaar(10,20));

let sum = (a,b) => a + b;
console.log(sum(10,20));

let sumarr = function(a,b){
    return (a+b);
}
console.log(sumarr(10,20));

// Ejercicio funcion flecha
function saludar(){
    return 'Hola ctm';
}
console.log(saludar());

let saludamos = () => 'Hola rctm';
console.log(saludamos());



let deadpool = {
    nombre : 'Wade',
    apellido : 'Pezo',
    poder : 'regeneracion',
    getNombre() {
        return `tu nombre ${this.nombre} Tu apellido ${this.apellido} tu poder es ${this.poder}`;
    }
};

console.log(deadpool.getNombre());