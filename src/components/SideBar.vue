<template>
    <div class="side_bar_component">
        <div class="side_bar_header">
            <button @click="$emit('sideBarToggled')">=</button>
        </div>
        <div class="side_bar_content">
            <div>
                <router-link :to="{ name: 'about' }">about</router-link>
            </div>
            <div>
                <router-link :to="{ name: 'contact' }">contact</router-link>
            </div>
            <div>
                <router-link :to="{ name: 'services' }">services</router-link>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
.regular_layout_wrapper {
    display: flex;
}

.side_bar_component {
    background: beige;

    &.maxSideBar {
        width: 10%;
    }

    &.miniSideBar {
        width: 3%;
    }

    .side_bar_header {
        text-align: end;
    }
}
</style>