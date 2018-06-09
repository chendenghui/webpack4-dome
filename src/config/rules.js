const validateEmpty = (rule, value, callback) => {
  if ((!value || value === '' || value === undefined || value === null)) { // 判断是否为空
    if (!rule.required) {  // 如果是空并且没有required 就校验通过
      callback();
      return true;
    }
    rule.message = rule.message;
    callback(rule.message);
    return true;
  }
  return false;
};

export const validateNum = (rule, value, callback, selfValidator) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (!(/^[0-9]*$/g).test(value)) { // 判断是否位数字
    rule.message = '请输入正整数数字！';
    callback('请输入数字！');
  } else if (rule.len && value.length !== rule.len) { // 判断数字长度
    rule.message = `请输入${rule.len}位的正整数！`;
    callback(`请输入${rule.len}位的数字！`);
  } else if (rule.max && value.length > rule.max) { // 判断最大长度
    rule.message = `请输入小于等于${rule.max}位的正整数！`;
    callback(`请输入${rule.max}位的数字！`);
  } else if (rule.min && value.length < rule.min) { // 判断最小长度
    rule.message = `请输入大于等于${rule.min}位的正整数！`;
    callback(`请输入${rule.min}位的正整数！`);
  } else if (rule.maxV && Number(value) > rule.max) { // 判断最大长度
    rule.message = `请输入小于等于${rule.max}的正整数！`;
    callback(`请输入${rule.max}位的数字！`);
  } else if (rule.minV && Number(value) < rule.min) { // 判断最小长度
    rule.message = `请输入大于等于${rule.min}的正整数！`;
    callback(`请输入${rule.min}位正整数！`);
  } else if (typeof selfValidator === 'function') {
    selfValidator();
  } else { // 验证通过
    callback();
  }
};

export const validatePhone = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (!(/^1[0-9]\d{9}$/g).test(value)) {
    rule.message = '请输入正确的电话号码！';
    callback('请输入正确的电话号码！');
  } else {
    callback();
  }
};

export const validateMoney = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if
  (!(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/).test(value)) {
    rule.message = '请输入正确格式的金钱数额！';
    callback('请输入正确格式的金钱数额！');
  } else {
    callback();
  }
};

export const validateEn = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (rule.max && /[a-zA-Z]$/g.test(value)) {  // 英文
    if (value.length <= rule.max) {
      callback();
    }
  } else {
    rule.message = `请输入${rule.max}位以下英文字母！`;
    callback(`请输入${rule.max}位以下英文字母！`);
  }
};

// export const validateDay = (rule, value, callback) => {
//   if (validateEmpty(rule, value, callback)) {
//     return;
//   } else if (/^\d{1,2}$/.test(value)) {  // 1-28 0为30号
//     if (value.length === 1 && /^[0-9]$/.test(value)) {
//       console.log(value[1]);
//       callback();
//     } else if (value[1] !== undefined && value.length) {
//       value[0] === 1 && /\d/.test(value[1]) ? callback() : callback('nimwei1');
//       value[0] === 2 && /^[0-8]$/.test(value[1]) ? callback() : callback('mimwei2');
//       console.log(`${value.length}jjjj`);
//       console.log(value[0]);
//       console.log(value[1]);
//     }
//     callback(value);
//   } else {
//     rule.message = '请输入日期！';
//     callback('请输入日期！');
//     console.log('错啦');
//   }
// };


export const validatePhoneFix = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (/^0\d{2,3}-?\d{7,8}$/g.test(value)) {  // 固定电话
    callback();
  } else {
    rule.message = '请按照规则输入固定电话01088888888,010-88888888,0955-7777777 ！';
    callback('请输入正确固定电话！');
  }
};
export const validateBankNum = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (/^(\d{16}|\d{19})$/g.test(value)) {  // 银行账号
    callback();
  } else {
    rule.message = '请输入银行账号 ！';
    callback('请输入银行账号');
  }
};

export const validateEmail = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g.test(value)) {  // 邮箱
    callback();
  } else {
    rule.message = '请输入邮箱 ！';
    callback('请输入邮箱');
  }
};

export const validateFax = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (/^(\d{3,4}-)?\d{7,8}$/g.test(value)) {  // 传真
    callback();
  } else {
    rule.message = '请输入传真 ！';
    callback('请输入传真');
  }
};


export const validateChinese = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (rule.max && /^[\u4e00-\u9fa5]{1,10}$/g.test(value)) {  // 10位 汉字
    if (value.replace(/[\u4e00-\u9fa5]/g, '01').length <= rule.max) {  // 最大长度  在ruls规定一下最大长度max:
      callback();
    } else {
      rule.message = `请输入${rule.max}位汉字！`;
      callback(`请输入${rule.max}位汉字！`);
    }
  } else {
    rule.message = `请输入${rule.max}位汉字！`;
    callback(`请输入${rule.max}位汉字！`);
  }
};

export const validateTest = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (rule.max && /^[\u4e00-\u9fa5a-zA-Z]+$/.test(value)) {  // 英文或者中文
    if (value.length && value.replace(/[\u4e00-\u9fa5]/g, '01').length <= rule.max) {  // 200个字符
      callback();
    } else {
      rule.message = `请输入${rule.max}位字符可以包括英文和汉字！`;
      callback(`请输入${rule.max}位字符可以包括英文和汉字！`);
    }
  } else {
    rule.message = `请输入${rule.max}位字符可以包括英文和汉字！`;
    callback(`请输入${rule.max}位字符可以包括英文和汉字！`);
  }
};


export const validateArea = (rule, value, callback) => {
  if (validateEmpty(rule, value, callback)) {
    return;
  } else if (value.length < 3) {
    rule.message = '请选择到区';
    callback('请选择到区');
  } else {
    callback();
  }
};

