const express=require('express');
const cors =require('cors');
const PORT = process.env.PORT || 9000;
const {resolve} = require('path');
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.static(resolve(__dirname, 'client', 'dist')));


app.get('/api/user-data',(req,res)=>{
    const user={
        name: 'Holden Caulfield',
        email: 'ih8phonies@penceyprep.edu'
    }

    res.send(user);
});

app.get('/api/get-article', (req, res)=>{
    const article ={
        title: 'Los Mejores Restaurantes Que Se Ofrecen Mimosas Gratises Cerca de Irvine, CA',
        author: 'Los Muchachos Amables de LFZ',
        content: 'mimosas gratises son los mejores bebidos del mundo.'
    }

    res.send(article);
});


app.post('/api/send-data',(req,res)=>{
    console.log('data',req.body);

    res.send({
        success: true,
        boomerang: req.body
    });
})

//create an endpoint for testing (the '/' is the endpoint)
app.get('*', (req, res)=>{
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});


app.listen(PORT, () => {
    console.log('Server is listening on localhost:', PORT);
}).on('error',(err)=>{
    console.log(`Server Error: ${err.message}`);
    console.log(`Do you already have a server running on port ${PORT}?`);
});