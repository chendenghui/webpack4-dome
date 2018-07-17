import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Menu, Icon } from 'antd';

import store from '../store';

const SubMenu = Menu.SubMenu;

@observer
export default class NavMenu extends React.Component {
  state = {
    current: this.props.moduleName,
  };

  // 获取模块的key
  getKey = (str) => {
    const url = this.getUrl(str);
    if (!url) {
      return null;
    }
    const index = url.lastIndexOf('/') + 1;
    return url.substr(index);
  };

  // 获取模块的url
  getUrl = (str) => {
    if (!str) {
      return '';
    }
    return window.JSON.parse(str).url;
  };

  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  render() {
    const { getNavMenuData } = store;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} className="nav-menu" mode="horizontal">
        {getNavMenuData && getNavMenuData.length && getNavMenuData.map((item, i) => {
          if (item.children.length) {
            return (<SubMenu key={i} title={<span>{item.content.name} <Icon type="caret-down" /></span>}>
              {
                item.children.map((child, index) => {
                  if (child.children.length) {
                    return (<SubMenu key={index} title={child.content.name} className="ant-menu-sub-inner">
                      {
                        child.children.map((menu) => {
                          const childKey = this.getKey(menu.content.config);
                          const childUrl = this.getUrl(menu.content.config);
                          return (<Menu.Item key={childKey}>
                            <a href={`/home/web${childUrl}`}>{menu.content.name}</a>
                          </Menu.Item>);
                        })
                      }
                    </SubMenu>);
                  }
                  const childKey = this.getKey(child.content.config);
                  const childUrl = this.getUrl(child.content.config);
                  return (<Menu.Item key={childKey}>
                    <a href={`/home/web${childUrl}`}>{child.content.name}</a>
                  </Menu.Item>);
                })
              }
            </SubMenu>);
          }
          const url = this.getUrl(item.content.config);
          const key = this.getKey(item.content.config);
          return (
            <Menu.Item key={key || this.props.moduleName} >
              <a href={`/home/web${url}`}>{item.content.name}</a>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

NavMenu.propTypes = {
  moduleName: PropTypes.string.isRequired,
};
