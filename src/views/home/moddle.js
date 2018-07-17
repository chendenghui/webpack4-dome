
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Row, Col, Tabs, Tooltip, Collapse } from 'antd';
import Svg from 'BizComponent/svg';
import Button from 'BizComponent/Button';
import ItemCard from 'BizComponent/ItemCard';
import store from './store';
import styles from './index.css';

const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

@observer
class Moddle extends Component {

  render() {
    const { getCommentServices,getCommentApp,getInductionDoc,getServiceDoc } = store;

    return (
        <div className={styles.contentMobile}>
          <Row  className={styles.tools}>
              <Col span={24} >
                <div className={`${styles.commonServicesWrapMobile} ${styles.boxBorder}`}>
                  <div className={styles.commonServices}>
                    <div className={styles.iconServices}>
                        <Svg
                          IconName='commonServicesIcon'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                        />
                    </div>
                    <Tabs defaultActiveKey="1" tabBarStyle={{color:'#999',fontSize:16}} >
                      <TabPane  tab={<span>常用服务</span>} key="1">
                          <div className={styles.toolsContent}>
                            <div className={styles.ImgContentInt}>
                                <div className={styles.toolsImgWrapMobile}>
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
                                </div>
                              </div>
                          </div>
                      </TabPane>
                      <TabPane tab="入职指引" key="2">
                        <div className={styles.inductionDoc}>
                        {
                          getInductionDoc.map((item,index)=>
                            <p key={index} className={styles.commonServicesContent}>
                              {
                                  item.document
                                  ?
                                  <Button
                                    className={styles.itemContentPage}
                                    type="link"
                                    target="_blank"
                                    href={`/web/webTemplate?itemName=${item.itemName}`}
                                  >{item.itemName}</Button>
                                  :
                                  <a key={index} target="_blank" href={item.fileUrl} >{item.itemName}</a>
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
                            </p>
                          )
                        }
                        </div>
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                  <ItemCard
                    cardStyle={{width:'100%',height:180}}
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
          <Row style={{marginTop:10}}>
             <Col span={24}>
                <ItemCard
                  cardStyle={{width:'100%'}}
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
                  <div className={styles.ItemCardServicesDocMobile} style={{marginTop:10}}>
                      <Collapse accordion>
                        {
                          getServiceDoc.map((item,index)=>
                            <Panel header={item.title} key={index}>
                                  {
                                    item.content.map((items,indexs)=>
                                      <p key={indexs} className={styles.itemLi}>
                                        {
                                          items.document?
                                          <Button
                                            className={styles.itemContentPage}
                                            type="link"
                                            target="_blank"
                                            href={`/web/webTemplate?itemName=${items.itemName}`}
                                          >{items.itemName}</Button>
                                          :<a key={indexs} target="_blank" href={items.fileUrl} >{items.itemName}</a>
                                          }
                                            <div className={styles.IconBox}>
                                            {items.flagCode===1?
                                              <Svg
                                                IconName='iconNew'
                                                width='26'
                                                height='15'
                                                viewBox='0 0 26 15'
                                              />
                                            :null}

                                            {items.flagCode===2?
                                              <Svg
                                                IconName='iconHot'
                                                width='26'
                                                height='15'
                                                viewBox='0 0 26 15'
                                              />
                                            :null}
                                          </div>
                                      </p>)
                                  }
                                
                            </Panel>)
                        }
                      </Collapse>
                  </div>
                </ItemCard>
               
            </Col>
          
          </Row>

        </div>

    );
  }
}

export default Moddle;
