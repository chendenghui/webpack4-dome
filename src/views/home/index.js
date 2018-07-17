import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MediaQuery from 'react-responsive';
import Content from 'BizComponent/Content';
import Modal from './Modal';
import Pc from './pc';
import Moddle from './moddle';

@observer
class Home extends Component {

  render() {
    return (
      <Content>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Modal/>
        </MediaQuery>

        <MediaQuery query='(min-device-width: 1224px)'>
          <Pc />
        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
          <Moddle />
        </MediaQuery>
      </Content>
    );
  }
}

export default Home;
