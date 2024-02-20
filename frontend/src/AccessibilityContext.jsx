import PropTypes from 'prop-types';
import { createContext, useReducer, useContext } from 'react'
import accessibilityReducer, { initialState } from './accessibiltyReducer'

const AccessibilityContext = createContext(initialState)

export const AccessibilityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accessibilityReducer, initialState)

  const enterUrl = () => {
    dispatch({
      type: 'ENTER_URL', 
      payload: {}
    })
  }

  const setUrl = (url) => {
    dispatch({
      type: 'SET_URL',
      payload: { url }
    })
  }

  const checkUrl = async () => {
    try {
      console.log('url', state.url)
      const res = await fetch('/api/screen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: state.url }),
      });
      if (res.ok) {
        console.log('ok')
        const data = await res.json()
        console.log('ok2', data)
        dispatch({
          type: 'CHECK_URL',
          payload: { statusCode: res.statusCode, success: true, image: data.image, violations: data.violations, error:'' }
        })
      } else {
        dispatch({
          type: 'CHECK_URL',
          payload: { statusCode: res.statusCode, success: false, image: null, violations: [], error: 'Failed to check website' }
        })
      }
    } catch (error) {
      console.log('error:', error)
      dispatch({
        type: 'CHECK_URL',
        payload: { statusCode: 500, error: error.message, image: null, violations: null, success: false }
      })
    }
  }

  const value = {
    ...state,
    enterUrl,
    setUrl,
    checkUrl
  }

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  )
}

AccessibilityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within a AccessibilityProvider')
  }
  return context
}

export default useAccessibility;

