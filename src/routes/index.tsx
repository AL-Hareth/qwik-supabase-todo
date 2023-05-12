import { component$, useComputed$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  routeAction$,
  zod$,
  z,
} from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";
import { AddTodo } from "~/components/AddTodo";
import { TasksList } from "~/components/TasksList";

export const useTodos = routeLoader$(async () => {
  const prisma = new PrismaClient();
  const todos = await prisma.todo.findMany();
  return todos;
});

export const useCreateTodo = routeAction$(
  async (data: { task: string }) => {
    const prisma = new PrismaClient();
    await prisma.todo.create({
      data,
    });
  },
  zod$({
    task: z.string(),
  })
);

export const useSetDoneAction = routeAction$(async (data) => {
  const prisma = new PrismaClient();
  await prisma.todo.update({
    where: {
      id: data.id as number,
    },
    data: {
      done: true,
    },
  });
});

export const useDeleteTaskAction = routeAction$(async (data) => {
  const prisma = new PrismaClient();
  await prisma.todo.delete({
    where: {
      id: data.id as number,
    },
  });
});

export default component$(() => {
  const todos = useTodos();
  return (
    <>
      <AddTodo />
      <TasksList todos={todos.value} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
