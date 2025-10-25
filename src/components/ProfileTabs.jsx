export default function ProfileTabs() {
  return (
    <div className="flex gap-4 border-b mb-4">
      <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
        Overview
      </button>
      <button className="pb-2 text-gray-600 hover:text-blue-600">
        Activity
      </button>
      <button className="pb-2 text-gray-600 hover:text-blue-600">
        Headphones
      </button>
    </div>
  );
}
