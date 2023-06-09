import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/StateContex";
import NavBar from "../components/NavBar";

export default function DefaultLayout() {
    const { token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }
    return (
        <>
            <NavBar />
            <div className="mx-auto max-w-7xl p-6 lg:px-8">
                <Outlet />
            </div>
        </>
    );
}
