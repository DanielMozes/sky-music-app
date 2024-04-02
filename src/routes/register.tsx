import "./index.css";

import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RSRegister";
import Footer from "./components/Footer";

export default function Home() {
  return (
<>
  <Header />

  <div class="container-fluid pb-2" style="background: url(/background.jpg); background-size: cover;">
    <div class="d-grid gap-2" style="padding-top: 65px; min-height: 99vh;">
      <LeftSection />
      <RightSection />
    </div>
  </div>

  <Footer />

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</>
  );
}