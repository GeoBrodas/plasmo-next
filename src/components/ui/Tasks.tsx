import { TrashIcon } from "@heroicons/react/solid"

import { Storage } from "@plasmohq/storage"

const storage = new Storage()

function Tasks({ data, setTasks }) {
  function removeTask(index: number) {
    setTasks(data.filter((_, i) => i !== index))

    // remove from local storage
    storage.set(
      "tasks",
      data.filter((_, i) => i !== index)
    )
  }

  return (
    <div>
      {data?.length !== 0 ? (
        data?.map((task: String, index: number) => (
          <div
            className="border-2 flex items-center justify-between p-2 my-2 rounded-md"
            key={index}>
            <p>{task}</p>

            <button
              aria-label="Remove task"
              type="button"
              onClick={() => removeTask(index)}>
              <TrashIcon className="w-10 h-10 pr-1" />
            </button>
          </div>
        ))
      ) : (
        <p className="mx-auto w-fit my-8">No tasks yet!</p>
      )}
    </div>
  )
}

export default Tasks
