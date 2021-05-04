<template>
  <div class="home">
    <a-layout id="components-layout-demo-custom-trigger">
      <sidebar />
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="handleClick" />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex"
  import Sidebar from "@/components/Sidebar"
  export default {
    name: 'Home',
    components: {
      Sidebar,
    },
    computed: {
      ...mapGetters({
        collapsed: 'side/collapseData',
        isLoggedIn: 'auth/isLoggedIn'
      })
    },
    methods: {
      handleClick() {
        this.$store.dispatch('side/setCollapse', !this.collapsed)
      },
    }
  }
</script>