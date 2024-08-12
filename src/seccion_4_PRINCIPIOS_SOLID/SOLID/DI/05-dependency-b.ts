import { JsonDatabaseService, LocalDataBaseService, PostProvider } from './05-dependency-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    //? Inversion de dependencias: ahora INJECTAS una clase abstracta
    constructor( private postProvider: PostProvider ) {}

    async getPosts() {
        // this.posts = await this.LocalDataBaseService.getFakePosts();
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}
