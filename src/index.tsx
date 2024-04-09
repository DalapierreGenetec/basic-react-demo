import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { EntryPoint } from '@portal/modules/entry-point';

const App: React.FC = () => {
  return <EntryPoint />;
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}