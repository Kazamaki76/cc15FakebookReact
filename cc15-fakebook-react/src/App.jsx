import { ToastContainer} from 'react-toastify'
import { useAuth } from "./hooks/use-auth"
import Route from "./router/route"
import Loading from "./components/Loading";


function App() {
  const {initialLoading} = useAuth();
  if(initialLoading){
    return <Loading/>
  }
  return (
    <>
    
    < Route />
    <ToastContainer/>
    </>
  
  )
}

export default App;
