<template>
    <div></div>
</template>

<script>
    export default {
        name: "Logout",
        created() {
            this.$store.dispatch('logoutUser')
                .then(() => {
                    this.$router.push({name: 'Main'})
                })
        }
    }
</script>

<style scoped>

</style>