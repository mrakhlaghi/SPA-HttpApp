import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import './mock/mock';



function App() {
  return(
    <div className='App'> 
      <ToastContainer/>
      <Layout>
        <Routes>
          {routes.map((route , index)=>{
            return(
              <Route {...route } key={index}/>
            )
          }) }
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
