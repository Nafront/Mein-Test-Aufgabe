import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Versicherungs from "./pages/Versischeugungssumme";
import TarifPage from "./pages/TarifPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="versicherungs" element={<Versicherungs />} />
          <Route path="*" element={<TarifPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import RootLayout from "./pages/Root";
// import Versicherungs from "./pages/Versicherungs";
// import TarifPage from "./pages/TarifPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/", element: <Home /> },

//       { path: "/versicherungs", element: <Versicherungs /> },
//       { path: "/versicherungs/tarif", element: <TarifPage /> },
//     ],
//   },
// ]);

// export default function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }
