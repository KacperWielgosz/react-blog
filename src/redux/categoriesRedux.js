// selectors
export const getAllCategories = state => state.categories;

// actions creators
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;
