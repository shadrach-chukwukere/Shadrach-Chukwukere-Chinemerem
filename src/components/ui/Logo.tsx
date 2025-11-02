import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import image from "../../assets/logo.webp";
export default function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 flex-nowrap">
        <LazyLoadImage
          effect="blur"
          src={image}
          className="w-12 min-w-12"
          alt="logo"
        />
      </div>
    </Link>
  );
}
