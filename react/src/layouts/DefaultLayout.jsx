import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/StateContex";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import axiosClient from "../axios-client";

export default function DefaultLayout() {
    const { token, setUser } = useStateContext();
    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);
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
