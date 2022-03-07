import { Routing } from './routes/Routing'
import { UserProvider } from './shared/global/provider/UserProvider'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './shared/global/css/Global.css'



function App() {
   return (
      <UserProvider>
        <Routing>
          <NavigationBar/>
        </Routing>
      </UserProvider>
  );
}

export default App;
