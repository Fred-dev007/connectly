<script setup lang="ts">
const links = [
  {
    label: 'Ressources',
    children: [
      { label: 'Starter Kits' },
      { label: 'Release Notes' },
      { label: 'Blog', },
      { label: 'Partners', },
      { label: 'News', },
      { label: 'Jobs', },
      { label: 'Careers', },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'Cloud' },
      { label: 'Forge' },
      { label: 'Nightwatch' },
      { label: 'Nova' },
    ]
  },
  {
    label: 'Packages',
    children: [
      { label: 'Cashier' },
      { label: 'Dusk' },
      { label: 'Horizon' },
      { label: 'Octane' },
      { label: 'Scout' },
      { label: 'Pennant' },
      { label: 'Pint' },
    ],
  }
];
</script>

<template>
 <UFooter>
  <template #top>
    <UContainer>
      <UFooterColumns :links="links">
        <template #right>
          <form>
            <UFormfield name="email" label="S'inscrire à notre newsleter" size="lg"> 
              <UInput type="email" class="w-full" placeholder="Entrez votre email">
              <template #trailing>
                <UButton
                type="submit"
                size="xs"
                color="orange"
                label="S'inscrire"
                />
              </template>
            </UInput>
            </UFormfield>
          </form> 
        </template>
      </UFooterColumns>
    </UContainer>
  </template>
  <template #left>
    <p class="test-sm">
      Copyright &copy; {{ new Date().getFullYear() }}. Tous droits résrvés
    </p>
  </template>
  <template #center>
    <UButton color="neutral" to="https://github.com/Fred-dev007/todolist" target="_blank" icon="devicon:githubcodespaces"/>
  </template> 
</UFooter>
</template>

<style scoped>

</style>
