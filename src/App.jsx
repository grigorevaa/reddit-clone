import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import PostsPage from './pages/PostsPage';
import './styles/App.css';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<PostsPage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
