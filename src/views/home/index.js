import React,{ Component } from 'react';
import styled from 'styled-components';
import {Input,Button,Tabs, Icon} from 'antd';
import Content from 'BizComponent/Content';
import TabController from 'BizComponent/TabController';

const Wrapper = styled.section`
  margin: 0 auto;
  width: 300px;
  text-align: center;
`;
const ButtonS = styled.button`
  width: 100px;
  color: white;
  background: skyblue;
`;

const TabPane = Tabs.TabPane;
const titleMoreDom = <span onClick={()=>{window.open('www.baidu.com')}} style={{display:'inline-block'}}><span style={{fontSize:15, display:'inline-block',marginRight:10}}>{'测试'}</span><Icon type={'right'}/></span>
const titleMoreDom1 = <span style={{display:'inline-block'}}><span style={{fontSize:15, display:'inline-block',marginRight:10}}>{'测试1'}</span><Icon type={'right'}/></span>
const titleMoreDom2 = <span style={{display:'inline-block'}}><span style={{fontSize:15, display:'inline-block',marginRight:10}}>{'测试2'}</span><Icon type={'right'}/></span>
class Index extends Component {
   
    render() {
        return (
            <Content>
                <Tabs type="card">
                    <TabPane tab="Tab 1" key="1">
                        <TabController
                            titleMoreDomShow={true}
                            // titleMoreDom={titleMoreDom}
                        >
                            <div titleDom="one" titleMoreDom={titleMoreDom} >
                                第一部分
                            </div>
                            <div titleDom="two" titleMoreDom={titleMoreDom1}>
                                第二部分
                            </div>
                            <div titleDom="three" titleMoreDom={titleMoreDom2}>
                                第三部分
                            </div>
                    </TabController>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <Wrapper>
                            <ButtonS>Hello World</ButtonS>
                        </Wrapper>
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </Content>
        );
    }
}

export default Index;