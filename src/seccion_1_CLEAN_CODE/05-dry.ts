

type Size = ''|'S'|'M'|'XL';

class Product {
    constructor(
        public name:  string = '',
        public price: number = 0,
        public size:  Size = ''
    ){}

    //! ESTAS VALIDACIONES DEBERIAN ESTAR CENTRALIZADAS EN ALGUN LADO
    toString(){
        // No Dry, cada nueva propiedad duplica el codigo, 
        //si tienes otro metodo
        //escribiras las mismas validaciones...
        if ( this.name.length == 0 ) throw Error('name is empty');
        if ( this.price <= 0 ) throw Error('Price is 0');
        if ( this.size.length <= 0 ) throw Error('Size is empty');

        return `${ this.name } (${this.price} ), (${ this.size })`;
    }
}

class ProductDRY {
    constructor(
        public name:  string = '',
        public price: number = 0,
        public size:  Size = '', 
    ){}

    //validaciones DRY ( solo se manda a llamar donde lo ocupes )
    isProductReady(): boolean {
        
        //! this hace referencia a las propiedades de la clase...
        for( const key in this ){
            //! this[key] this.key, seria la traduccion, pero
            //! lo computas basada en esa propiedad
            switch( typeof this[key] ){
                case 'string':
                    if( this[key].length <= 0 ) throw Error(`${ key } is empty`);
                break;
                case 'number':
                    if( this[key] <= 0 ) throw Error(`${ key } is 0`);
                break;
                default:
                    throw Error(`Type of ${this[key]} is not supported`)
            }
        }
        
        return true;
    }

    toString(){
        if( !this.isProductReady() ) throw Error("Producto no listo");

        return `${ this.name } (${this.price} ), (${ this.size })`;
    }
}

(()=>{
    
    //! PROBLEMA
    //  const bluePants = new Product('Blue large pants', 709, 'M');
    //  console.log( bluePants.toString() )

     //? SOLUCION
     const bluePantsDRY = new ProductDRY( "Celular", 899, "XL");
      console.log( bluePantsDRY.toString() ); 

})()

