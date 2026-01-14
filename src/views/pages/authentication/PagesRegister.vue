<script setup>
import { ref } from 'vue'

const passwordVisible = ref(false)
</script>

<template>
  <div class="sm:py-18 flex justify-center">
    <div class="max-w-104">
      <div class="card p-8">
        <img src="/src/assets/img/logo.png" class="h-5 mx-auto" />
        <div class="p-14 pt-7">
          <h4 class="font-bold mb-2 tracking-[.02em] text-center text-lg">Free Sign Up</h4>
          <p class="text-[14px] text-[#8a969c]">
            Don't have an account? Create your account, it takes less than a minute
          </p>
        </div>

        <div class="mb-6">
          <label class="label">Full Name</label>
          <input class="input" placeholder="Enter your name" />
        </div>

        <div class="mb-6">
          <label class="label">Email address</label>
          <input class="input" placeholder="Enter your email" />
        </div>

        <div class="mb-6">
          <label class="label">Password</label>
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
    </div>
  </div>
</template>
