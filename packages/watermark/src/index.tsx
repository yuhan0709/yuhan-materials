import React, { CSSProperties, PropsWithChildren, ReactNode } from 'react';

/**
 * @title WaterMark
 */
export interface WaterMarkProps {
  /**
   * @zh 水印旋转角度
   * @defaultValue
   */
  rotate?: number;
  /**
   * @zh 水印图片源，优先级比文字内容高
   * @defaultValue
   */
  image?: string;
  /**
   * @zh 水印的内容内容，设置为 `ReactNode` 会使用dom进行水印内容渲染，可能会影响性能
   * @defaultValue ``
   */
  content?: string | React.ReactNode;
  /**
   * @zh 水印文字颜色
   * @defaultValue ``
   */
  fontColor?: string;
  /**
   * @zh 水印文字大小
   * @defaultValue ``
   */
  fontSize?: number;
  /**
   * @zh 水印之间的间距，
   * @defaultValue {x: 200, y: 200}
   */
  gaps: {
    x?: number;
    y?: number;
  };
  /**
   * @zh 水印的偏移亮
   * @defaultValue {x: `gaps.x / 2`, `gaps.y / 2` }
   */
  offsets: {
    x?: number;
    y?: number;
  };
  /**
   * @zh 水印层样式
   * @defaultValue ``
   */
  style?: CSSProperties;

  /**
   * @zh 水印层样式类名
   * @defaultValue ``
   */
  className?: string;
}

const WaterMark = (props: PropsWithChildren<WaterMarkProps>) => {
  const { content, image, rotate = 22, fontColor, fontSize, offset, gaps } = props;
};

export default TooltipButton;
