import React from "react";
import Link from "next/link";
import { footer } from "../utils/constants";
import ReactHtmlParser from "react-html-parser";

const Footer = () => {
  return (
    <footer className="footer">
      {footer.map((footerSection) => {
        const { id, styleName, title, navlinks, body } = footerSection;
        return (
          <div key={id} className={`${styleName}`}>
            {title && <h3 className="footer__title ">{title}</h3>}
            <nav className="footer_nav">
              <ul className="footer__list">
                {body ? (
                  <li className="footer__item">{ReactHtmlParser(body)}</li>
                ) : (
                  <>
                    {navlinks?.map(
                      (
                        navlink: { name: any; path: any },
                        idx: React.Key | null | undefined
                      ) => {
                        const { name, path } = navlink;
                        return (
                          <li key={idx} className="footer__item">
                            <Link href={path} className="footer__link">
                              <a className="footer__link">{name}</a>
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </>
                )}
              </ul>
            </nav>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
