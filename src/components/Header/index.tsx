import * as React from "react";
import { Root, LinkBox, StyleLink, LinkItem, TopImageBox, Img, Text } from "./elements";
import { Route } from "react-router";
import List from "../List/components";

// TODO: リンクのテキストはDBから取得しタグとして表示したい
// TODO: コンポーネント名をHeaderじゃなくてTagにする
export const Header: React.FC = () => {

    return (
        <Root >
            <LinkBox >
                <LinkItem>
                    <StyleLink to={'/list'}>{'REACT'}</StyleLink>
                </LinkItem>
                <LinkItem>
                    <StyleLink to={'/list'}>{'JAVASCRIPT'}</StyleLink>
                </LinkItem>
                <LinkItem>
                    <StyleLink to={'/list'}>{'PHP'}</StyleLink>
                </LinkItem>
                <LinkItem>
                    <StyleLink to={'/list'}>{'JAVA'}</StyleLink>
                </LinkItem>
            </LinkBox>
        </Root >
    )
}
Header.displayName = 'Memo(Header)';