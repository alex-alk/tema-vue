<script setup>
defineProps({
  title: String,
  bitem1: String,
  bitem2: String,
})
</script>

<template>
  <div>
    <div class="float-right">
      <ol class="flex mt-5 pt-2">
        <li v-if="bitem1" class="pr-2 breadcrumb-item">
          <span class="pr-2">{{ bitem1 }}</span
          ><i class="mdi mdi-chevron-right"></i>
        </li>

        <li v-if="bitem2" class="pr-2 breadcrumb-item">
          <span class="pr-2">{{ bitem2 }}</span
          ><i class="mdi mdi-chevron-right"></i>
        </li>

        <li>
          <span>{{ title }}</span>
        </li>
      </ol>
    </div>
    <h4 class="text-[18px] mb-0 leading-18.75 font-bold text-inherit">{{ title }}</h4>
  </div>
</template>
