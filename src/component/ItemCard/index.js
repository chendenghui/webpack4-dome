/**
 * 时间选择控件
 * demo: /bach-erp/web/Demo/BaseDemo
 * 组件支持返回string值 无需手动从moment对象转string
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';

const defaultTitleIcon = (
<svg width="19px" height="18px" viewBox="0 0 19 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="Page-2-Copy-6" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="home-1440x900-copy-5" transform="translate(-160.000000, -95.000000)">
          <g id="Group-7" transform="translate(160.000000, 94.000000)">
              <path d="M9.39479366,12.4984741 L0.918836806,12.4984741 L0.918836806,11.496626 L0.918836806,10.4573946 L17.3733195,0.957394627 L18.3733195,2.68944543 L4.84768503,10.4984741 L10.9188368,10.4984741 L10.9188368,10.5013173 L10.9294476,10.4984741 L13,18.2258807 L11.0681483,18.7435188 L9.39479366,12.4984741 Z" id="Combined-Shape" fill="#5DACF8"></path>
              <polygon id="Rectangle-42-Copy-3" fill="#FF5000" transform="translate(16.765731, 6.022928) rotate(18.000000) translate(-16.765731, -6.022928) " points="15.7617387 1.02292778 17.7697226 1.96521067 17.7617387 11.0229278 15.7617387 11.0229278"></polygon>
          </g>
      </g>
  </g>
</svg>
);

class ItemCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  

  render() {
    const {children,title,titleIcon,cardStyle} = this.props;
    return (
        <div className={styles.boxBorder} style={{...cardStyle}}>
            <div className={styles.cardHeader}>
                <div className={styles.titleWrap}>
                    <div className={styles.icon}>{titleIcon}</div>
                    <span className={styles.cardTitleText}> {title}</span>
                </div>
            </div>
            <div className={styles.cardBody}>
                {children}
            </div>
            
        </div>
    );
  }
}

ItemCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  title: PropTypes.string,
  titleIcon: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  cardStyle: PropTypes.object
};

ItemCard.defaultProps = {
  children:[],
  title:'标题',
  titleIcon:defaultTitleIcon,
  cardStyle:{}

};

export default ItemCard;
