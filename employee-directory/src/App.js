import React from'react';
import Employee from "./components/Employee";
import Footer from './components/Footer';
import Header from './components/Header';


export default class App extends React.Component{
  render(){
    return(
<div>
<h1>Hello</h1>
<Header/>

<Employee/>
<Footer/>
</div>
    )
  }
}

