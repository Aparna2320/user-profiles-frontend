import React, { useState } from "react";
import { Headphones, Bell, User, Edit2, Copy } from "lucide-react";
import Header from "../components/Header";

function App() {
  const [activeTab, setActiveTab] = useState("basic");

  const user = {
    name: "Dave Richards",
    email: "dave@mail.com",
    phone: "+91 8332883854",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="relative bg-white rounded-2xl shadow-md p-8 mb-4 overflow-hidden">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-8">
  {/* Avatar with edit icon on Experience tab */}
  <div className="relative w-36 h-36 rounded-full bg-gray-400 flex items-center justify-center border-4 border-purple-400 shadow-lg">
  <User className="w-16 h-16 text-purple-600 z-10" />

  {activeTab === "experience" && (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
        <Edit2 className="w-6 h-6 text-purple-600" />
      </div>
    </div>
  )}
</div>




      {/* Info */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900">{user.name}</h2>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-gray-700">{user.email}</p>
          <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>
        <p className="text-gray-600 font-medium mt-1">{user.phone}</p>
      </div>
    </div>
  </div>

  {/* Decorative Background Arc */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 to-transparent rounded-r-2xl pointer-events-none"></div>
</div>

          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-8">
              <button
                onClick={() => setActiveTab("basic")}
                className={`py-4 text-sm font-medium relative ${
                  activeTab === "basic"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Basic info
                {activeTab === "basic" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
                )}
              </button>
              <button
  onClick={() => setActiveTab("education")}
  className={`py-4 text-sm font-medium relative flex items-center gap-1 ${
    activeTab === "education"
      ? "text-purple-600"
      : "text-gray-600 hover:text-gray-900"
  }`}
>
  Education & Skills
  <span className="absolute top-2 -right-3 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
  {activeTab === "education" && (
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
  )}
</button>

              <button
                onClick={() => setActiveTab("experience")}
                className={`py-4 text-sm font-medium relative ${
                  activeTab === "experience"
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Experience
                {activeTab === "experience" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
                )}
              </button>
            </div>
          </div>

          <div className="p-8">
            {activeTab === "basic" && (
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Basic Details
                  </h3>
                  <Edit2 className="w-4 h-4 text-purple-600 cursor-pointer" />
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John"
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Doe"
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Email ID
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. mrnobody@mail.com"
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Year of birth
                      </label>
                      <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>YYYY</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Gender
                      </label>
                      <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Select an option</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Phone number
                      </label>
                      <div className="flex gap-2">
                        <select className="px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option>🇮🇳</option>
                        </select>
                        <input
                          type="text"
                          defaultValue="8332883854"
                          className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm text-gray-600 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="Enter here"
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Alternate Phone no
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 9876543210"
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Pincode
                      </label>
                      <input
                        type="text"
                        placeholder="Enter here"
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Domicile state
                      </label>
                      <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Select an option</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Domicile country
                      </label>
                      <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Select an option</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Education Details
                    </h3>
                    <Edit2 className="w-4 h-4 text-purple-600 cursor-pointer" />
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">
                          School / College
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Lincoln College"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm text-gray-600 mb-2">
                          Highest degree or equivalent
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Bachelors in Technology"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">
                          Course
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Computer science engineering"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">
                          Year of completion
                        </label>
                        <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option>YYYY</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">
                          Grade
                        </label>
                        <input
                          type="text"
                          placeholder="Enter here"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Skills & Projects
                    </h3>
                    <Edit2 className="w-4 h-4 text-purple-600 cursor-pointer" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Skills
                      </label>
                      <textarea
                        placeholder="Enter here"
                        rows={4}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Projects
                      </label>
                      <textarea
                        placeholder="Enter here"
                        rows={4}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Work Experience
                    </h3>
                    <Edit2 className="w-4 h-4 text-purple-600 cursor-pointer" />
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">
                          Domain
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Technology"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">
                            Sub-domain
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. MERN Stack"
                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">
                            Experience
                          </label>
                          <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                            <option>Select an option</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">
                          Domain
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Technology"
                          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">
                            Sub-domain
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. MERN Stack"
                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">
                            Experience
                          </label>
                          <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                            <option>Select an option</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        LinkedIn
                      </h3>
                      <Edit2 className="w-4 h-4 text-purple-600 cursor-pointer" />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Profile URL
                      </label>
                      <input
                        type="text"
                        placeholder="linkedin.com/in/mrbean"
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Resume
                      </h3>
                      <Edit2 className="w-4 h-4 text-purple-600 cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          myresume.pdf
                        </p>
                      </div>
                      <button className="px-4 py-1.5 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
