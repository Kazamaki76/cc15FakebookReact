import defaultImage from '../assets/black.jpg';

export default function Avatar({ className = 'h-10', src }) {
  const defaultClass = 'rounded-full aspect-square';
  const classes = defaultClass + ' ' + className;

  return <img src={src || defaultImage } alt="user" className={classes} />;
}