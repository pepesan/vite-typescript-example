export function ejercicios(element: HTMLParagraphElement):void{
    console.log("ejercicios");
    // Crea una variable de cada tipo siguiente: null, boolean, number, string y presentalas por pantalla dentro de un párrafo
    var nulo: null = null;
    var booleano: boolean = false;
    var numero: number = 2;
    var cadena: string = "Hola";
    element.innerHTML = "nulo: " + nulo + ", booleano: " + booleano + ", numero: " + numero + ", cadena: " + cadena;
    // Crea un tres de variables de tipo number, suma las dos primeras y coloca el valor de la suma por pantalla
    var i: number = 1;
    var j: number = 2;
    var k: number = i+j;
    element.innerHTML = element.innerHTML + "suma: " + k;
    // Declara dos variables con var y let y una constante con const
    var var1: number = 0;
    let var2: number = 0;
    const var3: number = 0;

    /*
        Crea un array de 10 números como variable
        Recorre el array con: for, while y do while
        Recorre el array con for of y for in
        Imprime todas las iteraciones por pantalla
     */
    var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    for (let i = 0; i < 10; i++) {
        console.log(arr[i]);
    }
    var i = 0;
    while (i<arr.length) {
        console.log(arr[i]);
        i++;
    }
    i = 0;
    do {
        console.log(arr[i]);
        i++;
    }while (i < arr.length);

    for (let val of arr) {
        console.log(val); // prints values: 10, 20, 30, 40
    }

    for (let index in arr) {
        console.log(index); // prints indexes: 0, 1, 2, 3, 4

        console.log(arr[index]); // prints elements: 10, 20, 30, 40, 50
    }
}