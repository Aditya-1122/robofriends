import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import CardList from '../component/CardList';

import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';


class App extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            robs :[],
            searchfield :''
        }
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robs:users}))
    }
    onSearchChange=(event)=>
    {
       this.setState({ searchfield:event.target.value })
    }
    render()
    {
        const{robs,searchfield}=this.state;
        const filteredRobot=this.state.robs.filter(rob=>
            {
               
               return rob.name.toLowerCase().includes(searchfield.toLowerCase())
            }

        )
        if(!robs.length)
        {
            return(<h1>loading</h1>);
        }
        return(
            
        <div className="tc">
        <div class="fnt"><h1>RoboFriends</h1></div>
        <div ><SearchBox searchChange={this.onSearchChange} /></div>
        <Scroll>
        <CardList robs={filteredRobot} />
        </Scroll>

     </div>
    )};
}
export default App;