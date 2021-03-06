import { observable, action, toJS } from 'mobx';
import Request from 'BizUtils/Request';
import { rbacSource } from 'BizConfig/constant';

class RbacStore {
  authed = observable.shallowMap({});

  itemMap = {};
  batchUpdating = true;

  @action.bound
  add(uri) {
    if (typeof uri === 'string') {
      this.itemMap[uri] = false;
    } else {
      throw new TypeError('rbac.add 必须传入字符串');
    }
  }

  @action.bound
  fetch() {
    const keys = Object.keys(this.itemMap);
    if (!keys.length) return;

    Request.post('/rbac/internal/uri/authlist/v1', {
      data: {
        uris: keys,
        appSource: rbacSource
      },
      headers: {
        rbac_source: 'home_integration'
      }
    }).then((ret) => {
      if (Array.isArray(ret.data)) {
        ret.data.forEach((item) => {
          this.authed.set(item.uri, item.authed);
        });
      }
    });
  }

  @action.bound
  getItemMap() {
    return this.itemMap;
  }

  @action.bound
  getAuthedMap() {
    return toJS(this.authed);
  }
}

const store = new RbacStore();

export default store;
