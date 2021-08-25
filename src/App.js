import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';


//componentes


import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';



//views
import home from './Views/Home/home';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';





const  App = () => {
  
  return (
    
    
    <Router>
    <div className="App">
    
      <header className="App-header">
      <NavBar />  
      </header>
      <Switch> 
        <Route path='/' exact component={ home } />
        <Route  path='/detail/:id' component={ItemDetailConteiner}/>
     </Switch>



       

      <Footer title="instagram" />
     
     
      
    </div>


   </Router>
    
    
  );
}

export default App ;
