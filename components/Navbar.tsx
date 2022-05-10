import { BiSearch, BiMenu } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h3 className="text-lg-2x text--uppercase">Rijks museum</h3>
      </div>
      <nav className="navbar__nav">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              Shop
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              Exhibitions
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="#" className="navbar__link">
              Contact
            </Link>
          </li>
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
