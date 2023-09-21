
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider  
} from "react-router-dom";
import { ErrorPage } from './components/ErrorPage';
import { TemplateFlow } from './features/todoFlow/TemplateFlow';
import { TodoFlow } from './features/todoFlow/TodoFlow';
import { OneTimeFlow } from './features/todoFlow/OneTimeFlow';
import { History } from './features/history/History';
import { Dashboard } from './features/dashboard/Dashboard';
import { HistoryPage } from './features/history/HistoryPage';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "todo",
        element: <TodoFlow />,
        children: [
          {
            path: 'template',
            element: <TemplateFlow />
          },
          {
            path: 'one',
            element: <OneTimeFlow />
          }
        ]
      },
      {
        path: 'history',
        element: <HistoryPage />
      },
      {
        path: 'history/:type',
        element: <History />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="h-full">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
