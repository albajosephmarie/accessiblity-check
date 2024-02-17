import PropTypes from 'prop-types'
import useAccessibility from '../AccessibilityContext'

const UrlEntry = ({ url }) => {
  const { setUrl } = useAccessibility()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(e.target.url.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">URL</label>
        <input type="url" name="url" value={url} required />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

UrlEntry.propTypes = {
  url: PropTypes.string,
}

export default UrlEntry
