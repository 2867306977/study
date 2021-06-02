import { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddComment extends Component {
  //限制
  static propTypes = {
    handleAddComment: PropTypes.func.isRequired,
  };
  //把表单值和state关联起来
  state = {
    id: 2,
    username: '',
    content: '',
  };
  /* 
  获取表单内容(使用受控组件), 使用高阶函数来 把获取用户名表单和内容表单封装起来
   */
  handleChange = key => {
    return e => {
      this.setState({
        [key]: e.target.value.trim(),
      });
    };
  };
  /* //获取用户名表单
  handleNameChange = e => {
    this.setState({
      nameVal: e.target.value.trim(),
    });
  };
  //获取内容表单
  handleCommentChange = e => {
    this.setState({
      commentVal: e.target.value.trim(),
    });
  }; */
  /* 点击提交, 调用handleAddComment方法, 清空表单内容 */
  handleSubClick = () => {
    const { username, content } = this.state;
    //判断表单中是否有内容
    if (!username || !content) {
      alert('请输入内容');
      return;
    }
    //解构id,每点击一次提交,id就++,给每个评论项添加唯一的id
    let { id } = this.state;
    id++;
    this.setState({
      id,
    });
    //传递对象出去
    const valObj = {
      id,
      username,
      content,
    };
    this.props.handleAddComment(valObj);
    //清空表单
    this.setState({
      id,
      username: '',
      content: '',
    });
  };

  render() {
    const { username, content } = this.state;
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label>用户名</label>
          <input
            type="text"
            className="form-control"
            placeholder="用户名"
            onChange={this.handleChange('username')}
            value={username}
          />
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea
            className="form-control"
            rows="6"
            placeholder="评论内容"
            onChange={this.handleChange('content')}
            value={content}></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              type="button"
              className="btn btn-default pull-right"
              onClick={this.handleSubClick}>
              提交
            </button>
          </div>
        </div>
      </form>
    );
  }
}
