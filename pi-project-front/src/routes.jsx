import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import NotFoundPage from './pages/Exceptions/NotFoundPage/NotFoundPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/sobre" exact element={<AboutUsPage />} />
      <Route path="/cadastro" exact element={<RegisterPage />} />
      <Route path="/details/:id" exact element={<DetailsPage />} />
      <Route path="*" exact element={<NotFoundPage />} />
    </Routes>
  );
}
