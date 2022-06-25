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
        padding: "20px 10px"
      }}>
      <div>
        <p className="greeting">{greeting()}</p>
      </div>

      {children}
      {/* Buttons */}

      <button onClick={() => props.setTasks([])} className="button-blue">
        Reset tasks
      </button>
    </div>
  )
}

export default Container
