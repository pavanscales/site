import { Suspense, lazy } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Stack = lazy(() => import("./pages/Stack"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// ⛳ Lazy-load named exports (Toaster and Sonner) properly
const Toaster = lazy(() =>
  import("@/components/ui/toaster").then((mod) => ({ default: mod.Toaster }))
);
const Sonner = lazy(() =>
  import("@/components/ui/sonner").then((mod) => ({ default: mod.Toaster })) // Assuming named export is Toaster too
);

// React Query config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense
          fallback={
            <div className="text-white text-xl p-8 text-center animate-pulse">
              Loading page...
            </div>
          }
        >
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
