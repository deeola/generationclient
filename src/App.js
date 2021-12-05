import React, { useState } from "react";
import "../src/scss/style.css";
import Home from "./components/home/Home";
import Login from "./components/registration/Login";
import Register from "./components/registration/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Forgot from "./components/registration/Forgot";
import Shop from "./components/shop/Shop";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Errorpage from "./components/error/Errorpage";
import Showcase from "./components/showcase/Showcase";
import AuthState from "./components/context/auth/AuthState";
import AlertState from "./components/context/alert/AlertState";
import Alerts from "./components/registration/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import ShowcaseForm from "./components/registration/ShowcaseForm";
import ProfileState from "./components/context/profile/ProfileState";
import FileUpload from "./components/registration/FileUpload";
import ShowcaseAll from "./components/showcase/ShowcaseAll";
import SearchResult from "./components/showcase/SearchResult";
import Notes from "./components/registration/Notes";
import ProfileFilter from "./components/shared/ProfileFilter";
import UserProfile from "./components/profile/UserProfile";
import HomePayment from "./components/payment/HomePayment";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const [product, setProduct] = useState({
    name: "React fro  FB",
    price: 10,
    productBy: "facebook",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("response ", response);
        const { status } = response;
        console.log("status ", status);
      })
      .catch((err) => console.log(err));
  };
  return (
    <AuthState>
      <AlertState>
        <ProfileState>
          <Router>
            <div className="App">
              <Navbar />
              <Alerts />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/shop" element={<Shop />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/filtered" element={<ProfileFilter />} />
                <Route exact path="/showcase/:id" element={<PrivateRoute />}>
                  <Route exact path="/showcase/:id" element={<Showcase />} />
                </Route>
                <Route exact path="/userprofile" element={<PrivateRoute />}>
                  <Route exact path="/userprofile" element={<UserProfile />} />
                </Route>
                <Route exact path="/search/:id" element={<SearchResult />} />

                <Route exact path="/showcase-all" element={<PrivateRoute />}>
                  <Route exact path="/showcase-all" element={<ShowcaseAll />} />
                </Route>
                <Route exact path="/create-profile" element={<PrivateRoute />}>
                  <Route
                    exact
                    path="/create-profile"
                    element={<ShowcaseForm />}
                  />
                </Route>
                <Route exact path="/upload" element={<PrivateRoute />}>
                  <Route exact path="/upload" element={<FileUpload />} />
                </Route>
                {/* <Route exact path="/payment" element={<PrivateRoute />}>
                  <Route exact path="/payment" element={<HomePayment/>} />
                </Route> */}

                <Route exact path="/payment" element={<HomePayment/>} />
                <Route exact path="/addnotes/:id" element={<PrivateRoute />}>
                  <Route exact path="/addnotes/:id" element={<Notes />} />
                </Route>
                {/* <Route exact path="/addnotes/:id" element={<Notes />} /> */}

                {/* <PrivateRoute exact path="/showcase" element={<Showcase />} /> */}
                <Route path="/forgot-password" element={<Forgot />} />
                <Route path="/errorpage" element={<Errorpage />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </ProfileState>
      </AlertState>
    </AuthState>
  );
}

export default App;
