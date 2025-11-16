/**
=========================================================
* useRewards Hook
=========================================================
* Custom hook for fetching rewards data
*/

import { useState, useEffect, useCallback } from "react";
import { rewardAPI } from "../api";

export const useRewards = (includeExpired = false) => {
  const [rewards, setRewards] = useState([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBalance = useCallback(async () => {
    try {
      setError(null);
      const response = await rewardAPI.getBalance();
      setBalance(response.data?.balance || 0);
      return response.data;
    } catch (err) {
      console.error("Error fetching rewards balance:", err);
      const errorMessage =
        err.response?.data?.message || err.message || "Failed to fetch rewards balance";
      setError(errorMessage);
      setBalance(0);
      throw err;
    }
  }, []);

  const fetchRewards = useCallback(
    async (filters = {}) => {
      try {
        setLoading(true);
        setError(null);

        const params = {
          skip: filters.skip || 0,
          limit: filters.limit || 100,
          include_expired: includeExpired,
          ...(filters.include_expired !== undefined && {
            include_expired: filters.include_expired,
          }),
        };

        const response = await rewardAPI.getAll(params);
        setRewards(response.data || []);
      } catch (err) {
        console.error("Error fetching rewards:", err);
        const errorMessage =
          err.response?.data?.message || err.message || "Failed to fetch rewards";
        setError(errorMessage);
        setRewards([]);
      } finally {
        setLoading(false);
      }
    },
    [includeExpired]
  );

  useEffect(() => {
    fetchBalance();
    fetchRewards();
  }, [fetchBalance, fetchRewards]);

  return {
    rewards,
    balance,
    loading,
    error,
    refetchBalance: fetchBalance,
    refetchRewards: fetchRewards,
  };
};
