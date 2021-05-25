import { Component } from 'react';
import CommentItem from './components/CommentItem';
//想要包路径有提示需在package.json中设置添加包
import PropTypes from 'prop-types';
export default class CommentList extends Component {
  //限制props必须性和类型
  static propTypes = {
    comments: PropTypes.array.isRequired,
  };
  //定义状态
  state = {
    show: false,
  };
  /* 在生命周期方法中来判断数组是否为空*/
  //这个方法接收两个参数props,state, 这个组件无权访问组件实例, 应该返回一个对象来更新state, 返回null则不更新
  static getDerivedStateFromProps(props) {
    //如为空则显示h2,反之
    if (props.comments.length === 0) {
      return {
        show: true,
      };
    }
    return {
      show: false,
    };
  }
  /* 判断comments是否有内容,如果没有则显示h2内容,有则隐藏 */
  render() {
    const { comments, handleDeleteComment } = this.props;
    const { show } = this.state;
    return (
      <div>
        <h3 className="reply">评论回复：</h3>
        {/* show为true则显示,false就隐藏 */}
        <h2 style={{ display: show ? 'block' : 'none' }}>
          暂无评论，点击左侧添加评论！！！
        </h2>
        <ul className="list-group">
          {/* 把comments从数组遍历为一个个对象, 给一个唯一key值, 并且把每个对象传递出去 把App组件的删除方法传递给子组件*/}
          {comments.map(item => {
            return (
              <CommentItem
                key={item.id}
                comment={item}
                handleDeleteComment={handleDeleteComment}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
