/*
    Refactoriza TODO lo que ves aqui y optimizalo
*/

(() => {

    //? Calificacion: 8/10, includes retorna un boolean por si solo
    function isRedFruit( fruit: string ): boolean {

        let redFruits: string[] = [ 'manzana', 'cereza', 'ciruela' ];
        return redFruits.includes(fruit); // ya devuelve true or false
    }

    //? Calificacion: 10/10, puedes usar ObjectKeys para 
    //? saber si te mandaron una key VALIDA
    type FruitColor = 'red'|'yellow'|'purple';

    function getFruitsByColor( color: FruitColor ): string[] {

        const fruitColors = {
            red:    [ 'manzana', 'fresa'],
            yellow: [ 'piña',    'banana'],
            purple: [ 'moras',    'uvas' ]
        }
        
        if( !Object.keys( fruitColors ).includes(color) ){ 
            throw Error('the color must be: red, yellow, purple');
        }

        return fruitColors[color];
    }

    //? Calificacion:10/10
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if( !isFirstStepWorking  )  return  'First step broken';
        if( !isSecondStepWorking )  return  'Second step broken.';
        if( !isThirdStepWorking  )  return  'Third step broken.';
        if( !isFourthStepWorking )  return  'Fourth step broken.';

        return 'Todo correcto';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();