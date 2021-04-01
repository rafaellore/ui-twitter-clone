import React from 'react';
 
import Feed from '../Feed';


import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Rafael Moreira</h1>
        <h2>@rafaellore</h2>

        <p>
          Developer
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 27 de setembro de 2001.
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>666</strong>
          </span>
          <span>
            <strong>666 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;