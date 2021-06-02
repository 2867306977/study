import { connect } from 'react-redux';
import { useState, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { setLoading, getUsers } from '../../redux/actions';

interface Props {
  //定义函数的两种方法
  setLoading(loading: boolean): void;
  getUsers: (login: string) => void; //不需要返回值
}

function Search(props: Props) {
  //定义状态
  const [login, setLogin] = useState<string>('');
  //event被react合成事件进行了处理 所以必须得使用react的定义的类型
  const handleChange = (e: ChangeEvent) => {
    //因为只有表单input才有value属性 所以必须类型断言
    const login = (e.target as HTMLInputElement).value.trim();
    setLogin(login);
  };
  //点击获取数据
  const handleClick = async () => {
    //设置loading为true
    props.setLoading(true);
    //发送请求调用getUsers方法
    await props.getUsers(login); //传入输入框的内容
    props.setLoading(false);
  };

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </section>
  );
}
//Search不需要数据
const mapStateToProps = null;
const mapDispatchToProps = (dispatch: Dispatch) => {
  //返回的是一个对象
  return {
    //定义类型  dispatch 传入action对象
    setLoading: (loading: boolean) => dispatch(setLoading(loading)),
    //类型 "(dispatch: Dispatch<AnyAction>) => Promise<any>" 中缺少属性 "type"，但类型 "AnyAction" 中需要该属性。action对象需要type属性但是异步action中没有
    getUsers: (login: string) => getUsers(login)(dispatch), //调用完getUsers 在调用dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
