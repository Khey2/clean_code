(()=>{
    //! APLICANDO PRINCIPIO DE COMPOSICION UNICA PARA SUSTITUIR A LA HERENCIA

    //? Aplicando principio de responsabilidad UNICA
    //? Priorizar compisicion frente a herencia 
    //? ( EVITA HERENCIA de extends AMENOS QUE SEA NECESARIO )

    /**
     * Que es la composicion?, es crear 1 clase que UNA A TODAS, entonces
     * esa clase funciona como una CAPA en la cual mandaras a llamar
     * instancias de otras clases y les mandaras los patrametros que ocupen
     */

    type Gender = 'M'|'F'

    interface PersonProps{
        name: string, 
        gender: Gender, 
        birthdate: Date 
    }

    //? SI APLICA EL PRINCIPIO DE RESPONSABILIDAD UNICA
    //? porque no depende de nadie
    class Person {
        public birthdate : Date;
        public gender    : string;
        public name      : string;

        constructor( { name , gender, birthdate }: PersonProps){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

 
    interface UserProps{
        email:     string;
        role:      string;
    }
    //? No depende de nadie
    class User {
        public email       : string;
        public lastAccess  : Date;
        public role        : string;

        constructor(
            { email, role }: UserProps,
        ){
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials(){
            return true;
        }
    }


    interface SettingProps{
        workingDirectory: string,
        lastOpenFolder: string,
    }
    //? No depende de nadie
    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            { workingDirectory, lastOpenFolder } : SettingProps
        ){
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
         }
    }


    interface UserSettingsProps{
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }

    //! clase que es una composicion de otras clases
    //! ESTO ES MAS FACIL DE ENTENDER QUE LA FORMA B o A
    class UserSettings{
        public person  : Person;
        public user    : User;
        public settings: Settings;

        constructor(
            {
                //! Props de Person
                name, gender, birthdate,
                //! Props de user
                email, role ,
                //! Props de esta SeetingProps
                lastOpenFolder, workingDirectory

            }: UserSettingsProps
        ){
            //? se mandan a llamar las instancias con params envez de usar extends
            this.person   = new Person({ name, gender, birthdate});
            this.user     = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }


    const userSettings = new UserSettings(
      { 
        workingDirectory:'/usr/home'  ,
        lastOpenFolder:'/emails'      ,
        email:'mike@sah.mx',
        role:'Admin'      ,
        name :'Fernando'   ,
        gender: 'M'          ,
        birthdate :new Date('1985-09-21')
      }
    )

    //? ahora userSettings esta compuesto por varias clases.. ( por eso es una clase de tipo
    //? composicion )


    console.log( {userSettings} )
    console.log( userSettings.user.checkCredentials() )
})()