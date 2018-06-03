// 分页设置
export default {
  showTotal: total => `共 ${total} 条`,
  pageSizeOptions: ['10', '20', '50', '100'],
  showSizeChanger: true,
  showQuickJumper: true,
};

export const appSource = 'cmdb';
export const rbacSource = 'assets_integration';
export const urlPrefix = '/cmdb/web';

