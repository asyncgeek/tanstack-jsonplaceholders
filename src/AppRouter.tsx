import { HashRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { BasicPage } from "./pages/BasicPage";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { Posts } from "./pages/Posts";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<BasicPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
