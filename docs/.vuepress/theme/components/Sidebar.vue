<template>
  <aside class="sidebar">
    <NavLinks/>
    <slot name="top"/>
    <div class="sidebar-header">
      <div class="sidebar-title">
        {{ this.$page.frontmatter.title }}
      </div>
    </div>
    <SidebarLinks :depth="0" :items="items"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items'],
}
</script>

<style lang="stylus">
.sidebar-header
    position relative
    height 250px
    max-height 250px
    margin-left: 2rem;
    margin-right: 2rem;
    background-repeat no-repeat 
    background-position center
    background-position 50% 50%
    background-image url('/img/raining_men_depth_1.png'), url('/img/raining_men_depth_2.png')
    border: 2px solid $textColor
    &:before
      content ''
      position absolute
      top -15px
      left -15px
      width 40px
      height 40px
      background-image url('/img/cadre.png')
      transform rotate(-90deg)
      background-size cover;
    &:after
        content ''
        position absolute
        bottom -15px
        right -15px
        width 40px
        height 40px
        background-image url('/img/cadre.png')
        transform rotate(90deg)
        background-size cover;

.sidebar-title
  font-family 'Neue Droschke'
  font-size 30px
  font-weight 600
  text-transform uppercase
  text-align center
  position: absolute
  transform : translate(-50%, -50%)
  top: 50%;
  left: 50%;
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1
      font-weight bold
    & > li:not(:first-child)
      margin-top .25rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
