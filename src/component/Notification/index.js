/*
* 基于ant的notification
* 增加了 placement 为 top 的情况
* demo:utils里的request
*/
import React from 'react';
import Notification from 'rc-notification';
import { Alert } from 'antd';

const prefixCls = 'bach-ant-notification';
const messageMap = {
  info: '帮助信息',
  success: '已成功！',
  error: '出错了！',
  warning: '请注意！',
};
let notificationInstance;

function getNotificationInstance() {
  if (notificationInstance) {
    return notificationInstance;
  }
  notificationInstance = Notification.newInstance({
    transitionName: 'move-up',
    prefixCls,
    className: `${prefixCls}-topRight`,
    style: {
      left: '50%',
      top: 0,
      bottom: 'auto',
      wordBreak: 'break-word',
    },
  });
  return notificationInstance;
}

function notice(type, content, duration = null, config = {}) {
  getNotificationInstance().notice({
    content: (
      <Alert message={messageMap[type]} description={content} type={type} showIcon />
    ),
    duration,
    onClose: config.onClose || null,
    closable: config.closable || true,
    key: config.key,
  });
}

export default {
  info(content, duration, config) {
    notice('info', content, duration, config);
  },
  success(content, duration, config) {
    notice('success', content, duration, config);
  },
  error(content, duration, config) {
    notice('error', content, duration, config);
  },
  warning(content, duration, config) {
    notice('warning', content, duration, config);
  },
};
