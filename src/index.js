import React from 'react';
import { createRoot } from 'react-dom/client';
import { QuizesPage } from './pages/quizes.page';
import './assets/css/styles.css';

createRoot(document.querySelector("#main")).render(<QuizesPage />);


