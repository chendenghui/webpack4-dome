// 分页设置
export default {
  showTotal: total => `共 ${total} 条`,
  pageSizeOptions: ['10', '20', '50'],
  showSizeChanger: true,
  showQuickJumper: true
};

export const appSource = 'portal';
export const rbacSource = 'home_integration';
export const urlPrefix = '/web';
