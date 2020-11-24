import React, { Component } from 'react';

export const Input = ({  name, label, value}) =>{
    return(
        <div className="form-group">
        <label for={name}>{label}</label>
        <input 
         value={value}
         name={name}
         className="form-control" 
         id={name} />
  
     </div>
    )
}
export const  Select =({name,label,options}) =>{
    return(

        <select class="custom-select" id="inputGroupSelect01">
            <option selected>{label}</option>
            <option value={options._id}>{options.name} </option>
            </select>

         /* <div className="dropdown">
        <button 
        name ={name}
        label={label}
        options={options}>
         {label}
        </button> 
        </div>
 */
               
            
        
       
    )

}



