const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New todo Page</h1>
            <a href='/todos'>Go back to Index Page</a>
            <form action="/todos" method="POST">
                title: <input type="text" name="title"/><br/>
                description: <input type="text" name="description"/><br/>
                completed: <input type="checkbox" 
                name="completed" /><br/>
                <input type="submit" value="Create list" />
            </form>
        </div>
    )
}

module.exports = New