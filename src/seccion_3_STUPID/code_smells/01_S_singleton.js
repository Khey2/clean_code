//? esta variable singleton esta en un scope GLOBAL 
//? ( disponible en todo lugar ) debido a que no esta dentro 
//? de ninguna otra cosa
const Singleton = (function () {
    
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }


    //este return son todos los metodos y propiedades PUBLICAS
    //singleton.
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();



function main() {
    //? El patron singleton GARANTIZA que una instancia
    //? SIEMPRE sea igual, OSEA que todo apunte al mismo espacio en memoria... 
    //? por eso da true
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2));
}

//!PROBLEMA: 

//! 1.-  FORMA DIFICIL DE TESTEAR
//! 2.- NO HAY UNA MANERA CONTROLADA DE IDENTIFICAR DE DONDE PROVIENEN LOS CAMBIOS
//! CUALQUIER COSA DISPARA CAMBIOS

main();