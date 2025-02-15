import { socialLinks } from './data.js';
import PageLinks from './PageLinks.js';
import SocialLink from './SocialLink.js';

const Footer = () => {
  return (
    <footer className="section footer">
      {/* links */}
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      {/* icons */}
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
