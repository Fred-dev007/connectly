<script setup lang="ts">
const links = [
  {
    label:'Blog',
    to:'/blog',
  },
  {
    label:'A propos',
    to:'/about',
  }
];
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <img src="/logo.png" alt="Logo de Connectly" class="w-auto h-6 shrink-0">
      </NuxtLink>
    </template>

    <template #center >
      <UHeaderLinks :links="links" />
    </template>
    
    <template #right>
      <UButton label="Se connecter" variant="solid" color="orange"/>
      <UColorModeButton/>
    </template>

    <template #panel>
      <UAsideLinks :links="links" />
    </template>
  </UHeader>
</template>

<style scoped>

</style>
