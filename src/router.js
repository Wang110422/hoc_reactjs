import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import Profile from "./pages/users/profile";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";


const renderUserRouter = () => {
    const userRouters = [{
        path: ROUTERS.USER.HOME,
        component: <HomePage />
    },
    {
        path: ROUTERS.USER.PROFILE,
        component: <Profile />
    }
    ]
    return (
        <MasterLayout>{
            /* //Khi khởi chạy thì các Route sẽ được gắn vào children */}
            <Routes>
                {
                    userRouters.map(
                        (item, index) => {
                            return <Route key={index} path={item.path} element={item.component} />
                        }
                    )
                }
            </Routes>
        </MasterLayout>

    )
}
const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;