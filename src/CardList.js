import Card  from "./Card";
import React from 'react';


const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


const CardList= (props)=> (
    <div>{testData.map(profile => <Card {...profile}/>)}</div>
);
//What is this? Un understandable?   First 'profile' after .map is the argument and can be written as (profile) with
// basic and old syntax but how does this <Card {...profile} works?
//Solution. It is a method to implement <Card name='some name' company='some company'/> by using Cart {...testData[0]}
//Which is the method implemented above but we don't have to put the array indices.

export default CardList;