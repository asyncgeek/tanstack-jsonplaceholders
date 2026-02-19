const mockTodos = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Build a project", completed: false },
  { id: 3, title: "Deploy to production", completed: false },
];

export const Todos = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Todos</h1>
      <ul className="space-y-4">
        {mockTodos.map((todo) => (
          <li key={todo.id} className="p-4 border border-gray-200 rounded-lg flex items-center gap-3">
            <span className={`w-5 h-5 rounded-full border-2 ${todo.completed ? "bg-green-500 border-green-500" : "border-gray-300"}`} />
            <span className={todo.completed ? "text-gray-500 line-through" : "text-gray-800"}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
