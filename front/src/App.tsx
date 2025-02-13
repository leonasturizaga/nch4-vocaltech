import React from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Entrepreneurs from "./pages/entrepreneurs/entrepreneurs";
import Companies from "./pages/companies";
import Login from "./pages/login";
import Register from "./pages/register";
import AdminDashboard from "./pages/adminDashboard";
import Diagnostic from "./pages/Diagnostic";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import RecentLeads from "./components/Dashboard/RecentLeads";
import Diagnostics from "./components/Dashboard/Diagnostics";
import UnderConstruction from "./components/UnderConstruction";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import WhatsAppChat from "./components/WhatsAppChat";
import Calendar from "./components/Dashboard/Calendar";
import AboutUs from "./pages/aboutUs";
import Questions from "./pages/questions";
import ClientPanel from "./pages/clientPanel";

function App() {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Get auth state
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  // Modified logout function to use navigate inside App.tsx
  const handleLogout = () => {
    logout(); // Logout action from AuthContext
    navigate("/login"); // Navigate after logout
  };

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && !isDashboardRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Companies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/panel" element={<ClientPanel />} />
        <Route path="/dashboard" element={<AdminDashboard />}>
          <Route path="diagnostics" element={<Diagnostics />} />
          <Route path="leads" element={<RecentLeads />} />
          <Route path="calendar" element={<Calendar userId={user?.id || "guest"} />} />
          <Route path="settings" element={<UnderConstruction />} />
          <Route path="logout" element={<button onClick={handleLogout}>Logout</button>} />
        </Route>
        <Route path="/emprendedores" element={<Entrepreneurs />} />
        <Route path="/wapps" element={<WhatsAppChat />} />
        <Route path="/diagnostic" element={<ProtectedRoute><Diagnostic /></ProtectedRoute>} />
      </Routes>
      {/* Floating WhatsApp button */}
      {location.pathname !== "/login" && location.pathname !== "/register" && !isDashboardRoute && <FloatingWhatsApp />}
    </>
  );
}

export default App;



// // import { Route, Routes, useLocation } from "react-router-dom";
// // import "./App.css";
// // import Header from "./components/Header";
// // import Home from "./pages/home";
// // import Entrepreneurs from "./pages/entrepreneurs/entrepreneurs";
// // import Companies from "./pages/companies";
// // import Login from "./pages/login";
// // import Register from "./pages/register";
// // import AdminDashboard from "./pages/adminDashboard";
// // import Diagnostic from "./pages/Diagnostic";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import { AuthProvider } from "./context/AuthContext";
// // import RecentLeads from "./components/Dashboard/RecentLeads";
// // import DiagnosticTable from "./components/Dashboard/DiagnosticTable";
// // import Graphic from "./components/Dashboard/Graphic";
// // import UnderConstruction from "./components/UnderConstruction";
// // import FloatingWhatsApp from "./components/FloatingWhatsApp";
// // import WhatsAppChat from "./components/WhatsAppChat";
// // import Calendar from "./components/Dashboard/Calendar";
// // import AboutUs from "./pages/aboutUs";
// // import Questions from "./pages/questions";
// // import Diagnostics from "./components/Dashboard/Diagnostics";
// // import ClientPanel from "./pages/clientPanel";

// // import { useAuth } from "./context/AuthContext"; // Adjust import path

// import { Route, Routes, useLocation } from "react-router-dom";
// import "./App.css";
// import Header from "./components/Header";
// import Home from "./pages/home";
// import Entrepreneurs from "./pages/entrepreneurs/entrepreneurs";
// import Companies from "./pages/companies";
// import Login from "./pages/login";
// import Register from "./pages/register";
// import AdminDashboard from "./pages/adminDashboard";
// import Diagnostic from "./pages/Diagnostic";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import RecentLeads from "./components/Dashboard/RecentLeads";
// import Diagnostics from "./components/Dashboard/Diagnostics";
// import UnderConstruction from "./components/UnderConstruction";
// import FloatingWhatsApp from "./components/FloatingWhatsApp";
// import WhatsAppChat from "./components/WhatsAppChat";
// import Calendar from "./components/Dashboard/Calendar";
// import AboutUs from "./pages/aboutUs";
// import Questions from "./pages/questions";
// import ClientPanel from "./pages/clientPanel";

// function App() {
//   const location = useLocation();
//   const isDashboardRoute = location.pathname.startsWith("/dashboard");
//   const { user } = useAuth(); // Replace with your actual authentication state

//   return (
//     <>
//         {location.pathname !== "/login" &&
//           location.pathname !== "/register" &&
//           !isDashboardRoute && <Header />}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/empresas" element={<Companies />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/aboutUs" element={<AboutUs />} />
//           <Route path="/questions" element={<Questions />} />
//           <Route path="/panel" element={<ClientPanel />} />
//           <Route path="/dashboard" element={<AdminDashboard />}>
//             <Route path="diagnostics" element={<Diagnostics />} />
//             {/* <Route path='inicio' element={<Graphic/>}/> */}
//             <Route path="leads" element={<RecentLeads />} />
//             <Route path="services" element={<UnderConstruction />} />
//             <Route path="reviews" element={<UnderConstruction />} />
//             <Route path="calendar" element={<Calendar userId={user?.id || "guest"} />} />
//             <Route path="settings" element={<UnderConstruction />} />
//             <Route path="logout" />
//           </Route>
//           <Route path="/emprendedores" element={<Entrepreneurs />} />
//           <Route path="/wapps" element={<WhatsAppChat />} />
//           <Route
//             path="/diagnostic"
//             element={
//               <ProtectedRoute>
//                 <Diagnostic />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//         {/* Conditionally show FloatingWhatsApp button */}

//         {location.pathname !== '/login' &&
//           location.pathname !== '/register' &&
//           !isDashboardRoute && <FloatingWhatsApp />}
//     </>
//   );
// }

// export default App;
