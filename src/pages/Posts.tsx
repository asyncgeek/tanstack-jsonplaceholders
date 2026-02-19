const mockPosts = [
  { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React..." },
  { id: 2, title: "Understanding Hooks", excerpt: "A deep dive into React hooks..." },
  { id: 3, title: "State Management Tips", excerpt: "Best practices for state management..." },
];

export const Posts = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Posts</h1>
      <ul className="space-y-4">
        {mockPosts.map((post) => (
          <li key={post.id} className="p-4 border border-gray-200 rounded-lg">
            <h2 className="font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-1">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
