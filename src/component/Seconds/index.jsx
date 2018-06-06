import React,{Component} from 'react';

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
                    <i className="logo"></i>
                    这是{title}
                    Seconds {this.state.seconds}
                </div>
                <div className="bottom"></div>
            </div>


    );

    }

}

export default Seconds;
