import React from 'react';

import './App.css';
import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import {getEvents} from './components/fakeEvents';
import EventDetails from './components/eventDetails'
import Test from './components/testing';
import Event from './components/events'



function App() {
  return (
    <div className="content">

    <Navbar />
    <Event />
     <Switch>

    <Route  path='/test' component = {Test}></Route>
    <Route  path ='/new'  component={EventDetails}></Route>
    <Route path='/filteredEvent/:id' component={EventDetails}></Route>
    <Route  path ='/event' component={Event}></Route>
    <Route exact path= "/"  component ={Home}></Route>

    </Switch> 
 
    


    {/* <Route path ='/event' Component={getEvents}></Route> */}
    {/* <Route path='/eventdetails/new' Component={Eventdetails}></Route> */}
    </div>
      
   
  );
}

export default App;
