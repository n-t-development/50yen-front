import * as React from 'react';

import styled from 'styled-components';

interface Option {
    label: string;
    value: string;
}
type Extend<T, P> = Pick<T, Exclude<keyof T, keyof P>> & P;
type Props = Extend<
    React.PropsWithoutRef<JSX.IntrinsicElements['select']>,
    {
        className?: string;
        options: Option[];
        onChange?: (value: string) => void;
        inToolbar?: boolean;
        highlight?: boolean;
        allowEmpty?: boolean;
        icon?: React.ReactNode;
        inputRef?: (element: HTMLSelectElement) => void;
    }
>;

const SelectionIconBox = styled.label<{ highlight: boolean }>`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 24px;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 10px;
  pointer-events: none;
`;

const Select = styled.select<{
    inToolbar: boolean;
    isEmpty?: boolean;
    useIcon: boolean;
    highlight?: boolean;
}>`
  /* 16pxより小さいとiOSのズーム機能が有効になる */
  appearance: none;
  border: 1px solid black;
  background: transparent;
  padding: 0;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  line-height: 19px;
  margin: 0;
  &:first-child {
    padding-left: 10px;
  }
`;

const SelectRoot = styled.div<{
    inToolbar: boolean;
}>`
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 2px 0px;
`;

const StyledOption = styled.option`
`;

const Option: React.SFC<Option> = ({ value, label }) => (
    <StyledOption value={value}>{label}</StyledOption>
);

function getValue(callback?: (val: string) => void) {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
        callback && callback(e.target.value);
    };
}

export const Selectbox: React.SFC<Props> = ({
    id,
    name,
    value,
    options,
    onChange,
    allowEmpty,
    className,
    inToolbar = false,
    highlight = false,
    icon = null,
    inputRef,
    ...otherSelectProps
}) => {
    const selectOptions = allowEmpty
        ? [{ value: '', label: '選択してください' }, ...options]
        : options;
    return (
        <SelectRoot inToolbar={inToolbar} className={className}>
            {icon && (
                <SelectionIconBox htmlFor={id} highlight={highlight}>
                    {icon}
                </SelectionIconBox>
            )}
            <Select
                id={id}
                name={name}
                onChange={getValue(onChange)}
                required={!allowEmpty}
                value={value}
                inToolbar={inToolbar}
                useIcon={!!icon}
                highlight={highlight}
                isEmpty={allowEmpty === true && (value === undefined || value === '')}
                ref={inputRef}
                {...otherSelectProps}
            >
                {selectOptions.map((option) => (
                    <Option {...option} key={option.value} />
                ))}
            </Select>
        </SelectRoot>
    );
};

Selectbox.displayName = 'Selectbox';