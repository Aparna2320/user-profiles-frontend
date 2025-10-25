import React, { useState } from "react";
import { Eye, Trash2, Bell, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function UsersPage() {
  const navigate = useNavigate();

  const [users] = useState([
    { id: 1, name: "Dave Richards", email: "dave@mail.com", contact: "+91 8332883854" },
    { id: 2, name: "Abhishek Hari", email: "hari@mail.com", contact: "+91 9123456789" },
    { id: 3, name: "Nishta Gupta", email: "nishta@mail.com", contact: "+91 9988776655" },
  ]);

  const handleViewProfile = (user) => {
    localStorage.setItem("selectedUser", JSON.stringify(user));
    navigate(`/profile/${user.id}`);
  };

  const handleDelete = (user) => {
    console.log("Delete user:", user.name);
  };

  const handleAddUser = () => {
    navigate("/add-user");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="p-6">
        <div className="bg-white rounded-lg border border-gray-200">
          {/* Title and Button Section */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900">Users</h1>
            <button
              onClick={handleAddUser}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              <span>+ Add user</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Sr. No
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    User name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    E-mail
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleViewProfile(user)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="View profile"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(user)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          title="Delete user"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

