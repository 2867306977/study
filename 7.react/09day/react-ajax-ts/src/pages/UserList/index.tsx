import { connect } from 'react-redux';
import { State, Users } from '../../redux/types';

//定义props的类型
interface Props {
  setLoading: boolean;
  userList: Users[]; //因为Users是定义的对象,但userList是一个数组,所以得是基于(里面的元素是Users类型)Users的一个数组
}
function UserList(props: Props) {
  const { setLoading, userList } = props;
  if (setLoading) {
    return <h1>Loading...</h1>;
  }

  return userList.length ? (
    <div className="row">
      {/* 遍历userList展示数据 */}
      {userList.map(item => {
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
//这个State是定义reducers函数的类型
const mapStateToProps: (state: State) => State = state => ({
  setLoading: state.setLoading,
  userList: state.userList,
});
const mapDispatchToProps = {}; //不需要方法 不能传null
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
