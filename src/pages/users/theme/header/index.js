import { memo } from "react";
import "./style.scss"
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
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
    );
}

export default memo(Header);