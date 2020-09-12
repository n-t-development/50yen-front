import styled from "styled-components";
import { Link } from 'react-router-dom'
export const Root = styled.div`
`;
export const HeaderBox = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
`;


export const LinkBox = styled.div`
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
  width: 100%;
  max-width: 1080px;
  margin: 0;
  justify-content: center;
`;
export const LinkItem = styled.div`
  list-style: none;
  display: flex;
  width: 100%;
  height: 50px;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  border: 1px solid;
  // border-color: #fff;
  // background-color: #00bfff;
`;
export const StyleLink = styled(Link)`
  display: block;
  margin: 0 auto;
    color: black;
    width: 100%;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
`;

export const TopImageBox = styled.div`
    height: 200px;
    font-size: 20px;
    text-align: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 300px;
    height: 300px;
`;
export const Text = styled.span`
    display: block;
    font-size: 20px;
`;