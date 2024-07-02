
export function ejerciciosClases(): void{
    console.log("Módulo Ejercicios Clases");
    class Animal{
        private _raza: string;

        constructor(raza: string = "") {
            this._raza=raza;
        }

        get raza(): string {
            return this._raza;
        }

        set raza(value: string) {
            this._raza = value;
        }

        display(): string{
            return "Animal[raza: \""+ this._raza + "\"]";
        }
    }
    let animalico: Animal = new Animal();
    animalico.raza = "Podenco Mediano"
    console.log(animalico.raza)
    console.log(animalico.display())
    console.log(animalico)
    let animalico2: Animal = new Animal();
    animalico2.raza = "Siames"
    console.log(animalico2.raza)
    console.log(animalico2.display())
    console.log(animalico2)

    class Perro extends Animal{
        private _nombre: string;


        constructor(raza: string = "", nombre: string = "") {
            super(raza);
            this._nombre = nombre;
        }
        display(): string{
            return "Perro[raza: \""
                + this.raza
                + "\", "
                + "nombre: \""
                + this._nombre
                + "\""
                + "]";
        }


        get nombre(): string {
            return this._nombre;
        }

        set nombre(value: string) {
            this._nombre = value;
        }
    }
    let nyska: Perro = new Perro();
    console.log(nyska);
    nyska.nombre = "Nyska";
    nyska.raza = "Podenco Mediano";
    console.log(nyska.display());
    let fluky: Perro = new Perro();
    console.log(fluky);
    fluky.nombre = "Flucky";
    fluky.raza = "Pastor de Aguas";
    console.log(fluky.display());
}



