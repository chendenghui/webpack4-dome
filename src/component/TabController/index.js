import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { CSSTransitionGroup } from 'react-transition-group';
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
        return index === this.state.current ? 'con active-content' : 'con';
    }

    render(){
        return (
            <div>
                <ul className="itemContainer clearfix">
                    {/* <div className="link-bar" /> */}
                    {
                        React.Children.map(this.props.children, (element,index) => {
                            return (
                                <li
                                    className={ this.itemNav(index) } 
                                    onClick={ () => { this.setState({ current: index }) } } 
                                >
                                    { element.props.titleDom }
                                </li>
                            )
                        })
                    }
                    {
                        this.props.titleMoreDomShow ?
                            <li className={'item-title-more'}>
                                {this.props.children[this.state.current].props.titleMoreDom}
                            </li>
                        :null
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

TabController.PropTypes = {
    children : PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ]),
    titleDom : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    titleMoreDom : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    titleMoreDomShow: PropTypes.bool,

  }
  
  TabController.defaultProps = {
    children : [],
    titleDom : 'title',
    titleMoreDom: <span>更多</span>,
    titleMoreDomShow : false
  };
  
  export default TabController;