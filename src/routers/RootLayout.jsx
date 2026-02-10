
import { Outlet } from "react-router-dom";
import { PortfolioProvider } from "../providers/PortfolioProvider";

export default function RootLayout() {
    return (
        <PortfolioProvider>
            <Outlet />
        </PortfolioProvider>
    );
}