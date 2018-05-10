const express=require('express');
const PORT = process.env.PORT || 9000;

const app=express();


//create an endpoint for testing (the '/' is the endpoint)
app.get('/', (req, res)=>{
    res.send('<h1>Funciona la Aplicacion</h1>');
});

app.listen(PORT, () => {
    console.log('Server is listening on localhost:', PORT);
}).on('error',(err)=>{
    console.log(`Server Error: ${err.message}`);
    console.log(`Do you already have a server running on port ${PORT}?`);
});