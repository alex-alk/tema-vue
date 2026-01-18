<script setup>
import { ref } from 'vue'

const passwordVisible = ref(false)
</script>

<template>
  <div class="sm:py-12.5 flex justify-center">
    <div class="max-w-104">
      <div class="card p-9">
        <img src="/src/assets/img/logo.png" class="h-7 mx-auto" />
        <div class="pb-13 pt-6 px-11">
          <p class="text-[14px] text-muted text-center">
            Let's get you started. Create your account by entering your details below.
          </p>
        </div>

        <div class="mb-6">
          <label class="label">Name</label><span class="text-danger"> *</span>
          <input class="input" placeholder="Enter your name" />
        </div>

        <div class="mb-6">
          <label class="label">Email address</label><span class="text-danger"> *</span>
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

        <div class="mb-6">
          <input id="cb" type="checkbox" class="checkbox" />
          <label class="label" for="cb"
            >I accept <a class="text-[rgb(114,124,245)]" href="/">Terms and Conditions</a></label
          >
        </div>
        <div class="w-full flex justify-center">
          <button type="button" class="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>
