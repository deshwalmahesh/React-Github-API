import {Card}  from "./Card"; //importing without default
import React from 'react';




const CardList= (props)=> (
    <div>{props.profiles.map(profile => <Card {...profile}/>)}</div>
);
//What is this? Un understandable?   First 'profile' after .map is the argument and can be written as (profile) with
// basic and old syntax but how does this <Card {...profile} works?
//Solution. It is a method to implement <Card name='some name' company='some company'/> by using Cart {...testData[0]}
//Which is the method implemented above but we don't have to put the array indices.

export default CardList;