
import Request from 'BizUtils/Request/';
import Cookie from 'js-cookie';
import { rbacSource } from 'BizConfig/constant';

let arr = [];
const name = Cookie.get('user_name');
const userRole = {
  roleName: () => {
    Request.post('/rbac/internal/role/queryUserRoleWithOrg/v1', {
      data: {
        userCode: name,
        appSource: rbacSource,
      },
    }).then((res) => {
      arr = res.data.map(item => item.name);
      // debugger;
      console.log(arr);
      console.log(arr[0]);
    }).then(() => arr);
    return arr;
  },

};

export default userRole;
