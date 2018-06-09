import React from 'react';
import { observer } from 'mobx-react';
import MediaQuery from 'react-responsive';
import router from 'BizUtils/router';
import Button from 'BizComponent/Button';
import Rbac from 'BizComponent/Rbac';
import Request from 'BizUtils/Request';
import styles from './index.css';
import Cookie from 'js-cookie';

const userName = Cookie.get('user_name') || '';

const protocol = window.location.protocol;
const str = window.location.host;
const HostUrl = protocol+str;//当前地址协议+IP+端口
const UrlHome = HostUrl;//
@observer
class Header extends React.Component {

  constructor () {
    super();
    this.isWeixin = this.is_weixn();
  }


  //判断微信登录
is_weixn=()=>{
  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=='micromessenger') {
      return true;
  } else {
      return false;
  }
}
  
  logout = () => {
    Request.get('/web/logout')
      .then((response) => {
        if (!response.status) {
          window.location.href = '/web/Home';
        }
      });
  };

  reastPassword = () => {
    window.location.href = 'https://usercenter-api.blibee.com/sso/operator/forget';
  }

  handleGoHome = () => {
    window.location.href = '/web/Home';
  };
  render() {
    return (
      <div>
          <MediaQuery query='(min-device-width: 1224px)'>
            <div className={styles.header}>
              <div className={styles.headerInner}>
                <div className={styles.logoContainer} onClick={this.handleGoHome}>
                  <div className={styles.logo} />
                  <div className={styles.comp_name}>蜂巢</div>
                </div>
                {
                  userName ?
                      <div className={styles.orderContainer}>
                   
                        <div className={styles.order_comp}>{userName} 你好！</div>

                        {/* <Rbac uri="/Management"> */}
                          <Button
                            className={styles.control}
                            type="link"
                            href={router.buildUrl('/Management')}
                          >控制台</Button>
                         {/* </Rbac> */}
                        <div className={styles.order_password} onClick={this.reastPassword}>修改密码</div>
                        <div className={styles.exit} onClick={this.logout}>退出</div>
                      </div>
                    : null
                }
              
              </div>
            </div>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 1224px)'>
            <div>
                {
                  this.isWeixin ?null
                  :
                <div className={styles.headerMobile}>
                    <div className={styles.headerInner}>
                    <div className={styles.logoContainer} onClick={this.handleGoHome}>
                      <div className={styles.logo} />
                      <div className={styles.comp_name}>蜂巢</div>
                    </div>
                    <div className={styles.orderContainer}>
                      <div className={styles.exit} onClick={this.logout}>退出</div>
                    </div>
                  </div>
                </div>
                }
                 
                  <div className={styles.headerMobileName}
                    style={{marginTop:`${this.isWeixin?15:65}`}}
                  >
                    <div className={styles.orderCompMobile}>{userName} 你好！</div>
                    <div className={styles.orderPasswordMobile}>
                      <span onClick={this.reastPassword}>修改密码</span>
                      {
                      this.isWeixin ?
                      <span className={styles.orderPasswordMobile} onClick={this.logout}
                        style={{}}
                      >
                        退出
                      </span>
                      :null
                    }
                    </div>
                   
                  </div>
             
            </div>
          </MediaQuery>
      </div>

    );
  }
}

export default Header;


