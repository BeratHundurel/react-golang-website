import { Outlet } from "react-router-dom";
import Header from "./Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <div className="w-full">
            <Header />
            <Outlet />
         </div>
      </QueryClientProvider>
   );
}

export default App;
