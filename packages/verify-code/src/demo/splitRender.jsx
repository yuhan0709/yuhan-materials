import React from 'react';
import { Space } from '@arco-design/web-react';
import InputCode from 'arco-verify-code';
import { IconMinus } from '@arco-design/web-react/icon';

export default () => {
  return (
    <Space>
      <InputCode
        renderSplit={(index) => {
          if (index === 2) {
            return <IconMinus />;
          }
        }}
      />
    </Space>
  );
};
