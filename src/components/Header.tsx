import logo from '../../public/assets/react.svg'

interface Props {
  title?: string
}

const Header = ({ title }: Props) => {

  return (
    <header className='navbar navbar-expand-lg bg-primary' data-bs-theme="dark">
      <div className='container' style={{justifyContent: 'initial'}}>
        <img src={logo} alt="React logo" style={{ width: '4rem', marginRight: '15px' }} />
        <h2 className='navbar-brand'>
          {title && <h1>{title}</h1>}
        </h2>
      </div>
    </header>
  )
}

export default Header