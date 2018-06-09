import React from 'react';
import styles from './index.css';

class Footer extends React.Component {

  render() {
    return (
      <div className={styles.footerContent}>
        <div className={styles.footer}>
          <div className={styles.wrapper}>
            <p><span>如有完善意见请： 蜂语 <span style={{color:'#5DACF8'}}>@龚雨萌</span> or <span style={{color:'#5DACF8'}}>@陈登辉</span></span></p>
            <div className={styles.tooltip}>
              <div className={styles.rowLeft1} style={{width:230,display:'inline-block'}}>
                <p><span style={{fontWeight:'bolder'}}>龚雨萌</span></p>
                <p><span>电话：<a>15801593204</a></span></p>
                <p><span>邮箱：<a href="mailto:yumeng.gong@wormpex.com">yumeng.gong@wormpex.com</a></span></p>
              </div>
              <div className={styles.rowRight} style={{width:240,display:'inline-block',paddingLeft:10,borderLeftWidth:1,borderLeftColor:'#ddd',borderLeftStyle:'solid'}}>
                <p><span style={{fontWeight:'bolder'}}>陈登辉</span></p>
                <p><span>电话：<a>18103885362</a></span></p>
                <p><span>邮箱：<a href="mailto:denghui.chen@wormpex.com">denghui.chen@wormpex.com</a></span></p>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
