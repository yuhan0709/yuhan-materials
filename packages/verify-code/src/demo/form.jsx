import React from 'react';
import { Button, Form, Input } from '@arco-design/web-react';
import InputCode from 'arco-verify-code';

export default () => {
  const [formRef] = Form.useForm();

  const onSubmit = () => {
    formRef.validate((errors, value) => {
      console.log(errors, value);
    });
  };

  return (
    <Form style={{ width: '500px' }} form={formRef}>
      <Form.Item label="手机号" field="phone" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item shouldUpdate noStyle>
        {(values) => (
          <Form.Item
            label="验证码"
            field="verifyCode"
            disabled={!values.phone}
            validateTrigger="onComplete"
            required
            rules={[
              {
                validator: (value, cb) => {
                  if ((value || []).join('').split('').length < 6) {
                    cb('验证码错误！');
                  }
                },
              },
            ]}
          >
            <InputCode allowClear />
          </Form.Item>
        )}
      </Form.Item>

      <Form.Item label=" ">
        <Button onClick={onSubmit} type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
