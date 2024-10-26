// src/components/FooterSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

const FooterSection: React.FC = () => (
  <footer className={clsx('footer', styles.footer)}>
    <div className="container">
      <div className={clsx('row', styles.footerContent)}>
        <div className={clsx('col col--6', styles.footerLinks)}>
          <Link className="footer__link-item" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="footer__link-item" to="/terms-of-service">
            Terms of Service
          </Link>
        </div>
        <div className={clsx('col col--6', styles.footerContact)}>
          <p className="footer__contact-info">
            Email: <a href="mailto:info@clearlinc.io">info@clearlinc.io</a> |
            Phone: +1 (123) 456-7890
          </p>
          <Link className="footer__link-item" to="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
