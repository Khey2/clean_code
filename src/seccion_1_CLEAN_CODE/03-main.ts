(() => {

    //? 10/10
    function getMovieById( id: string ) {
        console.log({ id });
    }

    //? 10/10
    function getActorsByMovieId( id: string ) {
        console.log({ id });
    }

    //? 10/10
    function getBioActorById( id: string ) {
        console.log({ id });
    }
    
    interface MovieOptions{
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }
    //? 20/10
    function createMovie( { title , description , rating , cast } : MovieOptions ) {
        console.log({ title, description, rating, cast });
    }

    //? 10/10
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    //? CONTINUACION PARTE 2
    // PROBLEMAS:
    //          - Espesifica el tipo de variables
    //          - MUCHOS if/else/if/else/if/else
    //          - un interface seria bonito en los parametros

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;
    
        return ( isRetired ) ? 3000 : 4000;
    }

})();
