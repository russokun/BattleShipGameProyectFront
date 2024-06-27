import React from 'react';

export const Ranking = () => {
  // Datos harcodeados de ejemplo (nombre de usuario y puntajes)
  const users = [
    { id: 1, username: 'Usuario1', score: 150 },
    { id: 2, username: 'Usuario2', score: 140 },
    { id: 3, username: 'Usuario3', score: 130 },
    { id: 4, username: 'Usuario4', score: 120 },
    { id: 5, username: 'Usuario5', score: 110 },
    { id: 6, username: 'Usuario6', score: 100 },
    { id: 7, username: 'Usuario7', score: 90 },
    { id: 8, username: 'Usuario8', score: 80 },
    { id: 9, username: 'Usuario9', score: 70 },
    { id: 10, username: 'Usuario10', score: 60 }
  ];

  return (
    <div className="bg-[url('./assets/images/background.jpg')] bg-cover min-h-screen">
      <section className="container mx-auto pt-8 sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h1 className="text-3xl font-semibold text-center text-white mb-4 pt-4 italic">Top 10 Battleships</h1>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Score</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-500">
                {users.map((user, index) => (
                  <tr key={user.id} className={`${index % 2 === 0 ? 'bg-gray-300' : 'bg-white'} transition-transform duration-300 ease-in-out transform hover:scale-105`}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
