# 仿简书网站,上手react开发

- 使用 styled-components

  - 全局样式定义方式参考: https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle

- 使用 reset.css 进行基础样式重置

  - 源码: https://meyerweb.com/eric/tools/css/reset/

- src中引用静态资源的时候,发现create-react-app默认配置不允许引用src外部文件,故将public中的静态资源移入src/static中,使用时以相对路径的方式引用

- 由于react开发中需要遵循immutable的原则,即我们不可以直接修改state的数据,只能通过dispatch派发action,action被store转发给reducer后,reducer操作state的深克隆副本,并返回新的state的方式来改变store中的state,进而触发页面更新,但是我们此时只能时刻牢记要在reducer中拷贝state的深克隆副本,只操作副本,很有可能我们不经意间就直接修改了state,那么我们就希望state是只读的,所以本项目引入了immutable.js这个库,把state变成一个immutable对象,使得我们无法直接修改state,降低了开发过程中代码出错的风险

- 注意: immutable.js 将 state 变成一个immutable对象,这个immutable对象的每一个引用值属性也都是immutable类型,所以之后调用set方法时,注意不可以使用原生js数据改变state中的immutable数据,只能用immutable类型修改immutable类型数据

- Tips: immutable类型的数组也可以使用map方法进行遍历

- 由于我使用了immutable.js,对拆分出来的每一个小的reducer中的state都进行了改造,使之变为了immutable对象,但是根目录下的大reducer仍然为原生js对象,这使得我在mapStateToProps方法中需要先使用点操作符从根reducer中取小的reducer,然后再让小reducer以调用immutable.js库的API-get来获取其中的state,这种先操作原生js对象然后紧接着操作immutable对象的方式十分不统一,不靠谱,所以我引入了redux-immutable这个库,这个库提供了和redux的API同名的API: combainReducers,但redux的combainReducers返回原生js对象,redux-immutable的combainReducers返回immutable对象,这样就统一了根reducer和子reducer的类型,也就统一了操作方式

- 适合发送ajax网络请求的地方

  - 对于class组件: componentDidMount 生命周期函数中

  - 使用了redux-thunk中间件: 异步ajax放在actionCreator中

  - 使用了redux-saga中间件: 异步ajax放在sagas.js文件中

- 性能优化

  - 由于很多组件都使用connect方法和store链接了,那么只要store的数据一变化,就会触发这些组件的render重新执行导致重新渲染,这就有可能造成不必要的页面重新渲染,思路是利用shouldComponentUpdate进行判断,恰巧react团队考虑到了这一点,提供了一个集成了该功能的PureComponent,替换掉Component即可,注意PureComponent最好和immutable.js管理数据结合使用,避免坑

    ```js
      import { PureComponent } from 'React';
    ```

  - 在单页应用中,避免使用```<a>```标签进行页面跳转,因为页面会刷新,不符合单页应用的原则,使用'react-router-dom'库提供的API-Link代替a标签

    ```js
      import { Link } from 'react-router-dom';

      <Link to='/'>
        // ...
      </Link>
    ```