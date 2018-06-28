import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { observer } from 'mobx-react';
import Masonry from 'react-masonry-component';
import 'antd/dist/antd.css';
import { Row, Col, Tabs, Tooltip, Collapse } from 'antd';
import Content from 'BizComponent/Content';
import Svg from 'BizComponent/svg';
import Button from 'BizComponent/Button';
import ItemCard from 'BizComponent/ItemCard';
import ItemCardContent from 'BizComponent/ItemCardContent';
import Modal from './Modal';
import store from './store';
import styles from './index.css';

const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerWidth:'',
      printerModle:false //打印机弹框可见性
    }
  }

  handleprinter=() => {
    store.printerModle=true //弹框可见
  }

  render() {
    const { getCommentServices,getCommentApp,getInductionDoc,getServiceDoc,getNews,getInternalSystem } = store;

    return (
        <Content>
        

      <MediaQuery query='(min-device-width: 1224px)'>
        {/* <Content style={{marginBottom:20}}> */}

          <Row gutter={10} className={styles.tools}>
            <Col span={16} >
              <div className={`${styles.commonServicesWrap} ${styles.boxBorder}`}>
                <div className={styles.commonServices}>
                  <div className={styles.iconServices} />
                  <Tabs defaultActiveKey="1" tabBarStyle={{color:'#999',fontSize:16}} >
                    <TabPane  tab={<span>常用服务</span>} key="1">
                        <div className={styles.toolsContent}>
                          <div className={styles.ImgContentInt}>
                              <div className={styles.toolsImgWrap}>
                                {
                                  getCommentServices.map((item,index)=>
                                    <a className={styles.ImgWrap} key={index}  target="_blank" href={item.fileUrl}>
                                      <div className={styles.ImgOut}>
                                        <div className={`${styles.ImgOut}`} >
                                          <img className={`${styles.ImgOut}`} src={item.imgUrl}  alt={item.itemName} />
                                        </div>
                                      </div>
                                      <Tooltip title={item.itemName}>
                                        <span className={styles.ImgLabel} style={{overflow:'hidden',whiteSpace:' nowrap'}}>{item.itemName}</span>
                                      </Tooltip>
                                    </a>
                                  )
                                }
                                  
                                <div className={styles.ImgWrap} onClick={this.handleprinter} >
                                  <div className={styles.ImgOut}>
                                    <div style={{overflow:'hidden',height:48,width:48}} onClick={this.handleprinter}  />
                                  </div>
                                  <Tooltip title={'打印设置'}>
                                    <span className={styles.ImgLabel} style={{marginTop:3}}>打印设置</span>
                                  </Tooltip>
                                </div>
                              </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="入职指引" key="2">
                      <div className={styles.inductionDoc}>
                      {
                        getInductionDoc.map((item,index)=>
                          <span className={styles.commonServicesContent} key={index}>
                              {
                                item.document?
                                <Button
                                  className={styles.itemContentPage}
                                  type="link"
                                  target='_blank'

                                  href={`/web/webTemplate?itemName=${item.itemName}`}
                                >{item.itemName}</Button>
                                :<a
                                  target='_blank'
                                  href={item.fileUrl} >{item.itemName}</a>
                              }
                              <div className={styles.IconBoxS}>
                                {item.flagCode===1?
                                  <Svg
                                    IconName='iconNew'
                                    width='26'
                                    height='15'
                                    viewBox='0 0 26 15'
                                  />
                                :null}

                                {item.flagCode===2?
                                  <Svg
                                    IconName='iconHot'
                                    width='26'
                                    height='15'
                                    viewBox='0 0 26 15'
                                  />
                                :null}
                              </div>
                          </span>
                        )
                      }
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </Col>
            <Col  span={7} >
                <ItemCard
                  cardStyle={{maxWidth:368,height:180}}
                  title='常用软件下载'
                  titleIcon={
                    <Svg
                    IconName='commonAppIcon'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                  />
                  }
                >
                  <div className={styles.ImgContentInt}>
                    <div className={styles.toolsImgWrapApp}>
                        {
                          getCommentApp.map((item,index)=>
                            <a className={styles.ImgWrapApp} key={index} target="_blank" href={item.fileUrl}>
                              <div className={styles.ImgOutApp}>
                                <div className={`${styles.ImgOutApp}`} >
                                  <img className={`${styles.ImgOutApp}`} src={item.imgUrl}  alt={item.itemName} />
                                </div>
                              </div>
                              <span className={styles.ImgLabelApp}>{item.itemName}</span>
                            </a>
                        )}

                    </div>
                  </div>
                </ItemCard>
            </Col>
          </Row>

          <Row gutter={30} style={{marginTop:10}}>
            <Col span={16}>
                <ItemCard
                  cardStyle={{width:785}}
                  title='服务文档'
                  titleIcon={
                    <Svg
                      IconName='servicesDocIcon'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                    />
                  }
                >
                  <Masonry
                      className={styles.ItemCardServicesDoc} // default ''
                      elementType={'ul'} // default 'div'
                      disableImagesLoaded={false} // default false
                      updateOnEachImageLoad={false} 
                  >
                    { getServiceDoc.map((item,index)=><ItemCardContent key={index} item={item} />) }
                  </Masonry>
                </ItemCard>
            </Col>

            <Col span={8} order={2}>
                <ItemCard
                  cardStyle={{width:368,height:228}}
                  title='新闻公告'
                  titleIcon={
                    <Svg
                      IconName='newsIcon'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                    />
                  }
                >
                  <div style={{padding:'15px 0'}}>
                    {
                      getNews.map((items,indexs)=>
                        <p className={styles.newsItemLi} key={indexs}>
                          <span className={styles.point} />
                          <a href={items.fileUrl} >{items.itemName}</a>
                        </p>)
                    }
                  </div>
                </ItemCard>

                <ItemCard
                  cardStyle={{width:368,marginTop:17}}
                  title='研发内部系统'
                  titleIcon={
                    <Svg
                      IconName='devIcon'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                    />
                  }
                >
                  <div className={styles.OtherContentCard}>
                      {
                        getInternalSystem.map((item, index) =>
                          <div className={styles.OtherWrap} key={index}>
                            <div className={styles.OtherTital}>{item.title}</div>
                            <div>
                              {item.content.map((val, keyIndex) =>
                                <Tooltip  key= {keyIndex}title={val.itemName}>
                                  <div className={styles.AItem}
                                    style={{overflow:'hidden',whiteSpace:' nowrap'}}
                                  >
                                    <a key={keyIndex} target="_blank" href={val.fileUrl} >{val.itemName}</a>
                                  </div>
                                </Tooltip>
                                )
                              }
                            </div>
                          </div>
                        )
                      }

                  </div>
                </ItemCard>
                 
             </Col>
          </Row>
        {/* </Content> */}
      </MediaQuery>

      

            </Content>
    );
  }
}

export default Home;
// App.renderDOM(Home);
