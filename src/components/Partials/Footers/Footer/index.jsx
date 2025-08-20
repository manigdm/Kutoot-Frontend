import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const styles = {
    footerContainer: {
      backgroundColor: "#26201B",
      color: "#cfcfcf",
      fontFamily: "Poppins",
      padding: "60px 40px 30px",
      borderTopLeftRadius: "48px",
      borderTopRightRadius: "48px",
    },
    footerMain: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "40px",
      marginBottom: "30px",
    },
    footerColumn: {
      flex: 1,
      minWidth: "200px",
    },
    logoSection: {
      flexBasis: "25%",
    },
    footerLogo: {
      width: "300px",
      marginBottom: "20px",
    },
    storeButton: {
      background: "#5f5d5c",
      width: "fit-content",
      padding: "12px 16px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    },
    storeTextTop: {
      fontSize: "14px",
      letterSpacing: "0.6px",
      marginBottom: "4px",
      opacity: 0.7,
      color: "#fff",
      lineHeight: "100%",
    },
    storeTextBottom: {
      fontSize: "22px",
      lineHeight: "100%",
      color: "#fff",
    },
    appBadgesWrapper: {
      display: "flex",
      gap: "12px",
      marginTop: "12px",
    },
    linksTitle: {
      color: "#fff",
      fontSize: "1.1rem",
      fontWeight: 500,
      marginBottom: "16px",
      fontFamily: "Poppins",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    linkItem: {
      fontSize: "18px",
      lineHeight: "18px",
      fontWeight: 500,
      marginBottom: "16px",
      fontFamily: "Poppins",
    },
    link: {
      color: "#ABABAB",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    connectSectionP: {
      margin: "0 0 4px",
    },
    emailLink: {
      color: "#cfcfcf",
      display: "inline-block",
      marginBottom: "12px",
    },
    socialIcons: {
      display: "flex",
      gap: "14px",
      marginTop: "10px",
    },
    socialIcon: {
      width: "36px",
      height: "36px",
      backgroundColor: "#544e59",
      color: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.1rem",
      transition: "background-color 0.3s ease",
    },
    footerDivider: {
      border: "none",
      background: "url('/images/line-footer.png') center center no-repeat",
      backgroundSize: "contain",
      margin: "20px 0",
      opacity: 1,
    },
    footerBottom: {
      textAlign: "center",
      fontSize: "14px",
      fontWeight: 400,
      color: "#ABABAB",
      fontFamily: "Poppins",
    },
  };

  const handleDownloadClick = () => {
    console.log("Redirect to store...");
  };

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerMain}>
        {/* Logo Section */}
        <div style={{ ...styles.footerColumn, ...styles.logoSection }}>
          <img
            src="/images/logo-new.png"
            alt="Logo"
            style={styles.footerLogo}
          />
          <div style={styles.appBadgesWrapper}>
            <div style={styles.storeButton} onClick={handleDownloadClick}>
              <img src="/images/apple.png" alt="logo" width={32} height={32} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={styles.storeTextTop}>Download on the</p>
                <p style={styles.storeTextBottom}>App Store</p>
              </div>
            </div>
            <div style={styles.storeButton} onClick={handleDownloadClick}>
              <img
                src="/images/Playstore.png"
                alt="logo"
                width={32}
                height={32}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={styles.storeTextTop}>Android app on</p>
                <p style={styles.storeTextBottom}>Google Play</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kutoot Links Section */}
        <div style={styles.footerColumn}>
          <h3 style={styles.linksTitle}>Kutoot</h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <Link href="/about-us" style={styles.link}>
                About Us
              </Link>
            </li>
            <li style={styles.linkItem}>
              <Link href="/faq" style={styles.link}>
                FAQs
              </Link>
            </li>
            <li style={styles.linkItem}>
              <Link href="/career" style={styles.link}>
                Careers
              </Link>
            </li>
            <li style={styles.linkItem}>
              <Link href="/contact" style={styles.link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Policies Section */}
        <div style={styles.footerColumn}>
          <h3 style={styles.linksTitle}>Legal & Policies</h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <Link href="/" style={styles.link}>
                Terms & Conditions
              </Link>
            </li>
            <li style={styles.linkItem}>
              <Link href="/refund" style={styles.link}>
                Return & Refund
              </Link>
            </li>
            <li style={styles.linkItem}>
              <Link href="/privacy-policy" style={styles.link}>
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div style={styles.footerColumn}>
          <h3 style={styles.linksTitle}>Connect</h3>
          <p style={styles.connectSectionP}>Support@kutoot.com</p>
          <div style={styles.socialIcons}>
            <a
              href="https://wa.me/919380384568"
              style={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://x.com/kutootindia?s=21"
              style={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/kutoot_india/?igsh=dGNoa3F3bnJ3NGMz&utm_source=qr#"
              style={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/19gaKaJHi8/?mibextid=wwXIfr"
              style={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <img
        src="/images/line.png"
        alt="footer divider"
        style={styles.footerDivider}
      />

      {/* Bottom */}
      <div style={styles.footerBottom}>
        © {new Date().getFullYear()} All Rights Reserved by Kutoot
      </div>
    </footer>
  );
};

export default Footer;
