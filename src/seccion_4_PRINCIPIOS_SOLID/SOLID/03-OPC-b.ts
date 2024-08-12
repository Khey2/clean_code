// Hay que agregar la dependencia de axios ```yarn add axios```
//? desacoplar el llamado directo a axios
// import axios from 'axios';
import { HttpClient } from './03-OPC-c';


export class TodoService { 

    // private httpClient: HttpClient;

    constructor(
        private httpClient: HttpClient
    ){}

    async getTodoItems( url : string ) {
        const data  = this.httpClient.get( url );
        return data;
    }
}


export class PostService {
    
    constructor(
        private httpClient: HttpClient
    ){}

    async getPosts( url: string) {
        const data  = this.httpClient.get( url );
        return data;
    }
}


export class PhotosService {
    
    constructor(
        private httpClient: HttpClient
    ){}

    async getPhotos( url: string ) {
        const  data  = this.httpClient.get( url );
        return data;
    }

}