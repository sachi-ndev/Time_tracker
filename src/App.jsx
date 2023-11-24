
import './App.css'
import { AppProvider } from './components/Context/ContextApi'
import Tasks from './components/Tasks'
import Timer from './components/Timer'

function App() {

  return (
    <>
    <AppProvider>
       <Timer/>
       <Tasks/>
    </AppProvider>
    </>
  )
}

export default App
