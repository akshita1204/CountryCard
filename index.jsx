import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'

const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>
        }
    ]
)
const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router}/>)