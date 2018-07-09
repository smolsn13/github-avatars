import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import Avatar from './Avatar';

class AvatarImages extends Component {

  render() {
    let avatars = [
      {
        id: '1008',
        avatar_url: "https://avatars3.githubusercontent.com/u/614?v=4",
        login: "andykent"
      },
      {
        id: '1015',
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        login: "mojombo"
      },
      {
        id: '1017',
        avatar_url: "https://avatars3.githubusercontent.com/u/665?v=4",
        login: "zachinglis"
      },
      {
        id: '1028',
        avatar_url: "https://avatars3.githubusercontent.com/u/404?v=4",
        login: "rtomayko"
      }
    ]

    let jsxAvatars = avatars.map(function(avatar, index) {
          return <Avatar key={index} image={avatar.avatar_url} login={avatar.login} />
        })

    return(
      <Container>

      </Container>
    )
  }
}

export default AvatarImages;
