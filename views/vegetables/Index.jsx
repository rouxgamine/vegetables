const React = require('react');
class Index extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <nav>
                    <a href="/vegetables/new">Create a New Vegetable</a>
                </nav>
                <ul>
                    { 
                        vegetables.map((vegetable) => {
                            const {name, color, readyToEat} = vegetable
                            return (
                                <li key={vegetable._id}> 
                                    <a href={`/vegetables/${vegetable._id}`}>
                                    {name}</a> is {color}

                                    <br /> 
                                    { 
                                        readyToEat? 
                                        'It is ready to eat':
                                        'It is not ready to eat'
                                    }   
                                    <br />
                                    <form method="POST" action={`/vegetables/${vegetable._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${color} ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index 