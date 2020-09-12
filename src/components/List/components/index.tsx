import * as React from "react";
import { Root, ListBox, Title, ListItem, Section, ItemTitle, Text, DataTime, StyleLink } from "./elements";
import format from 'date-fns/format';
// 後々DBから取得するデータ仮で登録
const items = [
    {
        userId: 14368,
        title: 'テストタイトル',
        text: '本文',
        startDateTime: 1531753200000,
        commentCount: 5,
        goodCount: 3　// ヘルプボタンでも
    },
    {
        userId: 14368,
        title: 'テストタイトル',
        text: '本文',
        startDateTime: 1531753200000,
        commentCount: 5,
        goodCount: 3
    }
]
const DATE_AND_TIME = 'yyyy-MM-dd';
async function postData(url = '', data = {}) {
    console.log("####");
    // 既定のオプションには * が付いています
    const response = await fetch('https://vmdsdute17.execute-api.us-east-2.amazonaws.com/RESTAPITEST?myParam=myValue', {
        method: 'GET',
        mode: 'no-cors',
        credentials: 'include'
    })
        .then((response) => {
            console.log(response);
            return response; // レスポンスをテキストとして変換する
        })
        .then((json) => console.log(json))
        .catch((error) => console.log(error)); console.log(response);
    return response; // レスポンスの JSON を解析

}

export const List = () => {
    postData('https://vmdsdute17.execute-api.us-east-2.amazonaws.com/RESTAPITEST?myParam=myValue')
        .then(data => {
            console.log(data); // `data.json()` の呼び出しで解釈された JSON データ
        });
    console.log("####");

    return (
        <Root >
            <Section>
                <Title>
                    〇〇一覧　←開いているリストの名前をいれる
                </Title>
                {items.map((item) =>
                    <ListBox>
                        <ListItem>
                            <StyleLink to={'/list/detail'}>
                                <ItemTitle>{item.title}</ItemTitle>
                                <Text>{item.text}</Text>
                                <DataTime>{format(new Date(item.startDateTime), DATE_AND_TIME)}</DataTime>
                            </StyleLink>
                        </ListItem>
                    </ListBox>
                )}
            </Section>
        </Root>
    )
}

export default List;



