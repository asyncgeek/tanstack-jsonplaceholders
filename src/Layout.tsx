import { Outlet } from "react-router";
import { Navbar } from "./partials/navbar/Navbar";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-600">
      <Navbar />
      <div className="lg:pl-64">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
