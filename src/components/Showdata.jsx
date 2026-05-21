import React from "react";

function Showdata({users}){
    return (
        <div className="min-h-screen bg-slate-950 p-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        User List 
      </h1>

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300"
          >
            {/* Top */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                {user.name.charAt(0)}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  {user.name}
                </h2>

                <p className="text-sm text-gray-400">
                  @{user.username}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">
                📧 {user.email}
              </p>

              <p className="text-gray-300">
                📞 {user.phone}
              </p>

              <p className="text-cyan-400 font-medium">
                🏢 {user.company.name}
              </p>

              <p className="text-gray-400">
                📍 {user.address.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showdata;

    
