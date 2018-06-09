import Request from 'BizUtils/Request';
import { observable, action, toJS, computed } from 'mobx';

class HomeStore {
  @observable AllData = [];
  @observable commentServices = [];//常用服务数据
  @observable commentApp = [];//常用软件下载
  @observable serviceDoc = [];//服务文档数据
  @observable inductionDoc = [];//入职指引数据
  @observable internalSystem = [];//研发内部系统数据
  @observable news = [];//新闻公告数据
  @observable contactData = [];//联系人数据

  @observable printerModle = false;//打印机设置弹框可见性
  
   constructor(){
     this.handleData();
   }

   //首页数据
   @action.bound
   handleData = () => {
    Request.get('/fe/item/list').then((res) => {
      if (!res.status) {
       this.AllData = res.data;
       this.AllData.forEach((item)=>{
          switch(item.parentTitle) {
            case '常用服务': this.commentServices = item.message[0].content;
            break;
            case '常用软件下载': this.commentApp = item.message[0].content;
            break;
            case '入职指引': this.inductionDoc = item.message[0].content;
            break;
            case '服务文档': this.serviceDoc = item.message;
            break;
            case '新闻公告': this.news = item.message[0].content;
            break;
            case '研发内部系统': this.internalSystem = item.message;
            break;
            default : null;
          }
       })
      //  console.log(this.commentServices)
      }
    });
   }

   @computed get getCommentServices() {
    return toJS(this.commentServices);
  }
   @computed get getCommentApp() {
    return toJS(this.commentApp);
  }
   @computed get getInductionDoc() {
    return toJS(this.inductionDoc);
  }
   @computed get getServiceDoc() {
    return toJS(this.serviceDoc);
  }
   @computed get getContactData() {
    return toJS(this.contactData);
  }
   @computed get getNews() {
    return toJS(this.news);
  }
   @computed get getInternalSystem() {
    return toJS(this.internalSystem);
  }
  
}
const store = new HomeStore();
export default store;
