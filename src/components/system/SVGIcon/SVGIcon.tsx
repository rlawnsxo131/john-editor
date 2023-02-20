import type { ImgHTMLAttributes } from 'react';

import { img } from './SVGIcon.css';

type Props = {
  src: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function SVGIcon({ src, ...props }: Props) {
  return <img className={img} src={src} {...props} />;
}
