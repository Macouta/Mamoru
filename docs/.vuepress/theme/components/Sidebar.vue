<template>
  <aside class="sidebar">
    <!-- <div class="sidebar-group site-name"> -->
      <!-- <router-link :to="$localePath" class="home-link">
        <span
          ref="siteName"
          class="site-name"
          v-if="$siteTitle"
          :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span>
      </router-link> -->
    <!-- </div> -->
    <SidebarLinks :depth="0" :items='items' />
    <div class="sidebar-group sidebar-cmd">
      root@Mamoru {{ this.$frontmatter.path }}
      <input v-on:keyup.enter="submit()" id="cmd" name="cmd" />
    </div>

  </aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "Sidebar",

  components: { SidebarLinks, NavLinks },
  mounted() {
    console.log("cc")
    window.addEventListener('keyup', focus())
  },
  props: ["items"],
  methods: {
    focus: function(e) {
      alert("focus")
    },
    submit: function(e) {
      alert("submit")
    }
  }
};
</script>

<style lang="stylus">
.sidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .sidebar-group {
    padding: 0.35rem 1.5rem 0.35rem 1.25rem
  }

  .sidebar-cmd {
    display flex
    input {
      font-family "CourierPrimeCode"
      width 50px
      border none
      background-color $backgroundColor
      color $textColor
      font-size 16px
      // background-color white
    }
  }


  .nav-links {
    display: none;
    border-bottom: 1px solid $borderColor;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 600;
    }

    .nav-item, .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  & > .sidebar-links {
    padding: 1.5rem 0;

    & > li > a.sidebar-link {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    .nav-links {
      display: block;

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    & > .sidebar-links {
      padding: 1rem 0;
    }
  }
}
</style>
