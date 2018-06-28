// import 'es6-shim';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { parse } from 'BizUtils/url';
import MediaQuery from 'react-responsive';
import { Layout } from 'antd';
import BizHeader from './Header/index';
import 'antd/dist/antd.css';
import Popover from './Popover/index';
import styles from './index.css';
import '../../style/index.scss';

const { Content } = Layout;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerWidth:''
    }
  }

  componentDidMount() {

      rbacStore.fetch();
      // enumStore.fetch();
    
    //获取窗口宽度
    window.addEventListener('resize', () => {
      this.setState({
        // containerWidth: ReactDOM.findDOMNode(this.refs.app).clientWidth
      });
    }, false);

    if (!this.props.hideNav) {
      const obj = parse().app_key;
      // store.getUserInfo();
      // store.getMessageData();
      if (obj === 'tag') {
        // store.getNavMenu({ app_key: 'tag', resource_type: 1 });
      } else {
        // store.getNavMenu({ app_key: 'dmp', resource_type: 1 });
      }
    }
  }

  render() {
    const { children, hideNav, moduleName } = this.props;
    return (
      <Layout className={styles.container}>
        <BizHeader
          hideNav={hideNav}
          moduleName={moduleName}
        />
        <MediaQuery query='(min-device-width: 1224px)'>
          <Content className={styles.contentWrap} id="layout-content">
            <div className={styles.content}>{children}</div>
            <Popover/>
          </Content>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <Content className={styles.contentWrapMobile} id="layout-content">
            <div className={styles.contentMobile}>{children}</div>
          </Content>
        </MediaQuery>

      </Layout>
    );
  }
}

App.renderDOM = (Page, props) => {
  ReactDOM.render(<Page {...props} />, document.getElementById('app'));
};

App.propTypes = {
  hideNav: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  moduleName: PropTypes.string
};

App.defaultProps = {
  moduleName: 'Home',
  hideNav: false,
  children: []
};
