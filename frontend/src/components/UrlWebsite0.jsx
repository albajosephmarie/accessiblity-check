import './UrlWebsite.css'

const Header = () => {
  return (
    <div className="Header">
      <Logomark />
      <TextAndSupportingText />
    </div>
  )
}

const Logomark = () => {
  return (
    <div className="Logomark">
      <div className="Vector" />
    </div>
  )
}

const TextAndSupportingText = () => {
  return (
    <div className="TextAndSupportingText">
      <span className="Text">What’s the website URL?</span>
      <span className="SupportingText">
        Friendlier websites start with accessible colors! Give yours a check.
      </span>
    </div>
  )
}

const Content = () => {
  return (
    <div className="Content">
      <ContentForm />
    </div>
  )
}

const ContentForm = () => {
  return (
    <div className="ContentForm">
      <InputField />
      <InputButton />
    </div>
  )
}

const InputField = () => {
  return (
    <div className="InputField">
      <InputWithLabel />
    </div>
  )
}

const InputWithLabel = () => {
  return (
    <div className='InputWithLabel'>
      <div className="ContentInput">
        
      </div>
    </div>
  )
}

const ContentInput = () => {
  return (
    <div className='ContentInput'>ContentInput</div>
  )
}

const InputButton = () => {
  return (
    <div className="InputButton">InputButton</div>
  )
}

const Container = () => {
  return (
    <div className="Container">
      <div className="Content">
        <Header />
        <Content />
      </div>
    </div>
  )
}

const Background = () => {
  return (
    <div className="Background"></div>
  )
}

const Login = () => {
  return (
    <div className="Login">
      <Background />
      <Container />
    </div>
  )
}

const UrlWebsite = () => {
  return (
    <div className='UrlWebsite'>
      <Login />
    </div>
  )
}

export default UrlWebsite;