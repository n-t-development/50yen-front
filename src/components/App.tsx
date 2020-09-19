import * as React from "react";
import styled from 'styled-components'
import 'react-id-swiper/lib/styles/css/swiper.css';
import { Header } from "./Header";
import { Logo } from "../designsystem/Logo";
import { Route, Switch, Router } from "react-router";
import List from "./List/components";
import PostPage from './PostPage/components'
import { Link } from "react-router-dom";
import Top from "./Top/components";
import Details from "./Details/components";
import history from "./../common/history"
const page404 = () => <div><h1>404</h1>存在しないページです</div>  //<= ヒットしなかった時用のページを追加

const Root = styled.div`
    max-width: 1080px;
    margin: 0 auto;
`;
export const MenuModal = () => {

}
export const App = () => {
    return (
        <Root>
            <Router history={history}>
                <Route exact path='/' component={Top} />
                <Route exact path='/list' component={List} />
                <Route exact path='/detail' component={Details} />
                <Route exact path='/post' component={PostPage} />
            </Router>
        </Root>
    )
}

export default App