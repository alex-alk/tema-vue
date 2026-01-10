<script setup>
import { ref } from 'vue'

// const model = ref([
//   {
//     label: 'Home',
//     items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }],
//   },
//   {
//     label: 'Hierarchy',
//     items: [
//       {
//         label: 'Submenu 1',
//         icon: 'pi pi-fw pi-bookmark',
//         items: [
//           {
//             label: 'Submenu 1.1',
//             icon: 'pi pi-fw pi-bookmark',
//             items: [
//               { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
//               { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
//               { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
//             ],
//           },
//           {
//             label: 'Submenu 1.2',
//             icon: 'pi pi-fw pi-bookmark',
//             items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }],
//           },
//         ],
//       },
//       {
//         label: 'Submenu 2',
//         icon: 'pi pi-fw pi-bookmark',
//         items: [
//           {
//             label: 'Submenu 2.1',
//             icon: 'pi pi-fw pi-bookmark',
//             items: [
//               { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
//               { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
//             ],
//           },
//           {
//             label: 'Submenu 2.2',
//             icon: 'pi pi-fw pi-bookmark',
//             items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }],
//           },
//         ],
//       },
//     ],
//   },
// ])

const menu = ref([
  {
    label: 'Navigation',
    items: [
      {
        label: 'Dashboards',
        open: false,
        items: [
          {
            label: 'Analytics',
            to: 'c',
          },
          {
            label: 'Ecommerce',
            open: false,
            items: [
              {
                label: 'a',
                items: [
                  {
                    label: 'aa',
                    to: '/aa',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Custom',
    items: [
      {
        label: 'Pages',
        open: false,
        items: [
          {
            label: 'Starter Page',
            to: '/pages-starter',
          },
          {
            label: 'Ecommerce',
            open: false,
            items: [
              {
                label: 'a',
                items: [
                  {
                    label: 'aa',
                    to: '/aa',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Chat',
        to: 'a',
      },
    ],
  },
  {
    label: 'Components',
    items: [
      {
        icon: 'uil-box',
        label: 'Base UI',
        open: false,
        items: [
          {
            label: 'Breadcrumb',
            to: '/ui-breadcrumb',
          },
          {
            label: 'Cards',
            to: '/ui-cards',
          },
          {
            label: 'Tabs',
            to: '/ui-tabs',
          },
        ],
      },
    ],
  },
])
</script>

<template>
  <div
    class="h-full flex flex-col fixed w-65 top-0 text-[#6c757d] bg-white shadow-[0px_0px_35px_0px_rgba(154,161,171,0.15)]"
  >
    <a href="/" class="items-center h-17.5 flex justify-center">
      <img src="/src/assets/img/logo.png" class="h-5" />
    </a>
    <ul class="h-auto overflow-auto scrollbar flex-1">
      <li v-for="top in menu" :key="top.label">
        <!------------- Top -------------->
        <span
          class="font-bold tracking-wider uppercase px-6.25 py-2.5 pb-2 inline-block text-[11px]"
          >{{ top.label }}</span
        >
        <ul v-if="top.items">
          <!-------------- Main ---------->
          <li v-for="item in top.items" :key="item.label">
            <RouterLink
              v-if="item.to"
              :to="item.to"
              class="p-2.5 pb-1 text-[0.9375rem] block cursor-pointer"
            >
              <i class="uil-home-alt w-11.25 inline-block text-[1.2rem] text-center"></i>
              <span class="pl-1">{{ item.label }}</span>
              <span v-if="item.items" class="mdi mdi-chevron-right right-3.75 absolute"></span>
            </RouterLink>
            <a
              v-else
              class="p-2.5 pb-1 text-[0.9375rem] flex items-center cursor-pointer relative"
              @click="item.open = !item.open"
            >
              <i :class="item.icon" class="w-11.25 inline-block text-[1.2rem] text-center"></i>
              <span class="pl-1">{{ item.label }}</span>
              <span
                v-if="item.items"
                class="mdi mdi-chevron-right right-3.75 absolute inline-block"
              ></span>
            </a>

            <!-------------- Subitems ---------->
            <div
              class="pl-3.75 grid transition-all duration-300 ease"
              :class="item.open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <ul v-if="item.items" class="overflow-hidden">
                <li v-for="subitem in item.items" :key="subitem.label">
                  <RouterLink
                    v-if="subitem.to"
                    :to="subitem.to"
                    class="p-2.5 pb-1 text-[0.9375rem] block cursor-pointer relative"
                  >
                    <i class="w-11.25 inline-block text-[1.2rem] text-center"></i>
                    <span>{{ subitem.label }}</span>
                    <span
                      v-if="subitem.items"
                      class="mdi mdi-chevron-right right-3.75 absolute"
                    ></span>
                  </RouterLink>
                  <a
                    v-else
                    class="p-2.5 pb-1 text-[0.9375rem] block cursor-pointer relative"
                    @click="subitem.open = !subitem.open"
                  >
                    <i class="uil-home-alt w-11.25 inline-block text-[1.2rem] text-center"></i>
                    <span>{{ subitem.label }}</span>
                    <span
                      v-if="item.items"
                      class="mdi mdi-chevron-right right-3.75 absolute"
                    ></span>
                  </a>

                  <!-------------- Subitems2 ---------->
                  <div
                    class="pl-3.75 grid transition-all duration-300 ease"
                    :class="subitem.open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                  >
                    <ul v-if="subitem.items" class="overflow-hidden">
                      <li v-for="subitem2 in subitem.items" :key="subitem2.label">
                        <RouterLink
                          v-if="subitem2.to"
                          :to="subitem2.to"
                          class="p-2.5 pb-1 text-[0.9375rem] block cursor-pointer relative"
                        >
                          <i
                            class="uil-home-alt w-11.25 inline-block text-[1.2rem] text-center"
                          ></i>
                          <span>{{ subitem2.label }}</span>
                          <span
                            v-if="item.items"
                            class="mdi mdi-chevron-right right-3.75 absolute"
                          ></span>
                        </RouterLink>
                        <a
                          v-else
                          class="p-2.5 pb-1 text-[0.9375rem] block cursor-pointer relative"
                          @click="subitem2.open = !subitem2.open"
                        >
                          <i
                            class="uil-home-alt w-11.25 inline-block text-[1.2rem] text-center"
                          ></i>
                          <span>{{ subitem2.label }}</span>
                          <span
                            v-if="item.items"
                            class="mdi mdi-chevron-right right-3.75 absolute"
                          ></span>
                        </a>

                        <!-------------- Subitems3 ---------->
                        <div
                          class="pl-3.75 grid transition-all duration-300 ease"
                          :class="subitem2.open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                        >
                          <ul v-if="subitem2.items" class="overflow-hidden">
                            <li v-for="subitem3 in subitem2.items" :key="subitem3.label">
                              <RouterLink
                                v-if="subitem3.to"
                                :to="subitem3.to"
                                class="p-2.5 pb-1 text-[0.9375rem] block cursor-pointer relative"
                              >
                                <i
                                  class="uil-home-alt w-11.25 inline-block text-[1.2rem] text-center"
                                ></i>
                                <span>{{ subitem3.label }}</span>
                                <span
                                  v-if="item.items"
                                  class="mdi mdi-chevron-right right-3.75 absolute"
                                ></span>
                              </RouterLink>
                              <a
                                v-else
                                class="p-2.5 pb-1 text-[0.9375rem] block cursor-pointer relative"
                                @click="subitem3.open = !subitem3.open"
                              >
                                <i
                                  class="uil-home-alt w-11.25 inline-block text-[1.2rem] text-center"
                                ></i>
                                <span>{{ subitem3.label }}</span>
                                <span
                                  v-if="item.items"
                                  class="mdi mdi-chevron-right right-3.75 absolute"
                                ></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style></style>
