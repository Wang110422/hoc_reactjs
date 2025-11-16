import { memo, useState } from "react";
import "./style.scss"
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {
    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Thit",
                    path: "",
                },
                {
                    name: "Rau",
                    path: "",
                },
                {
                    name: "Ca",
                    path: "",
                }
            ]
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.HOME,
        },

    ])
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>abc@gmail.com</li>
                                <li>Miễn phí ship</li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <ul>
                                <li>
                                    <Link>
                                        <BsFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <BsFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <BsFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <AiOutlineUser />
                                        <span>Đăng nhập</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <h1>Quang Trần</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {
                                    menus.map((menu, menusKey) => (
                                        <li key={menusKey} className={menusKey === 0 ? "active" : ""}>
                                            <Link to={menu.path}>{menu.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>12000</span>
                            </div>
                            <ul>
                                <li>
                                    <Link>
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Header);