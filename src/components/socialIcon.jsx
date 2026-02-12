import { SocialIcon } from "react-social-icons";

function SocialMediaIcon({ url, itsDark }) {
  return (
    <SocialIcon
      url={url}
      target="_blank"
      rel="noopener noreferrer"
      fgColor={itsDark ? "black" : "white"}
      bgColor={itsDark ? "white" : "black"}
      className="icon-motion"
      style={{ height: 45, width: 45 }}
    />
  );
}

export default SocialMediaIcon;
