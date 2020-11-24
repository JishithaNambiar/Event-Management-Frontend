import React, { Component } from 'react';

const Listgroup = (props) =>{

const {
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selected,

} = props;

return(
    <ul class='list-group'>
    {items.map((item)=> (
      <li 
      onClick = {()=>onItemSelect(item)}
      key= {item[valueProperty]} 
      className={item===selected ? 'list-group-item active' : 'list-group-item' }>
      {item[textProperty]}
      </li>))};
    </ul>
)

}

Listgroup.defaultProps ={
    textProperty : "name",
  valueProperty: "_id"

}


export default Listgroup;