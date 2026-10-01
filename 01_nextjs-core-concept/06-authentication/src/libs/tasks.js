import tasks from '../data/tasks.json';
export const getTasks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return tasks;
};
