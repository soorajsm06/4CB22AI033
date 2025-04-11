function Feed() {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-blue-300 mb-6">Feed</h2>
        <div className="space-y-6">
          {[1, 2, 3].map(post => (
            <div key={post} className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-white">Post Title {post}</h3>
              <p className="text-gray-300 mt-2">This is the content of post number {post}. Engaging and informative!</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Feed
  