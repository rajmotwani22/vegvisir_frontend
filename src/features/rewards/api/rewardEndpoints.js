/**
=========================================================
* Rewards API Endpoints
=========================================================
* API endpoints for rewards management
*/

import { apiClient } from "core/api";

export const rewardAPI = {
  /**
   * Get rewards balance
   * @returns {Promise} { balance, currency }
   */
  getBalance: () => {
    return apiClient.get("/api/v1/rewards/balance");
  },

  /**
   * Get all rewards
   * @param {Object} params - { skip, limit, include_expired }
   * @returns {Promise} Array of rewards
   */
  getAll: (params = {}) => {
    return apiClient.get("/api/v1/rewards/", { params });
  },

  /**
   * Get reward by ID
   * @param {number} id - Reward ID
   * @returns {Promise} Reward object
   */
  getById: (id) => {
    return apiClient.get(`/api/v1/rewards/${id}`);
  },
};
