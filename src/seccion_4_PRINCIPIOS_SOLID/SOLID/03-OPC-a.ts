import { PhotosService, PostService, TodoService } from './03-OPC-b';
import { HttpClient } from './03-OPC-c';

(async () => {

        const http = new HttpClient();

    const todoService = new TodoService( http );
    const postService = new PostService( http );
    const photosService = new PhotosService( http );

    const todos = await todoService.getTodoItems('https://jsonplaceholder.typicode.com/todos/');
    const posts = await postService.getPosts('https://jsonplaceholder.typicode.com/posts');
    const photos = await photosService.getPhotos('https://jsonplaceholder.typicode.com/photos');
    
    
    console.log({ todos, posts, photos });
    

})();