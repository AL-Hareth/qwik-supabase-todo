import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class="container mx-auto px-4">
      <h1 class="text-center text-4xl pt-4">Todo App</h1>
      <Slot />
    </main>
  );
});
