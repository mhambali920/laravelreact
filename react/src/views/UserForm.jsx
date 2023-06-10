import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axios-client";

export default function UserForm() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        id: null,
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [title, setTitle] = useState("");
    useEffect(() => {
        if (id) {
            setTitle(`Update user: ${user.name}`);
            setLoading(true);
            axiosClient
                .get(`/users/${id}`)
                .then(({ data }) => {
                    setUser(data.data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setTitle("New user");
        }
    }, []);

    return (
        <>
            <h1>{title}</h1>
        </>
    );
}
