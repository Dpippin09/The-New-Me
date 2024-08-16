// Import social icons from react-social-icons.
import { SocialIcon } from "react-social-icons";
// Export the Footer component.
export default function Footer() {
  return (
    <footer id="footer">
      <div className="col col1">
        <div className="social">
          <SocialIcon url="https://github.com/Dpippin09" network="github" />
          <SocialIcon
            url="https://www.linkedin.com/in/david-pippin-7b0b3b1b9/"
            network="linkedin"
          />
          
        </div>
        <p>
          2024 © David Pippin
        </p>
      </div>
    </footer>
  );
}