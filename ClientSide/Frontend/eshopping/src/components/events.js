import React, { Component } from 'react';
//import {getEvents} from './fakeEvents';
//import { getCategories } from './fakeCategories';
import CategoriesList from './categoriesList'
//import {useHistory} from 'react-router-dom';
//import {getEvents} from './axiosapi';
import {Link} from'react-router-dom'
import axios from "axios";





class Event extends Component {
    state = { 
        event: [],
        categories: [],
        selectedCategory : {}
     }


     async componentDidMount(){

         //getting all events on the list group
         //const categories = [{name: "All categories"}, ...getCategories()];
         const {data: categories} = await axios.get("http://localhost:7000/api/categories");

         const response = await axios.get("http://localhost:7000/api/events");
         console.log(response);
         
      

         //setstate
  //       this.setState({event: getEvents(), categories: categories});
        this.setState({event: response.data, categories: categories});
     }

     routeChange =(pathroute) =>{
        let newpath = pathroute;
        this.props.history.push(newpath)
       //useHistory().push(newpath)
    } 
   
      handleCategorySelect=(category) =>{
          console.log(category)
          this.setState({selectedCategory: category})
      }

     handleDelete=(event)=>{

    console.log(event);
    const events = this.state.event.filter( e => e._id !== event._id)
    this.setState({event: events})

     }

    render() { 

        const {length: count} = this.state.event
        if(count === 0 ) return <p>No movies exist in databse</p>;

        const {selectedCategory} = this.state
        const filteredEvent = 
        selectedCategory && selectedCategory._id ? this.state.event.filter(
            (e) => e.category._id === selectedCategory._id 
        ) : this.state.event;


        
        return ( 

           <React.Fragment>
               <Link 
               to='/new'
               className='btn btn-primary'
               style={{marginBottom: 20}}>
               New Event
               </Link>
               <div className='col-3 mb-5 p-5'>
               <CategoriesList 
               items = {this.state.categories}
               onItemSelect = {this.handleCategorySelect}
               selected ={this.state.selectedCategory}
               textProperty = "name"
               valueProperty="_id"
               > </CategoriesList></div>



            <p>Showing {count} Events in databse</p>
           
            <div>
                <table className='table'>
                <thead>
                    <th>Title</th>
                    <th>Category</th>
                    <th>TicketsAvailable</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {
                    filteredEvent.map((events) => 
                    <tr key = {events._id}>
                    <Link to={`/filteredEvent/${events._id}`}>{events.Title}</Link>
                    {/* <td>{events.title}</td> */}
                    {/* <td>{events.category.name}</td> */}
                    <td>{events.categories.name}</td>
                    <td>{events.NumberOfTicketsAvailable}</td>
                    <td>{events.Price}</td>
                    <td>
                        <button onClick ={() => {this.handleDelete(events)}} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                    </tr>)
                }
                </tbody>
                
                
                </table>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Event;