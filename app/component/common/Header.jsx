import React from 'react';
import { Input ,Switch} from 'antd';

import '../../public/css/common.pcss';
const Search = Input.Search;

const Header = () =>
    <div className="top">
        <div>这是头部</div>
        <Input placeholder="Basic usage" />
        <Switch defaultChecked onChange={()=>console.log(222)} />
        <div>
            <i className="logo"/>
        </div>
        <div className="nav">
            <a href="/index.html">首页</a> <a href="/shop.html">商城</a> <a href="/shop1.html">商城1</a> <a href="/demo.html">演示</a>
        </div>
        <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    </div>
;

export default Header;