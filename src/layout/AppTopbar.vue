<script setup></script>

<template>
  <div class="ml-65 bg-white pl-3">
    <div class="flex lg:gap-3 items-center h-17.5">
      <button class="w-15 text-2xl">
        <i class="ri-menu-5-line text-[#6c757d]"></i>
      </button>
      <div class="relative">
        <span class="ri-search-line absolute text-xl left-2.5 leading-9.5 text-[#6c757d]"></span>
        <input
          type="search"
          class="text-[#6c757d] bg-[#f0f3f8] h-9.5 pl-10"
          placeholder="Search..."
        />
        <button class="bg-[#727cf5] text-white py-[0.45rem] px-[0.9rem] rounded-[0.15rem]">
          Search
        </button>
      </div>
    </div>
  </div>
</template>
