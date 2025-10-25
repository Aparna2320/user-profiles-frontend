import { Eye, Trash2 } from "lucide-react"

export default function UserTable({ users, onView, onDelete }) {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Sr. No</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">User name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">E-mail</th>
            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-6 py-3 text-sm text-gray-900">{index + 1}</td>
              <td className="px-6 py-3 text-sm text-gray-900">{user.name}</td>
              <td className="px-6 py-3 text-sm text-gray-600">{user.email}</td>
              <td className="px-6 py-3 text-right">
                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => onView(user)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    title="View profile"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(user)}
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
  )
}
