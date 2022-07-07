import { Link } from "react-router-dom";


const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/random'>Random List</Link>
        </li>
        <li>
          <Link to='/counter'>Counter</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigator;