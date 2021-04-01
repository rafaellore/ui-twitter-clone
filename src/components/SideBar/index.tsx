import React from 'react';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

import List from '../List';
import Follow from '../Follow';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon/>
        </SearchWrapper>
        <Body>
            <List
              title="Talvez você curta"
              elements ={[
                <Follow name ="Guy-Manuel"
                nickname="@guymanueldf"
                />,
                <Follow name ="Thomas Bangalter"
                nickname="@thomasbangdf"
                />,
                <Follow name ="Linus Torvalds"
                nickname="@linuxtorval"
                />
              ]}
            />
            <List
              title="O que está acontecendo"
              elements ={[
                <News/>,
                <News/>,
                <News/>
              ]}
            />
        </Body>
    </Container>
  );
}

export default SideBar;