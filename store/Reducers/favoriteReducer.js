// Store/Reducers/favoriteReducer.js

const initialState = {
  categories: [
    {
      value: 'business',
      checked: true
    },
    {
      value: 'entertainment',
      checked: false
    },
    {
      value: 'general',
      checked: false
    },
    {
      value: 'health',
      checked: false
    },
    {
      value: 'science',
      checked: false
    },
    {
      value: 'sports',
      checked: false
    },
    {
      value: 'technology',
      checked: false
    }
] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_CATEGORIE':
      const categorieIndex = state.categories.categories.findIndex(item => item.value === action.value.value)
      state.categories.categories[categorieIndex].checked = action.value.checked
      console.log(state.categories)

      nextState = {
        ...state,
        categories: state.categories
      }
      return nextState || state
  default:
    return state.categories ? state.categories : initialState
  }
}

export default toggleFavorite
