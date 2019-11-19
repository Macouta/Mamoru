<template>
    <div>
        <div v-for="project in this.projects">
        {{ project.title }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tracker-list',
        data() {
            return {
                projects: []
            }
        },
        mounted() {
            this.projects = this.$page.frontmatter.projects
        }
    }
</script>

<style lang="scss" scoped>

</style>