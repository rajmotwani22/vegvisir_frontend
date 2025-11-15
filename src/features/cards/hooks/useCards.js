/**
=========================================================
* useCards Hook
=========================================================
* Custom hook for fetching and managing cards
*/

import { useState, useEffect } from "react";
import { cardAPI } from "../api";

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCards = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await cardAPI.getAll();

      console.log("Cards API Response:", response);
      console.log("Cards Data:", response.data);

      const cardsData = response.data || [];
      console.log("Setting cards:", cardsData);
      setCards(cardsData);
    } catch (err) {
      console.error("Error fetching cards:", err);
      console.error("Error response:", err.response);
      const errorMessage = err.response?.data?.message || err.message || "Failed to fetch cards";
      console.error("Error message:", errorMessage);
      setError(errorMessage);
      setCards([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const createCard = async (cardData) => {
    try {
      const response = await cardAPI.create(cardData);
      await fetchCards(); // Refresh the list
      return { success: true, data: response.data };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || "Failed to create card",
      };
    }
  };

  const updateCard = async (id, cardData) => {
    try {
      const response = await cardAPI.update(id, cardData);
      await fetchCards(); // Refresh the list
      return { success: true, data: response.data };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || "Failed to update card",
      };
    }
  };

  const deleteCard = async (id) => {
    try {
      // Delete endpoint returns 204 No Content (no response body)
      await cardAPI.delete(id);
      await fetchCards(); // Refresh the list
      return { success: true };
    } catch (err) {
      // Handle 204 as success (some axios versions might throw on 204)
      if (err.response?.status === 204) {
        await fetchCards();
        return { success: true };
      }
      return {
        success: false,
        error: err.response?.data?.message || err.message || "Failed to delete card",
      };
    }
  };

  return {
    cards,
    loading,
    error,
    refetch: fetchCards,
    createCard,
    updateCard,
    deleteCard,
  };
};
