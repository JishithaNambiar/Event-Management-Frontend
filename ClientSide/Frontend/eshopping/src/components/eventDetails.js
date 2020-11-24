import React from 'react'
//import Input from './Reusableinput'
//import Reusableform from './Resuableform'
//import {getCategories} from './fakeCategories'
import Form from './reusableEventform';

import Axios from 'axios';

class eventDetails extends Form {
    state = { 
        event: [],
        categories:[]
     }


     async componentDidMount(){
         //extracting event using id 
         //const {data: categories} = [{name: "All categories", ...getCategories()}]
         const {data:categories} = await Axios.get("http://localhost:7000/api/categories");
         this.setState({categories})
         
         const eventID = this.props.match.params.id;
  //        const eventID = 'new'
         if(eventID === 'new') return ;

         const {data: event} = await Axios.get(`http://localhost:7000/api/events/${eventID}`)
         if(!event) return this.props.history.replace("/Home")
         this.setState({event: this.populateData(event)})

     //    this.setState({event})
     }

     
     populateData =(eventselected) =>{

        return(
            {
            _id: eventselected.id,
            EventName : eventselected.Title,
            EventDescription: eventselected.categories.name,
            Numberofticketsvailable: eventselected.NumberOfTicketsAvailable,
            Price: eventselected.Price 
        });

     }

    render() { 
        return (
            <React.Fragment>
            <form className='w-50' >
            {this.renderInput("EventName", "EventName", this.state.event.EventName)} 
            {this.renderInput("EventDescription","EventDescription",this.state.event.EventDescription)}
            {this.renderInput("Numberofticketsvailable","Numberofticketsvailable", this.state.event.Numberofticketsvailable)}
            {this.renderInput("Price","Price",this.state.event.Price)}
            {this.renderSelect("categories","categories", this.state.categories)}
            {this.renderButton("Save")}
            {this.renderButton("Back")}
            </form>

         
            </React.Fragment>
          );
    }
}
 
export default eventDetails;