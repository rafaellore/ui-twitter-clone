import React from 'react';

import { Container, Retweeted,Dot, Body, Avatar, Content, Header, Description,ImageContent,Status,CommentIcon,RetweetIcon, LikeIcon, Icons } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              Você retweetou
          </Retweeted>
          <Body>
              <Avatar/>
              <Content>
                  <Header>
                      <strong>Daft Punk</strong>
                      <span>@dointright</span>
                      <Dot/>
                      <time>27 de set</time>
                  </Header>
                <Description>Everybody will be dancing.</Description>
                <ImageContent/>
                <Icons>
                    <Status>
                        <CommentIcon/>
                        19
                    </Status>
                    <Status>
                        <RetweetIcon/>
                        19
                    </Status>
                    <Status>
                        <LikeIcon/>
                        666
                    </Status>
                </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;