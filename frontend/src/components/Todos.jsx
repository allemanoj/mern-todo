//import { todo } from "../../../backend/db"

export function Todos({todos}) {
        return <div>
            {todos.map(function(todos){
                return  <div>
                        <h1>{todos.title}</h1>
                        <h2>{todos.description}</h2>
                        <button>{todos.completed == true ? "completed" : "Mark to be completed"}</button>
                     </div>
            })}
        </div>
}