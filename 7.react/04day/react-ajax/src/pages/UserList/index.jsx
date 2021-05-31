import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserList extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    //函数func,布尔值bool
    isLoading: PropTypes.bool.isRequired,
  };
  render() {
    const { userList, isLoading } = this.props;
    if (isLoading) return <h1>Loading...</h1>;

    return userList.length ? (
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
    ) : (
      <h1>Enter the name you search</h1>
    );
  }
}
export default connect(
  state => ({ userList: state.userList, isLoading: state.setLoading }),
  null
)(UserList);
