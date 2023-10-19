import './App.css'

import Header from './components/Header'
import Main from './components/Main'

const App = () => {

  return (
    <div className="container-fluid bg-dark" style={{ height: '100vh' }}>
      <Header title='React and TypeScript' />
      <Main />
    </div>
  )
}

export default App