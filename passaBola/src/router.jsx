import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Noticias from "./pages/Noticias";
import Copa from "./pages/Copa";
import SortearTime from "./pages/SortearTime";
import Inicio from "./pages/Inicio";
import Cadastrar from "./pages/Cadastrar";
import Entrar from "./pages/Entrar";

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children:[{
      index: true,
      element: <Inicio/>
    },{
      path:'noticias',
      element:<Noticias/>
    },{
      path:'copa',
      element:<Copa/>
    },{
      path: 'sortearTime',
      element:<SortearTime/>
    },{
      path: 'cadastrar',
      element:<Cadastrar/>
    },{
      path: 'entrar',
      element:<Entrar/>
    }]
  }
])

export default router