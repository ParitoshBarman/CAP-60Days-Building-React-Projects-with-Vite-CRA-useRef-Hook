import React from 'react'

export default function ShowTodo(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Sl.</th>
                    <th>Tasks</th>
                </tr>
            </thead>
            <tbody>
                {props.todolist && props.todolist.map((itm, indx) => {
                    return (
                        <tr key={indx}>
                            <td>{indx+1}</td>
                            <td>{itm.todo}</td>
                        </tr>
                    )
                })}


            </tbody>

        </table>
    )
}
