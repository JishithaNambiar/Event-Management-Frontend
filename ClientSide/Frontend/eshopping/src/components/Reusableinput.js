import React, { Component } from 'react'

const Input = ({name, label, onChange, value, error}) => {
    return ( 
        <div className="form-group">
                        <label for={name}>{label}</label>
                        <input 
                         value={value}
                         onChange={onChange}
                         name={name}
                         type="text" 
                         className="form-control" 
                         id={name} />
        {error && <div className="alert alert-danger">{error}</div>}    
                     </div>
     );
}
 
export default Input ;