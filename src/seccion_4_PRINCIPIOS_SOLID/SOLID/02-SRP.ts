(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    //Product service se encarga de operaciones de productos
    class ProductService {

        //axios, fetch-api, etc
        // private httpAdapter : Object;

        getProduct( id: number ){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    //? esto tiene una relacion INDIRECTA de onAddToCart
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }
    
        //? esto puede ser llamado en muchos lugares...
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
           this.productService.getProduct(id);
        }

        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        //? esto debe estar aqui?
        notifyClients() {
            this.mailer.sendEmail( ["jose@gmail.com"] , "to-admins")
        }
    }

    class Mailer {

        private masterEmail: string = 'jsjdhs@hotmail.com';

        sendEmail( emailList: string [], template: 'to-clients' | 'to-admins'){

        }

    }

    //? se cambia aaca
    class CardBloc{

        private itemsInCard: Object[] = [];

        onAddToCart( productId: number ) {
                // Agregar al carrito de compras
                console.log('Agregando al carrito ', productId );
        }
        
    }
    
    const productBloc = new ProductBloc( new ProductService(), new Mailer() );
    const cartBloc = new CardBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);

})();


//? se usaron clases de servicios y una llamada Mailer para delegar 
//? responsabilidades a una clase con ese objetivo.. se uso DI ( Inyeccion de dependencias )
//? para injectar las clases 