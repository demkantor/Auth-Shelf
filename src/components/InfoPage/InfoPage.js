import React, { useState, useEffect, ReactDOM } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


function InfoPage(pfrog) {
  const thing = pfrog.itemReducer;
  const corona = thing.map((item) =>
    <li>{item.description} <br/> <img src={item.image_url}/></li>
    
  );
  return (
    <ul>{corona}</ul>
  );
}





const mapStateToProps = (pfrog)=>{
    return pfrog
  
}

export default connect(mapStateToProps)(InfoPage);
