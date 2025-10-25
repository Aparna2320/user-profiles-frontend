export default function ViewUserModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">👤 User Details</h2>

        <div className="space-y-3">
          <p><span className="font-medium text-gray-700">Name:</span> {user.name}</p>
          <p><span className="font-medium text-gray-700">Email:</span> {user.email}</p>
          <p><span className="font-medium text-gray-700">Role:</span> {user.role}</p>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
