(()=>{

    //! No aplicando principio de responsabilidad unica 
    
    type Gender = 'M'|'F'

    //? Definir clase de forma normal ( y LARGA )
    // class Person {
    //     public name:      string;
    //     public gender:    Gender;
    //     public birthdate: Date;

    //     constructor( name: string, gender: Gender, birthdate: Date ){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }

    //? FORMA CORTA ( es lo mismo )
    class Person {
        constructor( 
            public name: string, 
            public gender: Gender, 
            public birthdate: Date 
        ){}
    }


    class User extends Person{
        public lastAccess: Date;

        constructor(
             public  email: string,
             public  role: string,
             //! props para la clase padre ( Person )
             name: string,
             gender: Gender,
             birthdate: Date
        ){
            //llamando constructor del padre.. necesario, porque debes 
            // inicializar
            // las propiedades del constructor del padre
            super( name, gender, birthdate )
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    //UserSettings de usuario necesita propiedades y funciones de User
    //! para cumplir los requisitos debes mandar todas las propiedades 
    //! que ocupa USER para funcionar internamente...ademas
    //! USER OCUPA PROPIEDADES DE PERSON, por lo que deberas mandar ambas
    class UserSettings extends User{
        constructor(
            //!Props de UserSettings
            public workingDirectory: string,
            public lastOpenFolder: string,
            //!Props user
            email: string,
            role: string,
            //! props Person
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }

    //! User settings hace muchas cosas distintas...
    //! directorio del usuario, ultimo folder abierto, email
    //! genero, cumpleaños..
    const userSettings = new UserSettings(
        '/usr/home'  ,
        'email'      ,
        'mike@sah.mx',
        'Admin'      ,
        'Fernando'   ,
        'M'          ,
        new Date('1985-09-21')
    )

    //? Si te fijas el problema es que esta clase esta FUERTEMENTE ACOPLADA A OTRAS 2
    //?.. si 1 cambia.. todo cambiara como consecuencia
    console.log( {userSettings, valid: userSettings.checkCredentials()} )

})()