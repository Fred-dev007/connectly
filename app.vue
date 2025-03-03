<script setup lang="ts">
const colorMode = useColorMode();
const color = computed(() => colorMode.value === 'dark' ? 'white' : 'black'); 
   useHead({
       title: 'Connectly',
       htmlAttrs: {
           lang: 'fr',
       },
       link:[
         {
            rel: 'icon',
            href: '/favicon.ico',
         }
       ],
       meta:[
         {
            charset: 'utf-8',
         },
         {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
         },
         {
            name: 'theme-color',
            content: color,
         }
       ]
   });
</script>

<template>
<NuxtLayout >
   <NuxtPage />
</NuxtLayout>
</template>
