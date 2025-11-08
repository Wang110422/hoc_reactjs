import { memo } from "react";
import Header from "../header";
import Footer from "../footer";

const MasterLayout = ({ children, ...props }) => {
    // children là 1 props nhưng trong trường hợp này chỉ định là 1 component
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);