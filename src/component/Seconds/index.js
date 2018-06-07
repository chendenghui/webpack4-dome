import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Seconds extends Component {

    constructor(props) {

        super(props);

        this.state = {seconds:0 };

}

    tick() {

        this.setState(prevState => ({

            seconds: prevState.seconds +1

        }));

    }

    componentDidMount() {

        this.interval =setInterval(() =>this.tick(), 1000);

    }

    componentWillUnmount() {

        clearInterval(this.interval);

    }

    render() {
        const {title} = this.props;
        return (
            <div className="cont">
                <div className="top">
                    <i className="logo" />
                    这是{title}
                    Seconds {this.state.seconds}
                </div>
                <div className="bottom" />
            </div>


    );

    }

}
Seconds.propTypes = {
    // 组件默认值 具体数据格式参照 ant Cascader
    title: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
   
  };
  
  Seconds.defaultProps = {
    title: 'title',
  };
  
export default Seconds;
