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
        const { children, titleMoreDomShow } = this.props;
        return (
            <div>
                <ul className="itemContainer clearfix">
                    {
                        React.Children.map(children, (element,index) => {
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
                    {/* {
                        titleMoreDomShow ?
                            <li className={'item-title-more'}>
                                {this.props.children[this.state.current].props.titleMoreDom}
                            </li>
                        :null
                    } */}

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

TabController.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ]),
    titleMoreDomShow: PropTypes.bool,
    titleDom : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    titleMoreDom : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),

  }
  
TabController.defaultProps = {
    children : [],
    titleDom : 'title',
    titleMoreDom: <span>更多</span>,
    titleMoreDomShow : false
};
  
  export default TabController;