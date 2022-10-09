const React = require('react');
class Show extends React.Component {
    render(){
        let {name, color, readyToEat} = this.props.vegetable 
     return(
     <>
         <h1> {name[0].toUpperCase() + name.substring(1)} Show Page </h1>
         <p>{name} is {color} and {readyToEat? 'it\'s ready to eat': 'it\'s not ready to eat'} </p>
     </>
     )
    } 
 }
 
 module.exports = Show