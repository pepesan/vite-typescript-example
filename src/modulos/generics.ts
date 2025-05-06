export function genericos() {
    console.log("Módulo Genéricos");

    /*
    Uso normal de funciones
     */
    function getArray(items : any[] ) : any[] {
        return new Array().concat(items);
    }

    var myNumArr: any[] = getArray([100, 200, 300]);
    var myStrArr: any[] = getArray(["Hello", "World"]);

    myNumArr.push(400); // OK
    myStrArr.push("Hello TypeScript"); // OK

    /*
    Versión genérica
     */
    function getArray2<T>(items : T[] ) : T[] {
        return new Array<T>().concat(items);
    }

    myNumArr = getArray2<number>([100, 200, 300]);
    myStrArr = getArray2<string>(["Hello", "World"]);

    myNumArr.push(400); // OK
    myStrArr.push("Hello TypeScript"); // OK
    // myNumArr.push("Hello TypeScript"); // Not OK
    /*
        Genéricas con dos tipos
     */
    function displayType<T, U>(id:T, name:U): void {
        console.log(typeof(id) + ", " + typeof(name));
    }

    displayType<number, string>(1, "Steve"); // number, string

    /*
    Genéricos con arrays
     */
    function displayNames<T>(names:T[]): void {
        console.log(names.join(", "));
    }

    displayNames<string>(["Steve", "Bill"]); // Steve, Bill

    /*
    Genéricas
     */
    class Person {
        firstName: string;
        lastName: string;

        constructor(fname:string,  lname:string) {
            this.firstName = fname;
            this.lastName = lname;
        }
    }

    function display<T extends Person>(per: T): void {
        console.log(`${ per.firstName} ${per.lastName}` );
    }
    var per = new Person("Bill", "Gates");
    display(per); //Output: Bill Gates

    class Listado<T>{
        private _listado: T[]


        constructor(listado: T[]) {
            this._listado = listado;
        }


        get listado(): T[] {
            return this._listado;
        }

        set listado(value: T[]) {
            this._listado = value;
        }

        display(): string {
            return "Listado["+this._listado.join(",")+ "]";
        }
    }

    var miListado: Listado<string> = new Listado<string>(["uno", "dos"])
    console.log(miListado.display());

    class KeyValuePair<T,U>
    {
        // @ts-ignore
        private key: T;
        // @ts-ignore
        private val: U;

        setKeyValue(key: T, val: U): void {
            this.key = key;
            this.val = val;
        }

        display():void {
            console.log(`Key = ${this.key}, val = ${this.val}`);
        }
    }
    let kvp1 = new KeyValuePair<number, string>();
    kvp1.setKeyValue(1, "Steve");
    kvp1.display(); //Output: Key = 1, Val = Steve
    let kvp2 = new KeyValuePair<string, string>();
    kvp2.setKeyValue("Cliente", "Steve");
    kvp2.display(); //Output: Key = Cliente, Val = Steve
}
