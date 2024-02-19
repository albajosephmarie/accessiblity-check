import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Logomark />
      <TextAndSupportingTool />
    </div>
  )
}

const Logomark = () => {
  return (
    <div className='logomark'>
      <div className='vector' />
    </div>
  )
}

const TextAndSupportingTool = () => {
  return (
    <div className='text-and-supporting-tool'>
      <span className='text'>
        What’s the website URL?
      </span>
      <span className='supporting-text'>
        Friendlier websites start with accessible colors! Give yours a check.
      </span>
    </div>)
}


export default Header