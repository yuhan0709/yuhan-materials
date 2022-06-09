import React from 'react';
import { Space, Typography } from '@arco-design/web-react';
import InputCode from 'arco-verify-code';

export default () => {
  return (
    <Space direction="vertical">
      <div>
        <Typography.Text bold>基础模式：</Typography.Text>
        <InputCode allowClear />
      </div>
      <div>
        <Typography.Text bold>密码模式：</Typography.Text>
        <InputCode password={{ showEyeIcon: true }} allowClear />
      </div>
    </Space>
  );
};
