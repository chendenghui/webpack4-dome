import Request from 'BizUtils/Request';
import { observable, action, toJS, computed } from 'mobx';

class Store {
  @observable allCityData = [];//城市数据
  @observable allOfficeData = [];//办公地点数据
  @observable allPrinterData = [];//打印机数据
  @observable currentCityCode = '';//当前城市Code
  @observable currentOfficeName = '';//当前办公区名字
  @observable currentPrinter = '';//当前打印机信息
  @observable downloadUrl = '';//文件下载链接
  @observable ModalKey = '';//模态框key
  
   constructor(){
     this.handleCityData();//请求城市信息
   }

   //城市数据
   @action.bound
   handleCityData = () => {
    Request.get('/fe/city/list').then((res) => {
      if (!res.status) {
       this.allCityData = res.data.cityList;
      }
    });
   }

   //办公区数据
   @action.bound
   handleOfficeData = (e) => {
     this.currentCityCode = Number(e);
    Request.post('/fe/item/office/name',{
      data:{cityCode:Number(e)}
    }).then((res) => {
      if (!res.status) {
       this.allOfficeData = res.data.officeName;
      }
    });
   }

   //打印机数据
   @action.bound
   handlePrinterData = (e) => {
    this.currentOfficeName = e;
    Request.post('/fe/item/office/info',{
      data:{
        cityCode:this.currentCityCode,
        officeName:this.currentOfficeName
      }
    }).then((res) => {
      if (!res.status) {
       this.allPrinterData = res.data.data;
      }
    });
   }

   //mac.Windows系统打印机数据
   @action.bound
   handlePrinterDoc=(e) => {
   const value = (e === 'Mac' ? 'MAC打印机配置' : 'WINDOWS打印机配置');
   console.log(value)
    Request.post('/fe/item/list/info',{
      data:{
        itemName : value
      }
    }).then((res) => {
      if (!res.status) {
        window.location.href=res.data.itemList[0].fileUrl;
      }
    });
   }

   @computed get getAllCityData() {
    return toJS(this.allCityData);
  }
   @computed get getAllOfficeData() {
    return toJS(this.allOfficeData);
  }
   @computed get getAllPrinterData() {
    return toJS(this.allPrinterData);
  }
  
}
const store = new Store();
export default store;
