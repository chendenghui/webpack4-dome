import React,{ Component } from 'react';
import styled from 'styled-components';
import {Input,Button,Tabs} from 'antd';
import Content from 'BizComponent/Content';
import TabsCard from 'BizComponent/TabsCard';

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
class Index extends Component {
   
    render() {
        return (
            <Content>
                <Tabs type="card">
                    <TabPane tab="Tab 1" key="1">
                        <TabsCard/>
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