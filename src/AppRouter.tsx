import { HashRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";

export const BasicPage = () => {
  return <div>hello friends and modify again</div>;
};

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<BasicPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
