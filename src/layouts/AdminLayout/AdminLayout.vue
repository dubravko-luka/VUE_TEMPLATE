<template>
  <div class="w-screen h-screen bg-gray-100">
    <navigation-app />
    <div class="h-minus-navigator w-full flex relative">
      <sidebar-app />
      <div class="bg-main pb-3 px-3 h-minus-navigator w-full">
        <div class="h-full w-full bg-white rounded-xl overflow-hidden">
          <main class="h-minus-footer p-2 relative">
            <div class="h-breadcrumb p-2 absolute top-0 left-0 w-full">
              <breadcrumb />
            </div>
            <div class="h-full pt-breadcrumb overflow-hidden">
              <div class="overflow-auto h-full"><router-view /></div>
            </div>
          </main>
          <footer-app />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavigationApp from '@/layouts/NavigationApp/NavigationApp.vue';
import FooterApp from '@/layouts/FooterApp/FooterApp.vue';
import SidebarApp from '@/layouts/SidebarApp/SidebarApp.vue';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb.vue';

import { defineComponent, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { validateRouter } from '@/utils/helpers';

export default defineComponent({
  name: 'AdminLayout',
  components: { NavigationApp, FooterApp, SidebarApp, Breadcrumb },
  setup() {
    const router = useRouter();
    onMounted(() => {
      if (router?.currentRoute?.value?.path && router?.currentRoute?.value?.path !== '/') validateRouter(router?.currentRoute?.value?.path);
    });

    watch(
      () => router.currentRoute.value.path,
      () => validateRouter(router.currentRoute.value.path)
    );
    return {};
  }
});
</script>

<style lang="sass" scroped></style>
