<script setup>
import PageTop from '@/components/PageTop.vue'
</script>

<template>
  <PageTop bitem1="Components" bitem2="Base UI" title="Breadcrumb" />
  <div class="flex">
    <div class="w-[50%] p-6 bg-white shadow-[0_0_35px_0_rgba(154,161,171,0.15)]">
      <h4>Example</h4>
      <p class="">
        Indicate the current page’s location within a navigational hierarchy that automatically adds
        separators via CSS. Please read the official
        <a target="_blank" href="https://getbootstrap.com/docs/5.3/components/breadcrumb/"
          >Bootstrap</a
        >
        documentation for more options.
      </p>
    </div>
    <div class="w-[50%]"></div>
  </div>
</template>
