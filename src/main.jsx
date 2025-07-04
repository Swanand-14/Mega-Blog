import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Protected from './components/Protected.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import EditPost from './Pages/EditPost.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import AddPost from './Pages/AddPost.jsx'
import Post from './Pages/Post.jsx'
import HomePage from './Pages/HomePage.jsx'
import App from './App.jsx'

const router = createBrowserRouter([

  {path:"/",
    element:<App/>,
    children: [
      {
    path:'/',
    element:<HomePage />
  },
  {
    path:"/login",
    element:(
      <Protected authentication={false}>
        <Login/>
      </Protected>
    )
  },
  {
    path:"/signup",
    element:(
      <Protected authentication={false}>
        <SignUp/>
      </Protected>
    )

  },
  {
            path: "/all-posts",
            element: (
                <Protected authentication>
                    {" "}
                    <AllPosts />
                </Protected>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Protected authentication>
                    {" "}
                    <AddPost />
                </Protected>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Protected authentication>
                    {" "}
                    <EditPost />
                </Protected>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        }

    ]
  }
  


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router = {router}/>
    </Provider>
  </StrictMode>
)
