import React from 'react';
import {Card} from '../card/card.component'
import './cardlist.styles.css';

export const Cardlist = (props) =>{
    return  <div className="cardlist">
    {props.monisters.map((monister)=><Card monister={monister} key={monister.id}/>)}
    </div>
}