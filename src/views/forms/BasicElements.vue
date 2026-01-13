<script setup>
import PageTop from '@/components/PageTop.vue'

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
          <input
            class="input"
          />
        </div>

        <div class="mb-6">
          <label class="label">Email</label>
          <input
            placeholder="Email"
            class="input"
          />
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
</template>
