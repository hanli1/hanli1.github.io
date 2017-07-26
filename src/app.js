import React, { Component } from 'react';

import { Card, Grid, Icon, Image } from 'semantic-ui-react'

import './App.css';
import ProfileImg from './img/profile.jpg';

class App extends Component {
  render() {
    return (
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column mobile={8} tablet={6} computer={4}>
            <Card fluid color='green'>
              <Image src={ProfileImg} />
              <Card.Content>
                <Card.Header>
                  Han Li
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    Software Engineer
                  </span>
                </Card.Meta>
                <Card.Description>
                  Hello!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
