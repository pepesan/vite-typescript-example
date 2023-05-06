export function arrays(){
    // ejemplos de arrays
    console.log("Ejemplos de Arrays")
    // definición de array
    var arr = [10, 20, 30, 40];
    console.log(arr);

    // definición de array
    var arr: number[] = [10, 20, 30, 40];
    console.log(arr);

    // definición de array
    var arr: string[] = ["uno", "dos"];
    console.log(arr);

    // tamaño del array
    console.log(arr.length)

    // acceso a datos en el array
    console.log(arr[0]);
    arr[0] ="Cero";

    // meter dato
    arr.push("Tres")
    console.log(arr);

}
