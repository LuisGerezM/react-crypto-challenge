import { Route, Routes } from "react-router-dom";

const RoutesNoMatch = ({ children }) => (
  <Routes>
    {children}
    <Route path='*' element={<div> Page not found...</div>} />
  </Routes>
);

export default RoutesNoMatch;
