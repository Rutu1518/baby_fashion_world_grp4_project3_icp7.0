
import ReactDOM from "react-dom/client"

import About from "./views/About/About";
import Home from "./views/Home/Home";

import ShoppingList from "./views/ShoppingList/ShoppingList";

import Contact from "./views/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1>baby_fashion_world_grp4_project3_icp7.0</h1>);

const path = window.location.pathname
if(path === "/about")
    {
        root.render(<About />)
    }
    else if (path === "/shopping")
        {
            root.render(<ShoppingList/>)
        }

          
     else if (path === "/")
     {
         root.render(<Home />)
     }
        
        else if (path === "/contact")
            {
                root.render(<Contact/>)
            }
            
            else{
                root.render(<h1>404 Page Not Found</h1>)
            }
            