<template>
  <main class="page">
    <slot name="top" />
    <!-- TODO make it dynamic with frontmatter -->
    <Content class="theme-default-content">
    </Content>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  height 100vh
  // padding-bottom 2rem
  display block
</style>
