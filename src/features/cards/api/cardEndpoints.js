/**
=========================================================
* Cards API Endpoints
=========================================================
* API endpoints for card management
*/

import { apiClient } from "core/api";

export const cardAPI = {
  /**
   * Get all cards
   * @param {Object} params - { skip, limit }
   * @returns {Promise} Array of cards
   */
  getAll: (params = {}) => {
    return apiClient.get("/api/v1/cards/", { params });
  },

  /**
   * Get card by ID
   * @param {number} id - Card ID
   * @returns {Promise} Card object
   */
  getById: (id) => {
    return apiClient.get(`/api/v1/cards/${id}`);
  },

  /**
   * Create a new card
   * @param {Object} data - { card_number, cardholder_name, expiry_date, card_type, bank_name, is_default }
   * @returns {Promise} Created card
   */
  create: (data) => {
    return apiClient.post("/api/v1/cards/", data);
  },

  /**
   * Update card
   * @param {number} id - Card ID
   * @param {Object} data - Card data to update
   * @returns {Promise} Updated card
   */
  update: (id, data) => {
    return apiClient.put(`/api/v1/cards/${id}`, data);
  },

  /**
   * Delete card
   * @param {number} id - Card ID
   * @returns {Promise} Success (204 No Content)
   */
  delete: (id) => {
    return apiClient.delete(`/api/v1/cards/${id}`);
  },
};
