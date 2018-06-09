/**
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg from 'BizComponent/svg';
import {Icon } from 'antd';
import Button from 'BizComponent/Button';

import styles from './index.css';

class ItemCardContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      buttonShow: false
    };
  }

  componentDidMount() {
    if (this.props.item.content.length > 8) {
      this.setState({buttonShow:true})
    }
  }

  render() {
    const {item , key} = this.props;

    return (
      <div key={key} className={styles.Wrap}>
        <div className={`${styles.DocWrap} ${this.state.show ? styles.up : styles.down}`}>
          <div className={styles.DocHeader}>
            {item.title}
          </div>
          <div className={styles.DocBody}>
            {
              item.content.map((items,indexs)=>
                <p key={indexs} className={styles.itemLi}>
                  {
                    items.document?
                      <Button
                        className={styles.itemContentPage}
                        type="link"
                        target='_blank'
                        href={`/web/webTemplate?itemName=${items.itemName}`}
                      >{items.itemName}</Button>
                      :<a target='_blank' key={indexs} href={items.fileUrl} >{items.itemName}</a>
                    }
                    <div className={styles.IconBox}>
                      {items.flagCode===1?
                        <Svg
                          IconName='iconNew'
                          width='26'
                          height='15'
                          viewBox='0 0 26 15'
                        /> : null}
                      {items.flagCode===2?
                        <Svg
                          IconName='iconHot'
                          width='26'
                          height='15'
                          viewBox='0 0 26 15'
                        /> : null}
                    </div>
                </p>)
            }
          </div>
        </div>
        <div style={{height:22}}>
          {
            this.state.buttonShow ? 
            <div onClick={()=>this.setState({show:!this.state.show})}>
                {this.state.show ?<span className={styles.packDown}>收起<Icon type="up" /></span>:<span className={styles.packUp}>展开<Icon type="down"/></span>}
            </div>
            :null
          }
        </div>
      </div>
    );
  }
}

ItemCardContent.propTypes = {
  item: PropTypes.object,
  key: PropTypes.string
};

ItemCardContent.defaultProps = {
  item:{},
  key:''
};

export default ItemCardContent;
