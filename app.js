const express=require('express');
const cors =require('cors');
const PORT = process.env.PORT || 9000;

const app=express();

app.use(cors());

app.get('/user-data',(req,res)=>{
    const user={
        name: 'Holden Caulfield',
        email: 'ih8phonies@penceyprep.edu'
    }

    res.send(user);
});

//create an endpoint for testing (the '/' is the endpoint)
app.get('/', (req, res)=>{
    res.send('<h1>Algo Completamente Diferente</h1>');
});

app.listen(PORT, () => {
    console.log('Server is listening on localhost:', PORT);
}).on('error',(err)=>{
    console.log(`Server Error: ${err.message}`);
    console.log(`Do you already have a server running on port ${PORT}?`);
});