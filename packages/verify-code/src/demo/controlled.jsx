import React, { useState } from 'react';
import { Space, Button } from '@arco-design/web-react';
import InputCode from 'arco-verify-code';

export default () => {
  const [value, setValue] = useState(['0']);
  const codeLength = 8;

  const inputCode = () => {
    setValue((value) => {
      const filteredValue = value.join('').split('');
      if (filteredValue.length < codeLength) {
        return [...filteredValue, filteredValue.length];
      }
      return value;
    });
  };

  return (
    <Space direction="vertical">
      <div>
        <InputCode value={value} onChange={setValue} length={codeLength} allowClear />
      </div>
      <Button type="primary" onClick={inputCode}>
        填入验证码
      </Button>
    </Space>
  );
};
