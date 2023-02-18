import react from "react";
import { ReactDOM } from "react";
import "./header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class Header extends react.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <h1>Anime Store</h1>
        <section>
          {/* <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes> */}
        </section>
      </header>
    );
  }
}

export default Header;
