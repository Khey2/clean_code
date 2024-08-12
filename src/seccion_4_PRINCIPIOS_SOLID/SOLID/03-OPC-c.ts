// import axios from "axios";


//? esta es una clase PERSONALIZADA donde implementamos nuestros propios 
//? METODOS
//? HTTP ( Get, Put, Post, Delete, Patch ), con el fin de que TODO
//? nuestro proyecto haga peticiones HTTP usando esta clase llamada
//? HttpClient, esto nos sirve por si queremos remover
//? la dependencia de AXIOS algun dia por cualquier motivo, solo debamos
//? Hacer el cambio aqui, y como toda la aplicacion usa esta clase...
//? todos los lugares que hacen peticiones se veran afectados y reducira el
//? trabajo MUCHO

//? esto se le llama el patron adaptador: que simplemente es usar una clase como 
//? capa intermedia para hacer cosas de la dependencia que estas usando
export class HttpClient{

    // async get( url: string ){
    //     const { data, status } = await axios.get( url );
    //     console.log({ status })
    //     return { data, status };
    // }

    async get( url: string ){

        const resp = await fetch( url );
        const data = await resp.json()

        return { data , status: resp.status }
    }

}