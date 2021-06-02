import { Component } from 'react';
import AddComment from './pages/AddComment';
import CommentList from './pages/CommentList';
//引入css
import './index.css';

export default class App extends Component {
  /* 数据 */
  state = {
    comments: [
      {
        id: 1,
        username: 'jack',
        content: '今天天气真好',
      },
      {
        id: 2,
        username: 'lisa',
        content: '还行吧',
      },
    ],
  };
  /* 绑定一个添加数据的方法 */
  handleAddComment = valObj => {
    // console.log(...this.state.comments);
    //接收对象,使用...遍历数组,并且添加这个对象,在组成一个新数组
    this.setState({
      comments: [...this.state.comments, valObj],
    });
  };
  /* 绑定一个删除数据的方法 */
  handleDeleteComment = id => {
    //删除前判断是否确定要删除
    if (!window.confirm('确定要删除该评论吗?')) return;
    //根据id来删除指定内容,如果指定id等于this.state.comments中的id,那么就把这个对象删除
    const { comments } = this.state;
    const newComments = comments.filter(item => {
      //过滤掉id相同的对象,返回不同的id的对象并组成一个新的数组
      return item.id !== id;
    });
    //修改state为返回的新数组
    this.setState({
      comments: newComments,
    });
  };
  render() {
    //解构this.state
    const { comments } = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="col-md-4">
            <AddComment handleAddComment={this.handleAddComment} />
          </div>
          <div className="col-md-8">
            <CommentList
              comments={comments}
              handleDeleteComment={this.handleDeleteComment}
            />
          </div>
        </div>
      </div>
    );
  }
}
