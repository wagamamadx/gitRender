let deadpool = {
    nombre : 'Wade',
    apellido : 'Pezo',
    poder : 'regeneracion',
    getNombre: function(){
        return `tu nombre ${this.nombre}
        Tu apellido ${this.apellido}
        tu poder es ${this.poder}`;
    }
};

console.log(deadpool.getNombre());


let name = deadpool.nombre;
let app = deadpool.apellido;
let power = deadpool.poder;

console.log(`${name} ${app} ${power}`);

//Aplicando destructuracion
let { nombre,apellido,poder } = deadpool;
let { nombre:tmr,apellido:tmr2,poder:tmr3 } = deadpool;
console.log(nombre,apellido,poder);
console.log(tmr,tmr2,tmr3);