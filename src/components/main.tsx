import { useState } from "react"

import "../../style.css"
import Container from "./layouts/Container"
import Tasks from "./ui/Tasks"

export function Main({ name = "Extension" }) {
  const [data, setData] = useState("")

  const [tasks, setTasks] = useState([])

  function submitHandler() {
    setTasks([...tasks, data])
    setData("")
  }

  return (
    <Container setTasks={setTasks}>
      <div className="py-10 px-6">
        <h2>
          Welcome to <a href="https://www.plasmo.com">Todo app</a> {name}!
        </h2>
        <input
          placeholder="Type something here"
          className="rounded-md my-3 p-2 border-2 border-gray-300"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />

        <button type="submit" onClick={submitHandler} className="button-blue">
          Add task
        </button>

        <Tasks data={tasks} setTasks={setTasks} />
      </div>
    </Container>
  )
}
