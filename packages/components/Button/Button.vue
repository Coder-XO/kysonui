<script setup lang="ts">
    defineOptions({
        name: 'OyButton',
    })
</script>

<template>
    <button style="background-color: red;">
        <slot></slot>
    </button>
</template>