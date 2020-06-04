/**
 * @desc common-header-styled-components
 */

import styled from 'styled-components';
import logoPic from '../../static/img/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const Logo = styled.a.attrs({ href: '/' })`
  display: block;
  width: 100px;
  height: 56px;
  background-image: url(${ logoPic });
  background-size: contain;

  position: absolute;
  left: 0;
  top: 0;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 0;
    top: 9px;
    width: 38px;
    line-height: 38px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }
`;

// 搜索框边角半圆形,border-radius的像素值设置为高度的一半
export const NavSearch = styled.input.attrs({ placeholder: '搜索...' })`
  width: 240px;
  height: 38px;
  border-radius: 19px;
  border: none;
  outline: none;
  background: #eee;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: left;
  line-height: 38px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  padding: 0 20px;
  margin-right: 20px;
  font-size: 14px;
  &.regist {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background-color: #ec6149;
  }
`;
