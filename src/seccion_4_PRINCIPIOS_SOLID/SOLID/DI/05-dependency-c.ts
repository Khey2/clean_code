
import { Post } from "./05-dependency-b"
import localPost from "./local-database.json"

//? Inversion de dependencias
export abstract class PostProvider{

    //? retorna un array de interfaces de tipo Post
    abstract getPosts(): Promise<Post[]>;

}


export class LocalDataBaseService implements PostProvider {

    //? cambiar el nombdr de esto afecta el PostService
    async getPosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}


export class JsonDatabaseService implements PostProvider {

    async getPosts(){
        return localPost
    }

}

//! Tarea: crea un nuevo provedor ( WebAPIPostService ) y llama a este API
//! https://jsonplaceholder.typicode.com/posts

export class WebApiPostProvider implements PostProvider{
    
    async getPosts(): Promise<Post[]> {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        return data;
    }
}
