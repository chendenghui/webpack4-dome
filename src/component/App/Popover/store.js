import Request from 'BizUtils/Request';
import { observable, action, toJS, computed } from 'mobx';

class Store {
  @observable contactData = [];//联系人数据
  
   constructor(){
     this.handleContactData();
   }

   //联系人数据数据
   @action.bound
   handleContactData = () => {
    Request.get('/fe/item/other/list').then((res) => {
      if (!res.status) {
       this.contactData = res.data.data;
      }
    });
   }

   @computed get getContactData() {
    return toJS(this.contactData);
  }
  
}
const store = new Store();
export default store;
