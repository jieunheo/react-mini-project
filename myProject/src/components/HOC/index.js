import { Component } from "react"


const HOC = (OriginalComponent) => {
  return (
    class NewComponent extends Component {
      state = {
        data: []
      }

      getData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();
        this.setData({
          data
        });
      }

      componentDidMount() {
        this.getData();
      }
      
      render() {
        return (
          <OriginalComponent data={this.state.data} />
        );
      };
    }
  )
}

export default HOC;