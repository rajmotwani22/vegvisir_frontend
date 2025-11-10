/**
=========================================================
* useChatBot Hook
=========================================================
* Custom hook for managing chat conversation with LLM
* Uses ChatBotContext to persist state across route changes
*/

import { useChatBotContext } from "../context";

export const useChatBot = () => {
  return useChatBotContext();
};
