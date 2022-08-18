function Client(client) {
    if(!client.ws) throw new Error('Client is not valid !');

    module.exports = {
        client: client,
        setClient: Client,
    }
    
    require('./server/express');
}

module.exports = {
    client: null,
    setClient: Client,
}