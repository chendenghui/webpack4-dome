import React,{ Component } from 'react';
import './index.css';

class TabController extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            current: 0
        };
    }

    itemNav(index) {
        return index === this.state.current ? 'item-title active' : 'item-title';
    }

    itemCon(index){
        return index === this.state.current ? 'con active' : 'con';
    }

    render(){
        return (
            <div>
                <ul className="itemContainer clearfix">
                    {
                        React.Children.map(this.props.children, (element,index) => {
                            return (
                                <li onClick={ () => { this.setState({ current: index }) } } className={ this.itemNav(index) }>{ element.props.name }</li>
                            )
                        })
                    }
                </ul>
                <div className="itemCon">
                    {
                        React.Children.map(this.props.children, (element,index) => {
                            return (
                                <div onClick={ () => { this.setState({ current: index }) } } className={ this.itemCon(index) }>{ element }</div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default class TabsCard extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <TabController>
                <div name="one">
                    第一部分
                </div>
                <div name="two">
                    第二部分
                </div>
                <div name="three">
                    第三部分
                </div>
            </TabController>
        );
    }
}

