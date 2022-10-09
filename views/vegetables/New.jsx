// const React = require('react');

// class New extends React.Component {
//     render(){
//         let {name, color, readyToEat} = this. props.fruit 
//      return(
//      <>
//          <h1> {name[0].toUpperCase() + name.substring(1)} Show Page </h1>
//          <p>{name} is {color} and {readyToEat? 'it\'s ready to eat': 'it\'s not ready to eat'} </p>
//      </>
//      )
//     } 
//  }

const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
                <h1>Create A New Vegetable</h1>
                <nav>
                    <a href="/vegetables"> Go Back To Vegetable Home Page</a>
                </nav>
                <form method="POST" action="/vegetables">
                    Name: <input type="text" name="name" placeholder='Name of the Vegetable'></input><br/>
                    Color: <input type="text" name="color" placeholder='Color of the Vegetable'></input><br/>
                    Is Ready To Eat: <input type="checkbox" name="readyToEat"></input><br/>
                    <input type="submit" value="Submit Vegetable"></input>
                </form>
            </>
        )
    }
}
 
 module.exports = New