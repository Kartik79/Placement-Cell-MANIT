import "./App.css";
//Todo : Add routing some issue with npm react-router package while displaying the content

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <>
      <BrowserRouter>
        <header className="sticky top-0 z-50   ">
          <NavBar />
        </header>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route exact path="/" element={<Home/>}/>
    //     <Route path="/login" element={<Login/>} />
    //     <Route path="/about" element={<About/>} />
    //     {/* Add more routes here */}
    //   </Routes>
    //   <Footer />
    // </Router>
  );
}

export default App;
