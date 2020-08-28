import React from 'react';
import SummaryItems from './SummaryItems';
import Total from './Total';



export default function Summary(props){
    

      

    return (
    <section className="main__summary">
    <h2>Your cart</h2>
    <SummaryItems selected={props.selected} />
    <Total selected={props.selected} />
  </section>
  )
}