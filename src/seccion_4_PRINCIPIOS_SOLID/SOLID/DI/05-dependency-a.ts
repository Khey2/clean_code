import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, PostProvider, WebApiPostProvider } from './05-dependency-c';


// Main
(async () => {

    //? final, ahora puedes mandar tanto JsonDatabaseService 
    //? como LocalDatabaseService sin violentar el principio
    //? de abrir y cerrar
    const localDataBaseService = new LocalDataBaseService();
    const provider = new JsonDatabaseService();
    const webApiService = new WebApiPostProvider();
    
    const postService = new PostService( webApiService );

    const posts = await postService.getPosts();

    console.log({ posts })

})();


//? inversion de dependencias: basa tu codigo en 
//? ABSTRACCIONES enves de implementaciones
//? JsonDatabaseService es una implementacion y
//? LocalDatabaaseService


//? para aplicar el cambio facilmente... debes hacer el principio 
//? de inversion de dependencias