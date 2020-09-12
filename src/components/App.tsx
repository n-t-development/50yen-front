import * as React from "react";
import styled from 'styled-components'
import 'react-id-swiper/lib/styles/css/swiper.css';
import { Header } from "./Header";
import { Logo } from "../designsystem/Logo";
import { Route } from "react-router";
import List from "./List/components";
import Datail from "./Detail/components";
import PostPage from './PostPage/components'
import { Link } from "react-router-dom";

const page404 = () => <div><h1>404</h1>存在しないページです</div>  //<= ヒットしなかった時用のページを追加

const Root = styled.div`
    max-width: 1080px;
    margin: 0 auto;
`;
const LogoBox = styled.div`

`;
const TabBox = styled.div`
    margin-top: 20px;
`;
const PostButton = styled(Link)`
    
`;
export const MenuModal = () => {

}
export const App = () => {
    return (
        <Root>
            <LogoBox>
                <Logo />
            </LogoBox>
            <LogoBox>
                <PostButton to={'/post'}>投稿</PostButton>
            </LogoBox>
            <TabBox>
                <Header />
            </TabBox>
            <Route exact path='/list' component={List} />
            <Route exact path='/list/detail' component={Datail} />
            <Route exact path='/post' component={PostPage} />
        </Root>
    )
}

export default App