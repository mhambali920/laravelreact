import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import UsersTable from "../components/UsersTable";
import Pagination from "../components/Pagination";

export default function Users() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [links, setlinks] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        setLoading(true);
        axiosClient
            .get("/users")
            .then(({ data }) => {
                console.log(data);
                setLoading(false);
                setUsers(data.data);
                setlinks(data.meta.links);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const handleDelete = (id) => {
        if (!window.confirm("Are you sure to delete this user?")) {
            return;
        }
        axiosClient.delete(`/users/${id}`).then(() => {
            getUsers();
        });
    };
    return (
        <div>
            <div>
                <h2 className="text-2xl font-semibold leading-tight">Users</h2>
            </div>
            <div className="flex items-center justify-between">
                <div className="my-2 flex sm:flex-row flex-col">
                    <div className="flex flex-row mb-1 sm:mb-0">
                        <div className="relative">
                            <select className="h-full rounded-l border block appearance-none w-full bg-white border-indigo-600 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                        </div>
                        <div className="relative">
                            <select className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0  border-b block appearance-none w-full bg-white border-indigo-600 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                        </div>
                    </div>
                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4 fill-current text-gray-500"
                            >
                                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                            </svg>
                        </span>
                        <input
                            placeholder="Search"
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-indigo-600 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                        />
                    </div>
                </div>
                <Link
                    to="/users/new"
                    className="text-white bg-indigo-600 px-4 py-2 rounded-md text-sm font-semibold"
                >
                    Add New User
                </Link>
            </div>
            {loading && (
                <div className="w-full mx-auto mt-10">
                    <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!loading && (
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <UsersTable users={users} onDelete={handleDelete} />
                        {/* <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div> */}
                        <Pagination links={links} />
                    </div>
                </div>
            )}
        </div>
    );
}
