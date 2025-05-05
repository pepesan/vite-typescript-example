
export function variables(){
    console.log("Módulo Variables");
    let inmutable: number= 2;
    console.log("Inmutable: " + inmutable);
    var mutable= 2;
    console.log("Mutable: " + mutable);
    mutable += 1;
    console.log("Mutable: " + mutable);

    const constante: string = "Valor";
    console.log(constante);

    // definición de un array
    let ciudades: string[] = ["cuenca", "salamanca"];

    console.log("Ciudad [0]: " + ciudades[0]);

    enum Color{
        Verde, Rojo, Azul
    }
    let color: Color= Color.Azul;
    console.log("color: "+ color);
    enum ColorEstablecido{
        Verde=0, Rojo=1, Azul=2
    }
    let color2: ColorEstablecido= ColorEstablecido.Azul;
    console.log("color2: "+ color2);

    const variable: any = 11;
    console.log(variable);
    let listado:any[] = [1, "hola"];
    console.log("Listado [1]: "+ listado[1]);

    function hazAlgo(): void{
        console.log("Algo");
    }
    let ret: void=hazAlgo();
    // no tiene puto sentido
    console.log(ret)
}



