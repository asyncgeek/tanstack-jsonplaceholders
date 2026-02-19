const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

export const Users = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Users</h1>
      <ul className="space-y-4">
        {mockUsers.map((user) => (
          <li key={user.id} className="p-4 border border-gray-200 rounded-lg">
            <p className="font-semibold text-gray-800">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
