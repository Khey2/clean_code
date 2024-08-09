(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia
    //! CALIFICACION: 10/10 lo entendiste bien

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType
        ) {}
    }

    
    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents{
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement
    interface InputElementProps{
        id: string,
        type: HtmlType,
        value: string,
        placeholder: string,
    }

    class InputElement{
       public inputEvents: InputEvents;
       public inputAttributes: InputAttributes;
       public htmlElements: HtmlElement;

        constructor(
            { id, type, value, placeholder}: InputElementProps
        ){
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
            this.htmlElements = new HtmlElement( id, type )
        }

    }

    const nameField = new InputElement( 
        {
            id: "7865",
            type: "textarea",
            value: "joseee",
            placeholder: "SDSDS",
        }
     );

    console.log({ nameField });

})()