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
    element.innerHTML = element.innerHTML + ", suma: " + k;
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
    // Guarda un dato en LocalStorage y recupéralo, comprueba con try catch que no tienes ningún error, y presenta el valor por pantalla
    try {
        // Almacenar un dato en el LocalStorage
        localStorage.setItem("dato", "valor de prueba");

        // Recuperar el dato del LocalStorage
        const valorRecuperado = localStorage.getItem("dato");

        // Verificar que se haya obtenido un valor
        if (valorRecuperado !== null) {
            // Mostrar el valor en la consola
            console.log("Valor recuperado:", valorRecuperado);

            // También se puede mostrar el valor en la pantalla, por ejemplo, en el body del documento
            element.innerHTML = element.innerHTML + `, Valor recuperado: ${valorRecuperado}`;
        } else {
            console.log("No se encontró ningún dato en LocalStorage.");
        }
    } catch (error) {
        // Capturar y mostrar cualquier error que pueda ocurrir
        console.error("Error al acceder a LocalStorage:", error);
    }


    // 1. Función que imprime un valor por consola
    function printValue(value: any): void {
        console.log(value);
    }

    // 2. Función que suma dos valores e imprime el resultado por consola
    function sumAndPrint(a: number, b: number): void {
        console.log(a + b);
    }

    // 3. Función que suma dos valores y devuelve el resultado
    function sum(a: number, b: number): number {
        return a + b;
    }

    // 4. Función que suma dos valores, ambos opcionales, y devuelve el resultado
    // Se usa el operador nullish (??) para tratar los valores no definidos como 0.
    function sumOptional(a?: number, b?: number): number {
        return (a ?? 0) + (b ?? 0);
    }

    // 5. Función que suma dos valores, con valores por defecto, y devuelve el resultado
    // Los parámetros tienen valores por defecto asignados (0 en este caso).
    function sumDefault(a: number = 0, b: number = 0): number {
        return a + b;
    }

    // 6. Función que admite un número indeterminado de parámetros de tipo string y devuelve su concatenación
    function concatStrings(...strings: string[]): string {
        return strings.join('');
    }

    // Ejemplos de uso:
    printValue("Hola Mundo");
    sumAndPrint(5, 7);
    console.log("Suma:", sum(10, 15));
    console.log("Suma opcional:", sumOptional(8));
    console.log("Suma con valores por defecto:", sumDefault());
    console.log("Concatenación:", concatStrings("Type", "Script", " es ", "genial"));


}