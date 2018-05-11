import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component{
    componentDidMount(){
        this.getUserData();
        this.getArticle();
        this.sendData();
    }
    async getUserData(){
        const result = await axios.get('/api/user-data');

        console.log('user result:', result);
    
    }
    async getArticle(){
        const article = await axios.get('/api/get-article');

        console.log('article result:', article);
    
    }
    async sendData(){
        const dataToSend={
            something: 'this is something',
            another: 'this is another one'
        };
        const response = await axios.post('/api/send-data', dataToSend);

        console.log('send data:', response);
    }
    render(){
        return <h1>Feliz Juevessss</h1>
    }
}

export default Test;