import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Modal,Form,Select,Icon,Button,Radio } from 'antd';

import store from '../store';
import storeS from './store';
import styles from '../index.css';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
@Form.create()
@observer
class DeviceModel extends Component {
    constructor() {
        super();
        this.state={
            officeNameAble:true,
            printerAble:true,
            downloadBtnAble:true,
            // officeNameValue:'',
            // printerValue:'',
            // cityNameValue:'',
            sysType: '0'
        }
    }
  handleSubmit = () => {
    this.props.form.validateFields((err, value) => {
    });
  }
  handleCancel=() => {
      store.printerModle = false;
  }
  //城市select获取值
  handleCitySelectChange=(e) => {
    if (e) {
        storeS.handleOfficeData(e.key);
        this.setState({
            officeNameAble:false,
            cityNameValue:e
        })
        this.props.form.setFieldsValue({
            cityCode: e
        })
    }else {
        this.setState({
            officeNameAble:true,
            printerAble:true
        })
        this.props.form.setFieldsValue({
            fileUrl: {key:'',label:''},
            officeName: '',
        })
    }
  }

  //办公区select获取值
  handleOfficeSelectChange=(e) => {
    if (e) {
        storeS.handlePrinterData(e);
        this.setState({
            printerAble:false,
            officeNameValue:e
        })
        this.props.form.setFieldsValue({
            officeName: e
        })
    }else {
        this.setState({
            printerAble:true
        })
        this.props.form.setFieldsValue({
            officeName: '',
            fileUrl: {key:'',label:''}
        })
    }
  }

  //打印机select获取值
  handlePrinterSelectChange=(e) => {

    if (e) {
        storeS.downloadUrl = e.key;
        this.setState({
            downloadBtnAble:false
        })
        this.props.form.setFieldsValue({
            fileUrl: e.key
        })
    }else {
        storeS.downloadUrl = '';
        this.setState({
            downloadBtnAble:true
        })
        this.props.form.setFieldsValue({
            fileUrl: ''
        })
    }
  }

  //下载文件
  handleDownload=()=>{
      window.location.href=storeS.downloadUrl;
  }
  //Mac系统
  handlePrinterMac=()=>{
      storeS.handlePrinterDoc('Mac');
  }
  //Windows系统
  handlePrinterWindows=()=>{
      storeS.handlePrinterDoc('windows');
  }

  //切换
  onChange = (e) => {
    const type = e.target.value;
    storeS.ModalKey = new Date();
    this.setState({
        sysType: type,
        officeNameAble:true,
        printerAble:true,
        downloadBtnAble:true
    })
    this.props.form.setFieldsValue({
        officeName: '',
        fileUrl: {key:'',label:''}
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { getAllCityData,getAllOfficeData,getAllPrinterData } = storeS;
    const formItemLayout = {
      labelCol: {
        xs: { span: 5 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 18 },
        sm: { span: 18 }
      }
    };
    const titleDom = <div className={styles.printerModleHeader}>
                        <div className={styles.contactInfoHeader}>
                            <span className={styles.icon} />
                            <span className={styles.iconText}>{'打印机设置'}</span>
                        </div>
                    </div>
    return (
      <Modal
        visible={store.printerModle}
        title= {titleDom}
        onOk={this.handleSubmit}
        width={485}
        onCancel={this.handleCancel}
        key={1}
        footer={''}
        bodyStyle={{paddingBottom:20}}
      >
        <div >
            <div style={{textAlign:'center',marginBottom:10}}>
                <RadioGroup onChange={this.onChange} defaultValue="0">
                    <RadioButton value="0">Windows</RadioButton>
                    <RadioButton value="1" style={{width:90}}>Mac</RadioButton>
                </RadioGroup>
            </div>
            { this.state.sysType ==='0'?
            <Form
                onSubmit={this.handleSubmit}
                style={{ maxWidth: 800 }}
             >
                <FormItem
                  {...formItemLayout}
                  label="选择城市"
                >
                  {getFieldDecorator('cityCode',{
                    rules:[{required:false,message:'请选择'}]
                  })(<Select className="w280" size="default"
                        allowClear
                        labelInValue
                        onChange={this.handleCitySelectChange}
                        placeholder='请选择'>
                      {
                        getAllCityData.map((item,index)=>
                          <Option value={String(item.cityCode)} key={index}>{item.cityName}</Option>
                        )
                      }
                  </Select>)}
                </FormItem>

                <FormItem
                  {...formItemLayout}
                  label="选择办公区"
                >
                  {getFieldDecorator('officeName',{
                    rules:[{required:false,message:'请选择'}]
                  })(<Select className="w280" size="default"
                        allowClear
                        onChange={this.handleOfficeSelectChange}
                        disabled={this.state.officeNameAble}
                        placeholder='请选择'>
                      {
                        getAllOfficeData.map((item,index)=>
                          <Option value={String(item)} key={index}>{item}</Option>
                        )
                      }
                  </Select>)}
                </FormItem>

                <FormItem
                  {...formItemLayout}
                  label="选择打印机"
                >
                  {getFieldDecorator('fileUrl',{
                    rules:[{required:false,message:'请选择'}]
                  })(<Select className="w280" size="default"
                        allowClear
                        labelInValue
                        onChange={this.handlePrinterSelectChange}
                        disabled={this.state.printerAble}
                        placeholder='请选择'>
                      {
                        getAllPrinterData.map((item,index)=>
                          <Option key={index} value={String(item.fileUrl)}>{item.officePlace}</Option>
                        )
                      }
                  </Select>)}
                </FormItem>

                <div className={styles.printerButtonWrap} style={{textAlign:'center'}}>
                <div style={{display:'inline-block'}}>
                    <Button className={styles.printerButton} type='primary' disabled={this.state.downloadBtnAble} onClick={this.handleDownload}>
                        <Icon type='download' style={{color:'#fff'}}/><span style={{fontWeight:100}}>下载安装文件</span>
                    </Button>
                    <p style={{fontSize:12,color:'#999',textAlign:'left',paddingTop:10}}>下载配置文件后，双击运行该文件即可(仅支持Windows)</p>
                    <Button className={styles.printerButton} type='primary' onClick={this.handlePrinterWindows}>
                        <Icon type='download' style={{color:'#fff'}}/><span style={{fontWeight:100}}>安装方法文档</span>
                    </Button>
                  </div>
                </div>
            </Form>
            :
            <div style={{textAlign:'center'}}>
                <Button className={styles.printerButton} type='primary' onClick={this.handlePrinterMac}>
                    <Icon type='download' style={{color:'#fff'}}/><span style={{fontWeight:100}}>安装方法文档</span>
                </Button>
            </div>
            }
        </div>
      </Modal>
    );
  }
  }

export default DeviceModel;
