<script setup>
import PageTop from '@/components/PageTop.vue'
</script>

<template>
  <PageTop bitem1="Components" bitem2="Base UI" title="Buttons" />

  <div class="flex gap-6">
    <div class="card flex-1">
      <h4 class="card-title">DEFAULT BUTTONS</h4>
      <p class="card-description">
        Use the button classes on an &lt;a&gt;, &lt;button&gt;, or &lt;input&gt; element.
      </p>

      <hr />

      <!-- Elements -->
      <div class="flex w-full gap-3">
        <button
          type="button"
          class="btn btn-primary"
        >
          Primary
        </button>

        <button
          type="button"
          class="btn btn-danger"
        >
          Danger
        </button>
      </div>
    </div>

    <div class="card flex-1">
      <h4 class="card-title">DEFAULT BUTTONS</h4>
      <p class="card-description">
        Use the button classes on an &lt;a&gt;, &lt;button&gt;, or &lt;input&gt; element.
      </p>

      <hr />

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
