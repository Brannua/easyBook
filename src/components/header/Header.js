/**
 * @desc common-header-root-components
 */

import React from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'><i className='iconfont icon-Aa'></i></NavItem>
        <SearchWrapper>
          <NavSearch />
          <i className='iconfont icon-fangdajing'></i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='regist'>注册</Button>
        <Button className='write'>写文章<i className='iconfont icon-yumaobi'></i></Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
