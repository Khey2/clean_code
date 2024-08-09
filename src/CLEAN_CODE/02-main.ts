(() => {

    //?  10/10
    const celciusTemperatures = [33.6, 12.34];

    //? 7/10 serverIpAddres - serverIp
    const serverIp = '123.123.123.123';

    //? 10/10
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    //? 10/10
    const userEmails = users.map( u => u.email );

    //? 10/10
    const canJump   = false;
    const canRun    = true;
    const hasItems  = true;
    const isLoading = false;


    //? 10/10
    const startTime = new Date().getTime();

    //? 10/10
    const endTime = new Date().getTime() - startTime;

    //? 10/10
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    //? 10/10
    function getBooksByUrl( url: string ) {
        throw new Error('Function not implemented.');
    }
    
    //? 10/10
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

 
    //? 10/10
    function printJob() {
        throw new Error('Function not implemented.');
    }

})();
