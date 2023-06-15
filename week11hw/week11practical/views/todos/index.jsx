const React = require('react')

function Index (props) {
    return (
        <div>
             <h1 style={{ color: 'blue' }}>todo Index Page</h1>
           
            <ul>
                {
                    props.todos.map((todo) => {
                        return (
                            <li key={todo._id}>
                                <a href={`/todos/${todo._id}`}>{todo.title}</a> 
                                is {todo.description}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


module.exports = Index