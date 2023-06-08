import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/StateContex";

export default function GuestLayout() {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/dashboard" />;
    }
    // debugger;
    return (
        <>
            <Outlet />
        </>
    );
}
