<template>
    <nav class="nav">
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
    </nav>
</template>

<script>
export default {
    methods: {
        log() {
            console.log(1)
        },
    },
    data() {
        return {
            items: [
                {
                    label: 'Главная',
                    to: '/',
                },
                {
                    label: 'Контакты',
                    to: 'contacts',
                },
                {
                    label: 'Работы',
                    to: 'jobs',
                },
                {
                    label: 'Выход',
                    icon: 'pi pi-fw pi-power-off',
                    command: this.log,
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
