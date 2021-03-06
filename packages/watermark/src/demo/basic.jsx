import React from 'react';
import WaterMarket from 'arco-pro-watermark';
import { Typography } from '@arco-design/web-react';

const { Title, Paragraph } = Typography;

const node = (
  <div style={{ height: '400px' }}>
    <Title heading={2}>Default</Title>
    <Paragraph>
      A design is a plan or specification for the construction of an object or system or for the
      implementation of an activity or process, or the result of that plan or specification in the
      form of a prototype, product or process. The verb to design expresses the process of
      developing a design. In some cases, the direct construction of an object without an explicit
      prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be
      considered to be a design activity.
    </Paragraph>
    <Title heading={2}>Secondary</Title>
    <Paragraph>
      A design is a plan or specification for the construction of an object or system or for the
      implementation of an activity or process, or the result of that plan or specification in the
      form of a prototype, product or process. The verb to design expresses the process of
      developing a design. In some cases, the direct construction of an object without an explicit
      prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be
      considered to be a design activity.
    </Paragraph>
    <Title heading={2}>Spacing default</Title>
    <Paragraph>
      A design is a plan or specification for the construction of an object or system or for the
      implementation of an activity or process, or the result of that plan or specification in the
      form of a prototype, product or process. The verb to design expresses the process of
      developing a design. In some cases, the direct construction of an object without an explicit
      prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be
      considered to be a design activity.
    </Paragraph>
  </div>
);

export default () => {
  return (
    <div>
      <WaterMarket
        content="????????????????????????"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.15)' }}
      >
        {node}
      </WaterMarket>
      <WaterMarket
        image="https://raw.githubusercontent.com/yuhan0709/blog/7fede48cd490d27e857b00f94584c10083cc7370/src/assets/watermark.svg"
        width={115}
        height={18}
      >
        {node}
      </WaterMarket>
    </div>
  );
};
