<template>
  <div data-theme="pastel">
    <main class="h-screen w-full">
      <h1>Hello world</h1>
      <button class="btn btn-warning">Test button</button>

      <button class="btn" onclick="my_modal_2.showModal()">open modal</button>
      <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </main>
  </div>
</template>
