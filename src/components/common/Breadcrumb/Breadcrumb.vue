<template>
  <nav
    class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <span
          v-if="breadcrumbs[0] && breadcrumbs[0].to === v1.dashboard"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
            />
          </svg>
          {{ menu.find((item) => item.to === v1.dashboard)?.name }}
        </span>
        <router-link
          v-else
          :to="v1.dashboard"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
            />
          </svg>
          {{ menu.find((item) => item.to === v1.dashboard)?.name }}
        </router-link>
      </li>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <div class="flex items-center" v-if="breadcrumb && breadcrumb.to !== v1.dashboard">
          <svg
            class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
          <span
            v-if="index === breadcrumbs.length - 1"
            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white capitalize"
          >
            {{ breadcrumb.name }}
          </span>
          <router-link
            v-else
            :to="breadcrumb.to"
            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white capitalize"
          >
            {{ breadcrumb.name }}
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { v1 } from '@/router/v1/config';
import { menu } from '@/utils/constants';
import { getBreadcrumb } from '@/utils/helpers';
import type { TypeBreadcrumb } from '@/types/types';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const { currentRoute } = useRouter();
    const breadcrumbs = ref<TypeBreadcrumb[]>(getBreadcrumb(currentRoute.value.path));

    watch(
      () => currentRoute.value,
      () => {
        breadcrumbs.value = getBreadcrumb(currentRoute.value.path);
      }
    );

    return { menu, v1, breadcrumbs };
  }
});
</script>

<style lang="sass" scoped></style>
