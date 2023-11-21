/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <div sx={{width: "25%", overflowX: "hidden"}}>
      <Link
        path="/"
        sx={{
          variant: "links.logo",
          display: "flex",
          cursor: "pointer",
          mr: 15,
        }}
        {...rest}
      >
        <Image sx={{ width: "40%", height: "30%"  }}  src={src} alt="RefusionAI landing logo" />
      </Link>
    </div>
  );
}
