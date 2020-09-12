import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import breakPoints from '../../../utils/breakPoints';

interface TabBarItem {
    label: string;
    url: string;
    active?: boolean;
}

interface Props {
    items: TabBarItem[];
    onClick?: (url: string) => void;
}

const TabBar = styled.div`
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 1080px;
  margin: 0;
  justify-content: center;

`;

const List = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors.bgGray};
`;

const ListItem = styled.li<{ active: boolean }>`
  padding: 0;
  flex: 1 0 auto;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.4;
  text-align: center;
`;

const StyledLink = styled(Link) <{ active: boolean }>`
color: ${
    ({ active, theme }) =>
        active ? theme.colors.primary : theme.colors.gray
    };
`;

const StyledButton = styled.button<{ active: boolean }>`
border: none;
font - weight: bold;
font - size: 14px;
line - height: 1.3;
text - align: center;
color: ${
    ({ active, theme }) =>
        active ? theme.colors.primary : theme.colors.gray
    };
margin: 0;
padding: 8px 16px 12px;
background - color: transparent;
white - space: nowrap;
`;

const ScrollableTabBar: React.SFC<Props> = ({ items, onClick }) => (
    <TabBar>
        <List>
            {items.map((i: TabBarItem) => (
                <ListItem key={i.url} active={i.active}>
                    {onClick ? (
                        <StyledButton
                            // tslint:disable-next-line jsx-no-lambda
                            onClick={() => onClick(i.url)}
                            active={i.active}
                            disabled={i.active}
                        >
                            {i.label}
                        </StyledButton>
                    ) : (
                            <StyledLink to={i.url} active={i.active}>
                                {i.label}
                            </StyledLink>
                        )}
                </ListItem>
            ))}
        </List>
    </TabBar>
);

export default ScrollableTabBar;