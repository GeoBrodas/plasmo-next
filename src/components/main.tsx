import { useState } from "react"

import "../../style.css"

export function Main({ name = "Extension" }) {
  const [data, setData] = useState("")

  return (
    <div className="p-10">
      <h2>
        Welcome to <a href="https://www.plasmo.com">Plasmo</a> {name}!
      </h2>
      <input
        className="rounded-md my-3 p-2 border-2 border-gray-300"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />

      <button
        type="submit"
        className="bg-violet-500 text-white px-4 py-1 rounded-md mx-auto">
        Here
      </button>

      <a href="https://docs.plasmo.com">{data}</a>
    </div>
  )
}
