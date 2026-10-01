import TaskCard from '@/components/tasks/TaskCard';
import { getTasks } from '@/libs/tasks';

export default async function TasksPage() {
  const tasks = await getTasks();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4 px-6">
      <h1>Tasks {tasks.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
