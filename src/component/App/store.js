import { observable, action, computed, toJS } from 'mobx';
import Request from 'BizUtils/Request';
// import notification from 'BizComponent/Notification';
import {Notification} from 'antd';


class AppStore {
  @observable userInfo = {};
  @observable navMenu = [];
  @observable applyCount = 0;
  @observable feedbackCount = 0;


  constructor(){
  }


}

const store = new AppStore();
export default store;
