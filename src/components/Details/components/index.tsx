import * as React from "react";
import { Root, Box, Title, Item, Section, ItemTitle, Text, DataTime, StyleLink } from "./elements";
import { TitleBox } from "../../PostPage/components/elements";
import { Link } from "react-router-dom";

export const Details = () => {
    return (
        <Root >
            <Link to={'/'}>TOPへ戻る</Link>
            <Section>
                <TitleBox>
                    <Title>
                        詳細ページ
                    </Title>
                </TitleBox>
                <Item>
                </Item>
            </Section>
        </Root>
    )
}

export default Details;



