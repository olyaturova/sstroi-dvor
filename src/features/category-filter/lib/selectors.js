export const selectSelectedCategory = (state) => 
    state.categoryFilter?.selectedCategory || "Все категории";

export const selectIsCategoryActive = (state, category) => 
    selectSelectedCategory(state) === category;

export const selectHasActiveFilter = (state) => 
    selectSelectedCategory(state) !== "Все категории";