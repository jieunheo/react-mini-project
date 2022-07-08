import { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    // {pathname: './container1', search: '', hash: '', state: ''}
    return (
      <nav>
        <ul>
          <li><Link to='/'>Container1</Link></li>
          <li><Link to='/component1'>Component1</Link></li>
          <li><Link to='/component2'>Component2</Link></li>
          <li><Link to='/component3'>Component3</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Header;