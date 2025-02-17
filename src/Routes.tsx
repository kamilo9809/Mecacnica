import { items } from "./utils/Nav";
import { Routes,Route } from "react-router-dom"


const Routes = () => {
  return (
    <Routes>
        {items.map((item)=>{
            <Route path={item.path} element={}/>
        })}
    </Routes>
  );
};

export default Routes;
