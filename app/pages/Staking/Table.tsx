"use client";

import { useState } from "react";
import { stakingData } from "@/app/data/stakingData";

export default function StakingTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(stakingData.length / itemsPerPage);
  const currentData = stakingData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="w-full mt-6 sm:mt-10 mx-auto bg-black/20 shadow-lg shadow-blue-500/50 p-3 sm:p-5 rounded-2xl">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3">Your Activity</h2>

      <div className="flex gap-4 text-sm sm:text-base">
        <span className="text-green-500 cursor-pointer">Active Stakes</span>
        <span className="text-gray-400 cursor-pointer">History</span>
      </div>

      {/* Таблица */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full min-w-[640px] rounded-2xl text-white">
          <thead className="rounded-2xl">
            <tr className="bg-[#2E727A] text-left">
              <th className="p-2 sm:p-3 rounded-tl-3xl text-xs sm:text-sm">Staked Amount</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">APY</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Total Time Left</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Current Rewards</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Claimable Rewards</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Total BCE</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm">Next Claimable</th>
              <th className="p-2 sm:p-3 last:rounded-tr-3xl text-xs sm:text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b border-gray-700 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                }`}
              >                
                <td className="p-2 sm:p-3 text-xs sm:text-sm">{item.stakedAmount}</td>
                <td className="p-2 sm:p-3 text-xs sm:text-sm">{item.apy}</td>
                <td className="p-2 sm:p-3 text-xs sm:text-sm">{item.timeLeft}</td>
                <td className="p-2 sm:p-3 text-xs sm:text-sm">{item.currentRewards}</td>
                <td className="p-2 sm:p-3 text-xs sm:text-sm">{item.claimableRewards}</td>
                <td className="p-2 sm:p-3 text-xs sm:text-sm">{item.totalToon}</td>
                <td className="p-2 sm:p-3 text-xs sm:text-sm">{item.nextClaimable}</td>
                <td className="p-2 sm:p-3">
                  <button className="border border-green-500 text-green-500 px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-green-500 hover:text-black transition text-xs sm:text-sm">
                    Claim
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Пагинация */}
      <div className="flex justify-between items-center mt-4 text-white text-sm sm:text-base">
        <button
          className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-600 rounded-lg disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ← Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-600 rounded-lg disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
