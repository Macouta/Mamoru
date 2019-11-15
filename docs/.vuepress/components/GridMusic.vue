<template>
  <div>
    <div class="vinyl-wrapper" v-for="vinyl in vinylesList">
      <img :src="vinyl.basic_information.thumb" />
      <div>{{ vinyl.basic_information.title }} - {{ vinyl.basic_information.artists[0].name}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const DISCOGS_API_KEY =
  "Discogs token=AJeazJvGtLIhqDtGMtNXsBatKwOsTgyyRXuESsEc";
const BASE_URL = "https://api.discogs.com/";

export default {
  name: "grid-music",
  data() {
    return {
      vinyles: []
    };
  },
  props: ["url"],
  computed: {
    vinylesList() {
      return this.vinyles;
    }
  },
  mounted() {
    axios
      .request({
        baseURL: BASE_URL,
        method: "get",
        url: this.$props.url,
        headers: {
          Authorization: DISCOGS_API_KEY
        }
      })
      .then(response => {
        this.vinyles =
          this.$props.url === "/users/Macouta/wants"
            ? response.data.wants
            : response.data.releases;
      });
  }
};
</script>

<style lang="scss" scoped>
</style>