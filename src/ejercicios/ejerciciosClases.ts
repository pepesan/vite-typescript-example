
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
    console.log(nyska.nombre);
    nyska.raza = "Podenco Mediano";
    console.log(nyska.display());
    let fluky: Perro = new Perro();
    console.log(fluky);
    fluky.nombre = "Flucky";
    fluky.raza = "Pastor de Aguas";
    console.log(fluky.display());

    class Mapa<K, V> {
        private data: Map<K, V>;

        // Función constructora
        constructor() {
            this.data = new Map<K, V>();
        }

        // Función add: agrega o actualiza un par clave-valor
        add(clave: K, valor: V): void {
            this.data.set(clave, valor);
        }

        // Función borrar: elimina la entrada asociada a la clave
        borrar(clave: K): boolean {
            return this.data.delete(clave);
        }

        // Función display: muestra todas las entradas del mapa por consola
        display(): void {
            this.data.forEach((valor, clave) => {
                console.log(`Clave: ${clave} -> Valor: ${valor}`);
            });
        }
    }

    // Ejemplo de uso:
    const miMapa = new Mapa<number, string>();
    miMapa.add(1, "Uno");
    miMapa.add(2, "Dos");
    console.log("Mapa inicial:");
    miMapa.display();

    miMapa.borrar(1);
    console.log("Después de borrar la clave 1:");
    miMapa.display();


    class MyMap<K, V> {
        private items: { key: K; value: V }[];

        constructor() {
            this.items = [];
        }

        /**
         * Añade un par clave–valor.
         * Si la clave ya existe, actualiza su valor.
         */
        add(key: K, value: V): void {
            const index = this.items.findIndex(item => item.key === key);
            if (index !== -1) {
                this.items[index].value = value;
            } else {
                this.items.push({ key, value });
            }
        }

        /**
         * Borra el elemento con la clave dada.
         * @returns true si encontró y borró el elemento, false si no existía.
         */
        delete(key: K): boolean {
            const index = this.items.findIndex(item => item.key === key);
            if (index !== -1) {
                this.items.splice(index, 1);
                return true;
            }
            return false;
        }

        /**
         * Muestra en consola todas las entradas del mapa.
         */
        display(): void {
            console.log('Map Contents:');
            for (const { key, value } of this.items) {
                console.log(`${String(key)} => ${value}`);
            }
        }
    }

    const map = new MyMap<string, number>();

    map.add('uno', 1);
    map.add('dos', 2);
    map.display();
    // Output:
    // Map Contents:
    // uno => 1
    // dos => 2

    map.add('uno', 11);
    map.display();
    // Map Contents:
    // uno => 11
    // dos => 2

    console.log(map.delete('dos'));  // true
    console.log(map.delete('tres')); // false

    map.display();
    // Map Contents:
    // uno => 11

    // Definimos la interfaz para nuestros pares clave–valor
    interface MyKeyValue<K, V> {
        key: K;
        value: V;
    }

    // Nueva implementación usando la interfaz MyKeyValue
    class MyMapWithInterface<K, V> {
        private items: MyKeyValue<K, V>[];

        constructor() {
            this.items = [];
        }

        /**
         * Añade o actualiza un par clave–valor
         */
        add(key: K, value: V): void {
            const existing = this.items.find(item => item.key === key);
            if (existing) {
                existing.value = value;
            } else {
                this.items.push({ key, value });
            }
        }

        /**
         * Borra un elemento por su clave.
         * Devuelve true si existía y se borró, false en caso contrario.
         */
        delete(key: K): boolean {
            const index = this.items.findIndex(item => item.key === key);
            if (index >= 0) {
                this.items.splice(index, 1);
                return true;
            }
            return false;
        }

        /**
         * Obtiene el valor asociado a una clave, o undefined si no existe.
         */
        get(key: K): V | undefined {
            return this.items.find(item => item.key === key)?.value;
        }

        /**
         * Devuelve el número de elementos en el mapa.
         */
        size(): number {
            return this.items.length;
        }

        /**
         * Muestra en consola todas las entradas del mapa.
         */
        display(): void {
            console.log('Contenido de MyMapWithInterface:');
            for (const { key, value } of this.items) {
                console.log(`${String(key)} => ${value}`);
            }
        }
    }


    const map2 = new MyMapWithInterface<string, number>();

    map2.add('uno', 1);
    map2.add('dos', 2);
    map2.display();
    // Contenido de MyMapWithInterface:
    // uno => 1
    // dos => 2

    console.log(map2.get('uno')); // 1
    console.log(map2.size());    // 2

    map2.add('uno', 11);
    map2.display();
    // uno => 11
    // dos => 2

    console.log(map2.delete('dos'));  // true
    console.log(map2.delete('tres')); // false

    map2.display();
    // uno => 11
    console.log(map2.size()); // 1


}



