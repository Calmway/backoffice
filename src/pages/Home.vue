<script setup lang="ts">
import {useAuthStore} from '../store/auth';
const authStore = useAuthStore();
</script>

<template>
    <button @click="authStore.letsgo">123123</button>
</template>

<style scoped>
</style>
