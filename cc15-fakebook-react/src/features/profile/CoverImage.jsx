import defaultImage from "../../assets/black.jpg";

export default function CoverImage({ src = defaultImage }) {
  console.log(src);
  return <img src={src || defaultImage} alt="cover" />;
}
