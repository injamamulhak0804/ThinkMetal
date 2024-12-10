import Header from "./components/Header" 
import Hero from "./components/Hero"
import ShareAnything from "./components/ShareAnything"
import Better_FeedBack from "./components/Better_FeedBack"
import BestTime from "./components/BestTime"
import Progress from "./components/Progress"
import Testimonials from "./components/Testimonials"
import DesignAt from "./components/DesignAt"
import KeepEveryOne from "./components/KeepEveryOne"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto">
          <Header />
          <Hero/>
          <ShareAnything/>
          <Better_FeedBack/>
      </div>
      <BestTime/>
      <div className="max-w-[1100px] mx-auto">
          <Progress/>
      </div>
      <Testimonials/>
      <DesignAt/>
      <KeepEveryOne/>
      <Footer/>
    </>
  )
}

export default App
