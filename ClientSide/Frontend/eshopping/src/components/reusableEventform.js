import React, { Component } from 'react';
import {Input} from './reusableEventInput'
import {Select} from './reusableEventInput'


class Form extends Component {
    state = { 
        event:[],
        categories:[]
     }
    renderInput(name, label, value) { 
        const {event , categories} = this.state
        return (
            <Input
            name={name}
            label={label}
            value={this.state.event[name]}
            focus = "autofocus"
            ></Input>
          );
    }

    handleButton =()=>{

         this.props.history.push('/event');
   

    }

    renderButton (label) {
        return(
    <button className="btn-group mr-2" onClick= {this.handleButton}>
        {label}
    </button>
        )
    }
    renderSelect(name,label,options){
        const {event , categories} = this.state
        return(
            <Select
            name={name}
            label={label}
            options={options}
            >{label}</Select>
        )

    }
}
 
export default Form;