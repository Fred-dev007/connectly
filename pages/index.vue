<template>
<UContainer v-if="page">
  <UPageHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links"  />

<ULandingSection>
  <NuxtImg :alt="page.hero.image.alt"  :src="page.hero.image.src" />
</ULandingSection>

<ULandingSection v-for="(section,index) in page.sections" :key="index" :title="section.title" :description="section.description">

  <UPageGrid>
    <UPageCard v-for="(feature ,index) in section.features" :key="index" :title="feature.name" :description="feature.description" :icon="feature.icon" />
  </UPageGrid>

</ULandingSection>

<ULandingSection :title="page.features.title" :description="page.features.description">
  <UPageGrid>
    <ULandingCard v-for="(item , index) in page.features.items" :key="index" :title="item.title" :icon="item.icon" :description="item.description" />
  </UPageGrid>
</ULandingSection>

<ULandingCTA v-bind="page.cta"/>

</UContainer>
</template>

<script lang="ts" setup>
useHead({
  title:'Accueil - Connectly',
})

const {data:  page}= await useAsyncData('index', ()=>queryCollection('data').first())
</script>

<style>

</style>