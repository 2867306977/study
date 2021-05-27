import axios from 'axios';
import { Component } from 'react';

export default class App extends Component {
  state = {
    isLoading: false,
    repo: {
      username: '',
      html_url: '',
    },
  };
  componentDidMount() {
    axios({
      method: 'GET',
      url: `https://api.github.com/search/repositories?q=r&sort=stars`,
    }).then(res => {
      console.log(res.data.items[0]);
      console.log(res.data.items[0].name);
      this.setState({
        isLoading: true,
        repo: {
          username: res.data.items[0].name,
          html_url: res.data.items[0].html_url,
        },
      });
    });
  }
  render() {
    const { isLoading, repo } = this.state;
    if (!isLoading) return <h1>Loading...</h1>;
    return (
      <div>
        <h1>show repo </h1>
        <a href={repo.html_url}>{repo.username}</a>
      </div>
    );
  }
}
