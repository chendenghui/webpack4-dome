import qs from 'query-string';
import { urlPrefix } from 'BizConfig/constant';

export const parse = () => qs.parse(window.location.search) || {};

const clear = (v = '') => {
    // 去除尾部 /
  v = v.replace(/\/$/, '');
  // 确保头部 /
  if (!/^\//.test(v)) v = `/${v}`;

  return v;
};

export const stringify = (param, options) => {
  // 处理 stringify('/abc/def', { xxx: xxx }) 的情况
  if (typeof param === 'string') {
    const p = clear(param);
    const s = qs.stringify(options);
    const pre = s ? '?' : '';
    return `${urlPrefix}${p}${pre}${s}`;
  }

  const { pathname, search, hash } = param;
  const s = qs.stringify(search);
  const prefix = s ? '?' : '';

  const p = clear(pathname);
  const h = hash ? `#${clear(hash)}` : '';

  return `${urlPrefix}${p}${prefix}${s}${h}`;
};

// 过滤请求参数中无效字段
export const filterEmptyParam = (param, filter = ['']) => Object.keys(param).reduce((acc, key) => {
  const value = param[key];
  if (value !== undefined) {
    if (typeof filter === 'function') {
      if (filter(value, key)) {
        acc[key] = value;
      }
    } else {
      if ([].concat(filter).indexOf(value) === -1) {
        acc[key] = value;
      }
    }
  }
  return acc;
}, {});

export const genSearchUrl = (param) => {
  const query = qs.stringify(param);
  return query ? `?${query}` : '';
};

const checkIsObj = value => Object.prototype.toString.call(value) === '[object Object]';

export const trim = (data) => {
  let ret = data;
  if (typeof data === 'string') {
    ret = data.trim();
  } else if (checkIsObj(data)) {
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = trim(data[key]);
      return acc;
    }, {});
  } else if (Array.isArray(data)) {
    ret = data.map(item => trim(item));
  }
  return ret;
};
// 根据传入字段返回URl中，该字段再后面一位的参数
const urlArr = window.location.href.split('/');
export const paraStr = (param) => {
  let a = '';
  urlArr.forEach((item, index) => {
    if (item === param) {
      a = urlArr[index + 1];
    }
  });
  return Number(a);
};
export const reparam = (param, filter) =>
  (param !== undefined ? filterEmptyParam(trim(param), filter) : param);
