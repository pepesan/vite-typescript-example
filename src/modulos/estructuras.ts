export function estructuras() {
    console.log("Módulo de estructuras");
    // definición de array
    let arr = [10, 20, 30, 40];

    for (let val of arr) {
        console.log(val); // prints values: 10, 20, 30, 40
    }
    // puede recorrer un array de any con for of
    let arr2: any[] = [null, 1, "hola"];

    for (let val of arr2) {
        console.log(val); // prints values: null, 1, "hola"
    }

    arr = [10, 20, 30, 40, 50];

    for (let index in arr) {
        console.log(index); // prints indexes: 0, 1, 2, 3, 4

        console.log(arr[index]); // prints elements: 10, 20, 30, 40, 50
    }
}
