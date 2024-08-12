
interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    
}



class Tucan implements Bird {

    public fly(){} 

    public eat(){}

    public run(){}

}


class Humingbird implements Bird{

    public fly(){}
    public eat(){}
    public run(){}

}

//! LA AVESTRUZ NO VUELA
//! aquis e ve la violacion al principio de la segregacion de interfaz
//? debido a que los animales que no vuelen estan OBLIGADOS a implementar
//? los cambios que se hagan en la interfaz...y por lo tanto deberas modificar
//? clases que no ocupan este metodo
class Ostrich implements Bird{

    // public fly(){}
    public eat(){}
    public run(){}

}
class Pinguin implements Bird{

    // public fly(){}
    public eat(){}
    public run(){}

    public swim() {}

}

//? solucion, segrega en diferentes clases de tal manera que si X clase
//? implementa aveVoladora, debes implementar todo lo de AveVoladora