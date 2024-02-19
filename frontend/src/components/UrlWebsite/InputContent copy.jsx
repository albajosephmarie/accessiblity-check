import useAccessibility from "../../AccessibilityContext"
import './InputContent.css'
const InputContent = () => {
  return (
    <div className="input-content">
      <InputForm />
    </div>
  )
}

const InputForm = ({ url }) => {
  const { setUrl } = useAccessibility()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('e', e.target)
    alert('submitted ' + e.target.url.value)
    setUrl(e.target.url.value)
  }

  console.log('InputForm', url)
  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <InputField url={url} />
      <SubmitButton />
    </form>
  )
}

const InputField = ({ url }) => {
  console.log('InputField', url)
  return (
    <div className="input-field">
      <div className="input-with-label">
        <div className="input">
          <div className="content2">
            <input className="input2" type="url" name="url" value={url} placeholder="https://www.websitesample.com" required />
          </div>
        </div>
      </div>
    </div>
  )
}

const SubmitButton = () => {
  return (
    <button type="submit">
      <span className="text-padding">Check My Site</span>
      <ArrowRight className="arrow-right" />
    </button>
  )
}

const ArrowRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16667M15.8333 10L9.99996 15.8333" stroke="#542C0D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default InputContent