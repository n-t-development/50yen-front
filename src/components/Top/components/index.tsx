import * as React from "react";
import { Root, Box, TitleBox, Title, Item, Section, ItemTitle, Text, DataTime, StyleLink, LogoBox, PostButton } from "./elements";
import { Logo } from "../../../designsystem/Logo";
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
            <br /><br /><br /><br /><br />
            ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓<br />
            この下にコメントランキングと新着順5個づつ表示
        </Root>
    )
}

export default Top;



