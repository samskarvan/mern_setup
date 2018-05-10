import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component{
    componentDidMount(){
        this.getUserData();
    }
    async getUserData(){
        const result = await axios.get('http://localhost:9000/user-data');

        console.log('user result:', result);
    
    }
    render(){
        return <h1>Feliz Juevessss</h1>
    }
}

export default Test;