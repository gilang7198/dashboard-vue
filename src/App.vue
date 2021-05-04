<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible :style="{ height: '100vh'}">
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-menu-item key="1" @click="() => (next())">
            <a-icon type="user" />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2" v-bind:to="'about'">
            <a-icon type="video-camera" />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
            <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import router from 'vue-router'

export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleClick() {
      router.push('About')
      console.log('dimari')
    }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>