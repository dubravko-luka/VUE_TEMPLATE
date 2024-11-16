<template>
  <header class="p-3 h-navigator bg-navigator">
    <div class="navigation h-full bg-white sticky top-0 z-10 flex justify-between items-center gap-2 rounded-xl p-2">
      <div class="flex items-center justify-center gap-3 992:pl-2 pl-9">
        <p class="uppercase font-bold tracking-widest">Logo</p>
      </div>
      <div class="user-info user-info relative">
        <div class="w-6 h-6 rounded-full overflow-hidden border border-solid border-black">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user_info" class="avatar object-cover" />
        </div>
        <div class="user-info-popup user-info-popup flex flex-wrap content-between gap-y-2">
          <p class="w-full text-sm text-white text-center uppercase font-bold">John Doe</p>
          <button class="w-full text-white bg-red-600 hover:bg-red-700 rounded-md py-1">Logout</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationApp'
});
</script>

<style lang="sass" scoped>
.user-info-popup
  position: absolute
  top: 110%
  right: 0px
  width: 200px
  padding: 10px
  border-radius: 10px
  visibility: hidden
  background: var(--background-navigator)
  transition: top linear 0.2s
  box-shadow: 0px 0px 5px 0px #fff

.user-info
  &:hover
    .user-info-popup
      visibility: visible
      top: 100%
</style>
