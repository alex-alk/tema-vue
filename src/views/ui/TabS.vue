<script setup>
import PageTop from '@/components/PageTop.vue'
import { ref } from 'vue'

const tabs = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Profile' }
]

const activeTab = ref(tabs[0].id)

const setActiveTab = (id) => {
  activeTab.value = id
}

</script>

<template>
  <PageTop bitem1="Components" bitem2="Base UI" title="Tabs" />

  <div class="flex">
    <div class="card">
      <h4 class="card-title">TABS BORDERED</h4>
      <p class="text-[14px] text-[#8a969c] mb-6">
        The navigation item can have a simple bottom border as well. Just specify the class
        .nav-bordered.
      </p>
      <ul class="bg-[#f6f7fb] mb-6 flex">
        <li><a class="bg-[#727cf5] px-4 py-2 text-white">Preview</a></li>
        <li><a class="bg-inherit px-4 py-2 text-[#8a969c]">Code</a></li>
      </ul>
      <!-- Actual tabs -->
      <div>
        <ul class="border-b-2 border-[#e5e8eb] mb-6 flex">
          <li class="-mb-px" v-for="tab in tabs" :key="tab.id">
            <a
              class="py-2.5 px-5 block text-[#6c757dbf] font-semibold cursor-pointer transition-colors duration-100 ease-in-out"
              @click="setActiveTab(tab.id)"
              :class="{ 'border-[#727cf5] border-b-2 ': activeTab === tab.id, 'hover:text-[#6169d0]' : activeTab !== tab.id }"
              >{{ tab.name }}</a
            >
          </li>
        </ul>
      </div>

      <div class="mb-6" v-show="activeTab === 1">
        <p>
          Tab1 Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
          rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
          pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Leggings occaecat dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>
      </div>

      <div class="mb-6" v-show="activeTab === 2">
        <p>
          Tab2 Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
          rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
          pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Leggings occaecat dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </p>
      </div>
    </div>
    <div class="card">
      <h4 class="card-title">DEFAULT TABS</h4>
      <p class="text-[14px] text-[#8a969c]">Simple widget of tabbable panes of local content.</p>
    </div>
  </div>
</template>
