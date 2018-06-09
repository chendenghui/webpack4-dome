import React,{Component} from 'react';
import 'antd/dist/antd.css';
import Header from 'BizComponent/Header';
import PropTypes from 'prop-types';
import styles from 'BizPublic/common.css';

import 'BizPublic/common.pcss';

class Content extends Component {

    render() {
        const { children } = this.props;

        return (
            <div className={styles.contentWrap}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.contentContent}>
                        {children}
                    </div>
                </div>
            </div>
        )}
}


  Content.PropTypes = {
    children : PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ])
  }
  
  Content.defaultProps = {
    children : [],
  };
  
export default Content;