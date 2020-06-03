# 仿简书网站,上手react开发

- 使用 styled-components

  - 全局样式定义方式参考: https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle

- 使用 reset.css 进行基础样式重置

  - 源码: https://meyerweb.com/eric/tools/css/reset/

- src中引用静态资源的时候,发现create-react-app默认配置不允许引用src外部文件,故将public中的静态资源移入src/static中,使用时以相对路径的方式引用

- 由于react开发中需要遵循immutable的原则,即我们不可以直接修改state的数据,只能通过dispatch派发action,action被store转发给reducer后,reducer操作state的深克隆副本,并返回新的state的方式来改变store中的state,进而触发页面更新,但是我们此时只能时刻牢记要在reducer中拷贝state的深克隆副本,只操作副本,很有可能我们不经意间就直接修改了state,那么我们就希望state是只读的,所以本项目引入了immutable.js这个库,把state变成一个immutable对象,使得我们无法直接修改state,降低了开发过程中代码出错的风险

- 由于我使用了immutable.js,对拆分出来的每一个小的reducer中的state都进行了改造,使之变为了immutable对象,但是根目录下的大reducer仍然为原生js对象,这使得我在mapStateToProps方法中需要先使用点操作符从根reducer中取小的reducer,然后再让小reducer以调用immutable.js库的API-get来获取其中的state,这种先操作原生js对象然后紧接着操作immutable对象的方式十分不统一,不靠谱,所以我引入了redux-immutable这个库,这个库提供了和redux的API同名的API: combainReducers,但redux的combainReducers返回原生js对象,redux-immutable的combainReducers返回immutable对象,这样就统一了根reducer和子reducer的类型,也就统一了操作方式


