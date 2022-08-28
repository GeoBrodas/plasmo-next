import { Storage } from "@plasmohq/storage"

const storage = new Storage()

function Container({ children, ...props }) {
  function greeting() {
    // make a function to greet based on time of the day
    const time = new Date().getHours()

    if (time < 12) {
      return "Good Morning!"
    }
    if (time < 18) {
      return "Good Afternoon!"
    }
    return "Good Evening!"
  }

  return (
    <div
      style={{
        padding: "40px 20px",
        // add gradient
        background: "linear-gradient(to top, #BADBFB , #FFFFFF )"
      }}>
      <div>
        <p className="greeting">{greeting()}</p>
      </div>

      {children}
      {/* Buttons */}

      {/* <button
        onClick={async () => {
          props.setTasks([])
          await storage.remove("tasks")
        }}
        className="button-blue">
        Reset tasks
      </button> */}
    </div>
  )
}

export default Container
