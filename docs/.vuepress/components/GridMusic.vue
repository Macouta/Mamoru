<template>
  <div v-for="vinyl in vinylesList">
    {{ vinyl.basic_informations.tittle }}
  </div>
</template>

<script>
import axios from 'axios'

const DISCOGS_API_KEY = 'AJeazJvGtLIhqDtGMtNXsBatKwOsTgyyRXuESsEc'
const BASE_URL = 'https://api.discogs.com/'
const URL_FOLDER = '/users/Macouta/collection/folders/0/releases'

export default {
    name: 'grid-music',
    data() {
        return {
            vinyles: []
        }
    },
    computed: {
    vinylesList() {
        return this.vinyles
    }
    },
  mounted() {
    axios
      .request({
        baseURL: BASE_URL,
        method: "get",
        url: URL_FOLDER,
        headers: {
          Authorization: DISCOGS_API_KEY
        }
      })
      .then(response => (this.vinyles = response.data.releases));
  }
};
</script>

<style lang="scss" scoped>
</style>