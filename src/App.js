import React, {Component} from 'react';
import {Cardlist} from './components/cardlist/cardlist.component';
import {SearchBox} from './components/searchBox/searchBox.component'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monisters:[],
      searchFeald:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(responce=>responce.json()).then(
      (data)=>{
        console.log(data);
        this.setState({monisters:data})
      }
    ).catch()
  }
  onChangeHandeler = (e)=>{
    this.setState({searchFeald:e.target.value} ); console.log('e.target.value', e.target.value)
  }
  
  render(){
    const {monisters,searchFeald }= this.state;
    const filterdMonisters =  monisters.filter((monister)=>monister.name.toLowerCase().includes(searchFeald.toLocaleLowerCase())
    )
    return (

      <div className="App">
      <h1>Monisters</h1>
        <SearchBox onChangeHandeler={this.onChangeHandeler} placeholder="Search Monisters" />
        <Cardlist monisters={filterdMonisters} />
      </div>
    );
  }
}

export default App;
