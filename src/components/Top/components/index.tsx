import * as React from "react";
import { Root, Box, TitleBox, Title, Item, Section, ItemTitle, Text, DataTime, StyleLink, LogoBox, PostButton } from "./elements";
import { Logo } from "../../../designsystem/Logo";
import { Link } from "react-router-dom";
// https://vmdsdute17.execute-api.us-east-2.amazonaws.com/RESTAPITEST?myParam=myValue

export const Top = () => {
    return (
        <Root >
            <LogoBox>
                <Logo />
            </LogoBox>
            <LogoBox>
                <PostButton to={'/post'}>投稿</PostButton>
            </LogoBox>
            <div><Link to={'/list'}>一覧</Link></div>
            <div>投稿</div>
            <div></div>
            <div></div>
            <br /><br /><br /><br /><br />
            ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓<br />
            この下にコメントランキングと新着順5個づつ表示
        </Root>
    )
}

export default Top;



