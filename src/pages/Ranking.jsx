import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Ranking = () => {
  const [rankingData, setRankingData] = useState([]);
  const token = useSelector(store => store.AuthReducer.token);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await axios.get('https://battleshipgame-6yqq.onrender.com/api/ranking', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setRankingData(response.data);
      } catch (error) {
        console.error('Error fetching ranking:', error);
        // Manejar errores aquí según tu requerimiento (mostrar mensaje de error, etc.)
      }
    };

    fetchRanking();
  }, [token]);

  return (
    <div className="bg-[url('./ranking.webp')] bg-cover min-h-screen">
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
                {rankingData.map((user, index) => (
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
