import { parentClass } from './SVGIcon.css';

type Props = {
  src: string;
};

export default function SVGIcon({ src }: Props) {
  return <img className={parentClass} src={src} />;
}
