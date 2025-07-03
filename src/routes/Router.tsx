import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "../pages/Home";
import Header from "../components/Header";
import Movies from "../pages/Movies/Movies";

const AppRoutes = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Movies />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default AppRoutes;
