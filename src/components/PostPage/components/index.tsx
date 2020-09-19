import * as React from "react";
import { useForm } from 'react-hook-form'
import { Root, Box, TitleBox, Title, Item, Section, ItemTitle, Text, DataTime, StyleLink, TabSelectBox, TextArea, TitleArea, SubmitButton } from "./elements";
import { useState, useCallback } from "react";
import history from "../../../common/history"
// https://vmdsdute17.execute-api.us-east-2.amazonaws.com/RESTAPITEST?myParam=myValue
const LANGUAGE_OPTIONS = [
    {
        label: '選択して下さい',
        value: ""
    },
    {
        label: 'React',
        value: "react"
    },
    {
        label: 'Java',
        value: "java"
    },
    {
        label: 'PHP',
        value: "php"
    },
    {
        label: 'Vue',
        value: "vue"
    },
    {
        label: 'その他',
        value: "other"
    }
];
const enum TagKeyEnum {

}
interface Props {
    value?: TagKeyEnum;
    onChange?: (e: string) => void;
}

function getValue(callback?: (val: string) => void) {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
        callback && callback(e.target.value);
    };
}

export const PostPage: React.FC<Props> = React.memo(({ value }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("投稿データ", data);
        // 投稿するapiのアクションを実行
        // MEMO: 投稿完了後は/listに遷移する
        history.push('/list');
    }

    return (
        <Root>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Title>投稿する言語</Title>
                <TabSelectBox
                    id="language"
                    name="language"
                    value={value}
                    options={LANGUAGE_OPTIONS}
                    inputRef={register}
                />
                <div>
                    <Title>タイトル</Title>
                    <TitleArea ref={register} name="title"></TitleArea>
                </div>
                <div>
                    <Title>本文</Title>
                    <TextArea ref={register} name="text"></TextArea>
                </div>
                <SubmitButton>投稿</SubmitButton>
            </form>
        </Root>
    )
})

export default PostPage;



