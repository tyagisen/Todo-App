import React from "react"
import { TodoItem } from "./TodoItem"

export const Todos = (props) => {
    return (
        <div className="container">
            {
                props.one.length===0? <div className="alert alert-primary" role="alert">
                No Todo Left
              </div>
                :
                props.one.map((two)=>{
                    return 
                    (<TodoItem x = {two} key={two.sn} onDelete={props.onDelete}/>)
                }) 
            }
        </div>
    )
}
