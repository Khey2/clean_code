(()=>{

    //? REFACTORIZACION

    type Gender = 'M'|'F'

    interface PersonProps{
        name: string, 
        gender: Gender, 
        birthdate: Date 
    }

    //? Forma optimizada
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

    //? 10/10
    interface UserProps{
        email:     string;
        role:      string;
        name:      string;
        gender:    Gender;
        birthdate: Date;
    }

    class User extends Person{
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor(
            { email, role, name, gender, birthdate }: UserProps,
        ){
            super( {name, gender, birthdate} );

            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
       
        }

        checkCredentials(){
            return true;
        }
    }

    //! TAREA, HAZ ESTO, adaptalo como el anterior.
    interface UserSettingProps{
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }
    class UserSettings extends User{
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            {
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate} : UserSettingProps
        ){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
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

    // console.log( {userSettings, valid: userSettings.checkCredentials()} )

})()