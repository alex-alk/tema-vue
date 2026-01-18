<script setup>
import PageTop from '@/components/PageTop.vue'
import { ref } from 'vue'

const passwordVisible = ref(false)
</script>

<template>
  <PageTop bitem1="Components" bitem2="Base UI" title="Form Elements" />

  <div class="card">
    <h4 class="font-bold mb-2 tracking-[.02em]">INPUT TYPES</h4>
    <p class="text-[14px] text-[#8a969c] mb-4">
      Most common form control, text-based input fields. Includes support for all HTML5 types: text,
      password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel,
      and color.
    </p>

    <div>
      <ul class="border-b-2 border-[#e5e8eb] mb-6 flex"></ul>
    </div>

    <!-- Elements -->
    <div class="flex w-full">
      <!-- Col 1 -->
      <div class="flex-1 pr-3">
        <div class="mb-6">
          <label class="label">Text</label>
          <input class="input" />
        </div>

        <div class="mb-6">
          <label class="label">Email</label>
          <input placeholder="Email" class="input" />
        </div>

        <div class="mb-6">
          <label class="label">Password</label>
          <input type="password" value="password" class="input" />
        </div>

        <div class="mb-6">
          <label class="label">Show/Hide Password</label>
          <div class="flex w-full">
            <input type="password" placeholder="Enter your password" class="input rounded-r-none" />
            <div @click="passwordVisible = !passwordVisible" class="password-eye-box">
              <span
                :class="{
                  'mdi mdi-eye-off-outline': passwordVisible,
                  'mdi mdi-eye-outline': !passwordVisible,
                }"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Col 2 -->
      <div class="flex-1 pl-3">
        <div>
          <label class="font-semibold mb-2">Text c 2</label>
          <input />
        </div>
      </div>
    </div>
  </div>

  <div class="flex gap-6">
    <div class="card flex-1">
      <h4 class="card-title">CHECKBOXES</h4>
      <p class="text-[14px] text-[#8a969c] mb-4">
        Each checkbox and radio &lt;input&gt; and &lt;label&gt; pairing is wrapped in a &lt;div&gt;
        to create our custom control. Structurally, this is the same approach as our default
        .form-check..
      </p>

      <div>
        <ul class="border-b-2 border-[#e5e8eb] mb-6 flex"></ul>
      </div>

      <!-- Elements -->
      <div class="flex w-full">
        <div class="flex-1 pr-3">
          <div class="mb-6">
            <input
              id="cb"
              type="checkbox"
              class="checkbox"
            />
            <label class="label" for="cb">Check this custom checkbox</label>
          </div>
        </div>
      </div>
    </div>

    <div class="card flex-1">
      <h4 class="card-title">RADIOS</h4>
      <p class="text-[14px] text-[#8a969c] mb-4">
        Each checkbox and radio &lt;input&gt; and &lt;label&gt; pairing is wrapped in a &lt;div&gt;
        to create our custom control. Structurally, this is the same approach as our default
        .form-check..
      </p>

      <div>
        <ul class="border-b-2 border-[#e5e8eb] mb-6 flex"></ul>
      </div>

      <!-- Elements -->
      <div class="flex w-full">
        <div class="flex-1 pr-3">
          <div class="mb-6">
            <label class="label">Text</label>
            <input class="input" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Stilul de bază pentru checkbox */
input[type='checkbox'].custom-checkbox {
  /* Eliminăm aspectul implicit al browserului */
  appearance: none;
  -webkit-appearance: none;

  /* Definim dimensiunile */
  width: 20px;
  height: 20px;

  /* Aici modifici grosimea bordurii */
  border: 3px solid gray;
  border-radius: 4px;

  background-color: white;
  cursor: pointer;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}

/* Stilul când checkbox-ul este bifat */
input[type='checkbox'].custom-checkbox:checked {
  background-color: #3498db;
}

/* Adăugarea bifei (checkmark) folosind un pseudo-element */
input[type='checkbox'].custom-checkbox:checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
