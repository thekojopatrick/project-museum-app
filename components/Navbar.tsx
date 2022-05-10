import { BiSearch, BiMenu } from "react-icons/bi";
import Link from "next/link";
import { navlinks } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h3 className="text-lg-2x text--uppercase">Rijks museum</h3>
      </div>
      <nav className="navbar__nav">
        <ul className="navbar__list">
          {navlinks.map(({ id, name, path }) => {
            return (
              <li key={id} className="navbar__item">
                <Link href={path}>
                  <a className="navbar__link">{name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="navbar__buttons">
        <a className="btn btn--search">
          <BiSearch className="btn__icon icon-search" />
        </a>
        <a className="btn btn--menu">
          <BiMenu className="btn__icon icon-menu" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
