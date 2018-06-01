import React from 'react';
import Header from '../common/Header';
import '../../public/css/index.pcss';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
               <Header/>
                <div className='logo'></div>
                <div className=''>
                  这是首页
                </div>
                <div className="bottom">
                    这是底部
                </div>
            </div>
        );
    }
}

export default Index;