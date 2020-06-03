import styled from 'styled-components';
import logoPic from '/img/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const Logo = styled.a`
  display: block;
  width: 100px;
  height: 56px;
  background: (${ logoPic });

  position: absolute;
  left: 0;
  top: 0;
`;

