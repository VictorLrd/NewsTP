const initialState = { categories: [] }

function toggleCategorie(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_CATEGORIE':
      const categorieIndex = state.categories.findIndex(item => item.id === action.value.id)
      if (categorieIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          categories: state.categories.filter( (item, index) => index !== categorieIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          categories: [...state.categories, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleCategorie