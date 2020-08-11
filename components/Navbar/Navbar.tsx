import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Container from 'components/Container';
import { routes } from './routes';
import { radius, colors } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 9999;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 50px 0 0;
`;

const Logo = styled.a`
  cursor: pointer;
  img {
    height: 50px;
  }
`;

const NavContent = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavItems = styled.li`
  list-style: none;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  margin: 0 8px;
  cursor: pointer;
  border-radius: ${radius.md};
  transition: all 0.1s;
  a {
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    text-decoration: none;
    color: white;
  }
  &:hover {
    background-color: white;
    transition: all 0.4s;
    a{
      color ${colors.primary}
    }
  }
`;

const Root = () => {
  return (
    <Wrapper>
      <Container>
        <Navbar>
          <Link href='/'>
            <Logo>
              <img src='/logo/logo.svg' alt='' />
            </Logo>
          </Link>
          <NavContent>
            {routes.map((route) => (
              <NavItems key={route.links}>
                <Link href={route.links}>{route.name}</Link>
              </NavItems>
            ))}
          </NavContent>
        </Navbar>
      </Container>
    </Wrapper>
  );
};

export default Root;