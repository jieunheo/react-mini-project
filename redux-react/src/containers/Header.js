import { Component } from "react";
import { Link, NavLink } from "react-router-dom";


class Header extends Component {
  state = {
    nums: [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
  }

  render() {
    // {pathname: './container1', search: '', hash: '', state: ''}
    return (
      <nav>
        <ul>
          <li><NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Container1</NavLink></li>
          {this.state.nums.map(num => (
            <li><NavLink key={num.id} to={{pathname: `/component/${num.id}`}} style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Component{num.id}</NavLink></li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Header;