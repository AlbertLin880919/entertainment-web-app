import { create } from "zustand";

export const useSearchStore = create((set) => ({
    searchQuery: "",
    setSearchQuery: (query) => set(() => ({ searchQuery: query })),
}));

export const useCategoryStore = create((set) => ({
    category: "home",
    setCategory: (category) => set(() => ({ category })),
}));
