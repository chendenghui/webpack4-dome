import React from 'react';
import Header from 'BizComponent/Header';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
               <Header/>
                <div className=''>
                   <a href="/demo.html">这是demo</a>
                </div>

                这是demo页
                <div className="bottom">
                    这是底部
                </div>
            </div>
        );
    }
}

export default Index;