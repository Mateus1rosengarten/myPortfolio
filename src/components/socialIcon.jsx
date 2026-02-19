import { SocialIcon } from "react-social-icons";

function SocialMediaIcon({ url }) {
  return (
    <SocialIcon
      url={url}
      target="_blank"
      rel="noopener noreferrer"
      className="color-brand"
      bgColor="#ff7a00"
      style={{ height: 45, width: 45 }}
    />
  );
}

export default SocialMediaIcon;
