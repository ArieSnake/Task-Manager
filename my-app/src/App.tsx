import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { TaskList } from "./features/tasks/tasks"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <h1>Task Management</h1>
      <TaskList/>
    </div>
  )
}

export default App
