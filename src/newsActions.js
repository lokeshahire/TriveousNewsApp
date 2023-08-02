export const addToFavorites = (articleId) => {
  // The action object for adding an article to favorites
  return {
    type: "ADD_TO_FAVORITES",
    payload: articleId,
  };
};

export const removeFromFavorites = (articleId) => {
  // The action object for removing an article from favorites
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: articleId,
  };
};
