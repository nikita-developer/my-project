<template>
    <div class="page">
        <Header />
        <main class="main">
            <router-view></router-view>
        </main>
        <Footer />
    </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'
export default {
    components: { Header, Footer },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
