export function arrays(){
    // ejemplos de arrays
    console.log("Ejemplos de Arrays")
    // definición de array
    var arr: number[] = [10, 20, 30, 40];
    console.log(arr);

    // definición de array
    var arr2: number[] = [10, 20, 30, 40];
    console.log(arr2);

    // definición de array
    var arr3: string[] = ["uno", "dos"];
    console.log(arr3);

    // tamaño del array
    console.log(arr3.length)

    // acceso a datos en el array
    console.log(arr3[0]);
    arr3[0] ="Cero";

    // meter dato
    arr3.push("Tres")
    console.log(arr3);

}
