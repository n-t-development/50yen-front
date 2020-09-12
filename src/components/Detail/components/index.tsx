import * as React from "react";
import { Root, Box, Title, Item, Section, ItemTitle, Text, DataTime, StyleLink } from "./elements";
import format from 'date-fns/format';
// 後々DBから取得するデータ仮で登録
const items =
{
    userId: 14368,
    title: 'テストタイトル',
    text: '本文',
    startDateTime: 1531753200000,
    commentCount: 5,
    goodCount: 3　// ヘルプボタンでも
}
const DATE_AND_TIME = 'yyyy-MM-dd'
// https://vmdsdute17.execute-api.us-east-2.amazonaws.com/RESTAPITEST?myParam=myValue

export const Datail = () => {
    const { title, text, startDateTime } = items
    return (
        <Root >
            <Section>
                <Title>
                </Title>
                <Box>
                    <Item>
                        <StyleLink to={'/list/detail'}>
                            <ItemTitle>{title}</ItemTitle>
                            <Text>{text}</Text>
                            <DataTime>{format(new Date(startDateTime), DATE_AND_TIME)}</DataTime>
                        </StyleLink>
                    </Item>
                </Box>
            </Section>
        </Root>
    )
}

export default Datail;



