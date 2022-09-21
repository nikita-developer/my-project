<template>
    <header class="header">
        <Menubar :model="items">
            <template #start>
                <img
                    alt="logo"
                    src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                    height="40"
                    class="mr-2"
                />
            </template>
        </Menubar>
    </header>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Главная',
                    to: '/home',
                },
                {
                    label: 'Контакты',
                    to: '/contacts',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
