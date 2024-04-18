import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MarketingPage from './pages/marketing.tsx'
import ListPage from './pages/list.tsx'
import PostPage from './pages/post.tsx'
import { Toaster } from 'sonner'
import PostIdPage from './pages/post-id.tsx'
import { MessagePage } from './pages/message.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MarketingPage /> },
      { path: '/list', element: <ListPage /> },
    ],
  },
  {
    path: '/post',
    element: <PostPage />,
  },
  { path: '/post/:postId', element: <PostIdPage /> },
  { path: '/post/:postId/message', element: <MessagePage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
