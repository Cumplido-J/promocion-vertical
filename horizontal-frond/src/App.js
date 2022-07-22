import DidMount from './configPrimary/DidMount'
import './styles/styles.css'
import SideMenu from './components/SideMenu'

function App () {
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      <SideMenu />
      <DidMount />
    </div>
  )
}

export default App
