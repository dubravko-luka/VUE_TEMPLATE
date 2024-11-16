<template>
  <div v-if="showMenu" @click.prevent="showMenu = false" class="backdrop fixed top-0 left-0 w-screen h-screen bg-black z-10 opacity-30" />
  <aside class="sidebar z-20 h-full bg-sidebar min-w-sidebar p-3 pt-9 992:pt-0 992:pr-0" :class="{ 'show-menu': showMenu }">
    <nav class="h-full bg-white p-2 rounded-xl">
      <div class="grid gap-y-1">
        <router-link
          v-for="item in menu"
          :key="item.id"
          :to="{ name: item.name }"
          class="p-2 text-sidebar font-bold rounded-lg cursor-pointer hover:bg-sidebar hover:text-white transition-colors duration-500 ease-out"
          :class="{ '!bg-sidebar !text-white': current === item.id }"
        >
          {{ item.name }}
        </router-link>
      </div>
    </nav>
    <img
      @click.prevent="showMenu = false"
      src="@/assets/images/resources/close-menu.png"
      alt="icon-close-menu"
      class="992:hidden absolute top-2 right-2 w-4 h-4 cursor-pointer"
    />
  </aside>
  <img
    @click.prevent="showMenu = true"
    src="@/assets/images/resources/open-menu.png"
    alt="icon-open-menu"
    class="992:hidden block fixed top-navigator-half -translate-y-2/4 left-6 z-10 w-5 h-5 cursor-pointer"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { menu } from '@/utils/constants';
import { useRouter } from 'vue-router';
import type { TypeMenu } from '@/types/types';

export default defineComponent({
  name: 'SidebarApp',
  setup() {
    const showMenu = ref<boolean>(false);
    const current = ref<number>(1);
    const { currentRoute } = useRouter();

    onMounted(() => {
      handleActiveMenu();
    });

    watch(
      () => currentRoute.value,
      () => handleActiveMenu()
    );

    const handleActiveMenu = () => {
      const currentPathname = currentRoute.value;
      menu.forEach((item: TypeMenu) => {
        if (item.to === currentPathname.path) {
          current.value = item.id;
          showMenu.value = false;
        }
      });
    };

    return {
      showMenu,
      menu,
      current
    };
  }
});
</script>

<style lang="sass" scoped>
@media (max-width: 991px)
  .sidebar
    position: fixed
    left: calc(var(--min-width-sidebar) * -1)
    top: 0
    transition: all 300ms linear

  .sidebar
    &.show-menu
      left: 0
</style>
