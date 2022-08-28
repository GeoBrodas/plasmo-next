import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

import "../../style.css"
import Container from "./layouts/Container"
import Tasks from "./ui/Tasks"

const storage = new Storage()

export function Main({ name = "Extension" }) {
  const [data, setData] = useState("")

  const [tasks, setTasks] = useState([])

  // fetch tasks from the local storage
  useEffect(
    () => {
      // fetch tasks from the local storage
      storage.get("tasks").then(
        (tasks) => setTasks(tasks || []),
        // if there are no tasks, set an empty array
        () => setTasks([])
      )
    },
    // run once on mount
    []
  )

  async function submitHandler() {
    setTasks([...tasks, data])
    setData("")

    // save to local storage in chrome
    await storage.set("tasks", [...tasks, data])
  }

  return (
    <Container setTasks={setTasks}>
      <div className="py-10 px-6">
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
