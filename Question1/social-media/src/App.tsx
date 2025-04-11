import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Feed from './pages/Feed'
import TrendingPosts from './pages/TrendingPosts'
import TopUsers from './pages/TopUsers'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navbar */}
        <header className="bg-gray-800 shadow-md">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold text-blue-400">SocialApp</h1>
            <div className="flex gap-6 text-md">
              <Link to="/" className="hover:text-blue-400 transition">Feed</Link>
              <Link to="/top-users" className="hover:text-blue-400 transition">Top Users</Link>
              <Link to="/trending-posts" className="hover:text-blue-400 transition">Trending</Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/top-users" element={<TopUsers />} />
            <Route path="/trending-posts" element={<TrendingPosts />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
