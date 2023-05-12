import { component$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { PrismaClient, type Todo } from "@prisma/client";
import { useDeleteTaskAction, useSetDoneAction } from "~/routes";

export const TasksList = component$(({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TaskCard key={todo.id} todo={JSON.stringify(todo)} />
      ))}
    </div>
  );
});

export const TaskCard = component$(({ todo }: { todo: string }) => {
  const newTodo: Todo = JSON.parse(todo);
  const setDone = useSetDoneAction();
  const deleteTask = useDeleteTaskAction();
  return (
    <div class="flex bg-black mt-2 px-5 py-2 rounded-lg">
      <div class="flex-1">
        <h1 class="text-lg">{newTodo.task}</h1>
        <span class="text-gray-600">{newTodo.done ? "Done" : "Doing"}</span>
      </div>
      {!newTodo.done && (
        <button
          class="bg-green-800 px-5 py-1 mr-1 rounded-full self-center"
          onClick$={() =>
            setDone.submit({
              id: newTodo.id,
            })
          }
        >
          Done
        </button>
      )}
      <button
        class="bg-red-800 px-5 py-1 rounded-full self-center"
        onClick$={() => deleteTask.submit({ id: newTodo.id })}
      >
        Delete
      </button>
    </div>
  );
});
