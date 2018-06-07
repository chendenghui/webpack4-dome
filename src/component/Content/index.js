
import React,{Component} from 'react';
import Header from 'BizComponent/Header';

import 'BizPublic/common.pcss';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };      
    }

    render() {
        const {children} = this.props;

        return (
            <div className="contentWrap">
                <Header />
                <div className="content">
                    <div className="contentContent">
                        {children}
                    </div>
                </div>
            </div>
        )}
}

export default Content;