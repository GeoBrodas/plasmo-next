import Link from "next/link"
import { useRouter } from "next/router"

function Container({ children }) {
  const router = useRouter()

  return (
    <div
      style={{
        padding: "20px"
      }}>
      {children}
      {/* Buttons */}
      <Link href={"/help"}>
        <button className="button-blue">Next page</button>
      </Link>
    </div>
  )
}

export default Container
