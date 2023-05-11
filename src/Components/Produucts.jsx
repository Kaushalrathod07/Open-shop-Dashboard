import { Link } from "react-router-dom"


const Produucts = () => {
  return (
    <div>
      This is product page
      <Link to="/products" className="underline" >
        Go To Dashboard
      </Link>
    </div>
  )
}

export default Produucts
