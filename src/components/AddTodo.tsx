import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Form, globalAction$, z, zod$ } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";
import { useCreateTodo } from "~/routes";

export const AddTodo = component$(() => {
  const addItem = useCreateTodo();
  const inputElement = useSignal<HTMLInputElement>();
  return (
    <Form
      action={addItem}
      onSubmit$={() => {
        inputElement.value!.value = "";
      }}
    >
      <div class="flex items-center mt-4">
        <input
          ref={inputElement}
          type="text"
          name="task"
          placeholder="Todo..."
          class="py-1 px-2 border-none rounded-ss-lg rounded-es-lg w-full bg-slate-800"
        />
        <button class="bg-gray-950 px-10 py-1 rounded-se-lg rounded-ee-lg">
          Add
        </button>
      </div>
    </Form>
  );
});
