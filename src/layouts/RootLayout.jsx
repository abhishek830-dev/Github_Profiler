import { Outlet } from "react-router-dom";
import { Header } from "./mainLayout";

const RootLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;