export const initialState = {
  url: '',
  results: 0,
  stage: 'url_entry',
  statusCode: 0,
  success: false,
  error: 'none',
  image: null,
}

const accessibilityReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_URL':
      return {
        ...state,
        url: payload.url,
        stage: 'url_set',
      }
    case 'CHECK_URL':
      return {
        ...state,
        statusCode: payload.statusCode,
        success: payload.success,
        image: payload.image,
        violations: payload.violations,
        error: payload.error, 
        stage: 'url_check',
      }
    default:
      throw new Error(`Unknown action ${type}`)
  }
}

export default accessibilityReducer
