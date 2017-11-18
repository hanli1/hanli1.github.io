import React, { Component } from 'react';

import { Container, Card, Grid, Icon, Image } from 'semantic-ui-react'

import './App.css';
import ProfileImg from './img/profile.jpg';
import BackgroundImg from './img/night-city.jpg';

class App extends Component {
  render() {
    return (
        <Grid verticalAlign="middle" style={{height:"100%"}}>
            <Grid.Row centered columns={7}>
                <Grid.Column mobile={7} computer={3}>
                    <Card fluid color='green'>
                        <Image src={ProfileImg} />
                        <Card.Content>
                            <Card.Header>
                            Han Li
                            </Card.Header>
                            <Card.Meta>
                                <span className='date'>
                                    Student
                                </span>
                            </Card.Meta>
                            <Card.Description>
                                Hello!
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href="http://www.github.com/hanli1" target="_blank" rel="noopener noreferrer">
                                <Icon name='github' />
                            </a>    
                            <a href="http://www.linkedin.com/hanli3" target="_blank" rel="noopener noreferrer">
                                <Icon name='linkedin' />
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
