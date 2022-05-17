import { BiCart } from "react-icons/bi";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { navlinks } from "../utils/constants";

const Navbar = () => {
    const router = useRouter();
    const path = router.pathname;
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link href="/">
                    <a className="text-lg-2x text--uppercase">
                        Rijks {path === "/shop" ? "Giftshop" : "museum"}
                    </a>
                </Link>
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
            <div className="navbar__buttons btn-group">
                <Link href={"/shop/cart"}>
                    <a className="btn btn--cart">
                        <BiCart className="btn__icon icon-cart" />
                        Cart (0)
                    </a>
                </Link>
                <Link href={"#login"}>
                    <a className="btn btn--user">
                        <AiOutlineUser className="btn__icon icon-user" />
                    </a>
                </Link>
                <button className="btn btn--menu">
                    <AiOutlineMenu className="btn__icon icon icon-menu" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
