import Header from "./components/Header" 
import Hero from "./components/Hero"
import ShareAnything from "./components/ShareAnything"
import Better_FeedBack from "./components/Better_FeedBack"

function App() {
  return (
    <>
      <div className="whole_container">
          <Header />
          <Hero/>
          <ShareAnything/>
          <Better_FeedBack/>
      </div>
    </>
  )
}

export default App
