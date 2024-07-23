import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="col col1">
        <div className="social">
          <SocialIcon url="" network="github" />
          <SocialIcon
            url="https://linkedin.com/in/"
            network="linkedin"
          />
          
        </div>
        
      </div>
    </footer>
  );
}