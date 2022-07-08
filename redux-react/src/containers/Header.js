import { Component } from "react";
import { Link } from "react-router-dom";


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
          <li><Link to='/'>Container1</Link></li>
          {this.state.nums.map(num => (
            <li><Link key={num.id} to={{pathname: `/component/${num.id}`}}>Component{num.id}</Link></li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Header;