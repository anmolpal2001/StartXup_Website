import './App.css'
import Main from './components/main-page/Main';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import SubmitProject from './components/submit-form/SubmitProject';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Main />
  },
  {
    path : "/submit-project",
    element : <SubmitProject />
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
