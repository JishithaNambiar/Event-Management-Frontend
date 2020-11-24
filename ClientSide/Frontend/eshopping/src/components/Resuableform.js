import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Reusableinput'
import {useHistory} from 'react-router-dom'


class Reusableform extends Component {
    state = { 
        data: {},
        errors:{},
     }
     
     /* routeChange =(path) =>{
        let path = path;
        this.props.history.push(path)
       // useHistory.push(path)
    }   */

   Joivalidation =()=>{
       const result = Joi.validate(this.state.data, this.schema, {abortEarly: false})
       console.log(result);
       if(!result.error) return null
       const errors ={}
       for(let err of result.error.details)
        errors[err.path[0]] = err.errorMessage
        return errors;
   }

   validateProperty=( {name, value} )=>{
    const obj = {[name]:value}
    const schema = {[name]:value}
    const {error} = Joi.validate(obj,schema);
    return error ? error.details[0].message : null
}

handleSubmit = (e) =>{
    e.preventDefault();
    //const error= this.validateError();
    const error = this.Joivalidation();
    console.log(error)
    this.setState({errors:error || {}});
    if (error) return;
    //this.doSubmit();  
}

handleChange =({currentTarget: input}) =>{
      
    const errors ={...this.state.errors}
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name];
    const data = {...this.state.data}
    data[input.name] = input.value
    this.setState({data , errors})
}

renderButton (label) {
    return(
<button disabled={this.Joivalidation().className="btn btn-primary"}>
    {label}
</button>
    )
}

renderInput(name,label, type='text'){
    const {data, errors} = this.state
    
    return(
    <Input
    name = {name}
    value= {this.state.data[name]}
    label={label}
    type={type}
    error = {errors[name]}
    onChange={this.handleChange}
    focus="autofocus"
    >
    </Input>
    );
}
renderSelect(name, label,options) { 
    const{data, errors} = this.state
        return ( 
            <select
            name ={name}
            value = {data[name]}
            label={label}
            options={options}
            error={errors[name]}
            onChange={this.handleChange}>
            </select>
         );
    }
}
 
export default Reusableform;