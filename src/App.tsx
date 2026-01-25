import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ResourcesPage from "./pages/ResourcesPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * ScrollToHash component - handles scrolling to elements when hash changes
 * This allows links like "/#contact" to properly scroll to the contact section
 */
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes (pathname changes)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    // Scroll to hash when hash changes
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToHash />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
