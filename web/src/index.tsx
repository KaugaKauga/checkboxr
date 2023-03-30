import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
import { AnalyticsPage } from './features/analytics/AnalyticsPage';

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
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="h-full">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
