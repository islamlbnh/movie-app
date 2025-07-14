import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "../pages/Home";
import Header from "../components/Header";
import Movies from "../pages/Movies/Movies";
import { MovieDetails } from "../pages/Movies/Moviedetails";
import Footer from "../components/Footer";

const AppRoutes = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
};

export default AppRoutes;
