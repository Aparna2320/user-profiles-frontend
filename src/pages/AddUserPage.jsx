import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddUserPage() {
  const navigate = useNavigate();

  // ✅ Load existing users (if any) from localStorage
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [
    { name: "Dave Richards", email: "dave@mail.com" },
    { name: "Abhishek Hari", email: "hari@mail.com" },
    { name: "Nishta Gupta", email: "nishta@mail.com" },
  ];

  const [users, setUsers] = useState(existingUsers);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [newUser, setNewUser] = useState({ name: "", email: "", contact: "" });

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewUser((prev) => ({ ...prev, [id]: value }));
  };

  // ✅ Add user
  const handleAddUser = (e) => {
    e.preventDefault();

    if (!newUser.name || !newUser.email) {
      alert("Please fill in all required fields");
      return;
    }

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // ✅ Close modal and go back to Users page
    setIsModalOpen(false);
    navigate("/");
  };

  // ✅ Cancel: close modal and return to Users page
  const handleCancel = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-10 py-4 flex justify-between items-center shadow-sm">
        <div className="flex flex-col items-start">
          <div className="border-2 border-black px-8 py-2 bg-white">
            <h1 className="text-2xl font-bold tracking-tight">LOGO</h1>
          </div>
          <p className="text-[9px] text-gray-800 mt-1 font-semibold tracking-widest">
            ESTD 2025
          </p>
        </div>
      </div>

      {/* User List (background dimmed by modal) */}
      <main className={`flex-1 px-10 py-8 ${isModalOpen ? "opacity-50" : ""}`}>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Sr. No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  User Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  E-mail
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Right-Side Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white h-full w-1/2 shadow-lg flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Add User</h2>
              <button
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddUser} className="flex-1 p-6 space-y-6 overflow-y-auto">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name of the user
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Type here"
                  value={newUser.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Type here"
                    value={newUser.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contact
                  </label>
                  <input
                    id="contact"
                    type="text"
                    placeholder="Type here"
                    value={newUser.contact}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none"
                  />
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="flex justify-end space-x-3 p-4 border-t border-gray-200">
              <button
                onClick={handleCancel}
                className="px-5 py-2 text-sm font-medium text-purple-600 bg-purple-100 rounded-md hover:bg-purple-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleAddUser}
                className="px-5 py-2 text-sm font-medium bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
