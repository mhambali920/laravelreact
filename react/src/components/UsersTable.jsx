/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function UsersTable({ users, onDelete }) {
    return (
        <table className="min-w-full leading-normal">
            <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-indigo-700 bg-indigo-600 text-white text-left text-xs font-semibold uppercase tracking-wider">
                        ID
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-700 bg-indigo-600 text-white text-left text-xs font-semibold uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-700 bg-indigo-600 text-white text-left text-xs font-semibold uppercase tracking-wider">
                        Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-700 bg-indigo-600 text-white text-left text-xs font-semibold uppercase tracking-wider">
                        Created at
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-700 bg-indigo-600 text-white text-left text-xs font-semibold uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {user.id}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {user.name}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {user.email}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {user.created_at}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="text-indigo-600">
                                <Link to={"/users/" + user.id}>edit</Link>
                            </span>{" "}
                            <span className="text-red-600">
                                <button onClick={() => onDelete(user.id)}>
                                    delete
                                </button>
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
