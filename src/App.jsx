import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReelPage from "./pages/ReelPage"
import MarketPage from "./pages/MarketPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"
import RootLayout from "./layouts/RootLayout"
import ReelDetail from "./pages/ReelDetail"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout/>} >

            <Route path="/" element={<HomePage />} />
            <Route path="reels" element={<ReelPage />} />
            <Route path="market" element={<MarketPage />} />
            <Route path="profile" element={<ProfilePage />} />

            <Route path="/reels/:id" element={<ReelDetail/>} />

          </Route>
      

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App