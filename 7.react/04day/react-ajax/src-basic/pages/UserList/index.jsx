import { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserList extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
  };
  render() {
    console.log('userList');
    return (
      <div className="row">
        {/* 遍历userList展示数据 */}
        {this.props.userList.map(item => {
          return (
            <div className="card" key={item.id}>
              <a href={item.html_url} target="_blank" rel="noreferrer">
                <img
                  src={item.avatar_url}
                  style={{ width: '100%' }}
                  alt={item.login}
                />
              </a>
              <p className="card-text">{item.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
