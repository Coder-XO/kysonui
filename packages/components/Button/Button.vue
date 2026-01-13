<script setup lang="ts">
    import type { ButtonProps } from './type'
    import { ref } from 'vue'

    defineOptions({
        name: 'KyButton',
    })

    withDefaults(defineProps<ButtonProps>(), {
        tag: 'button',
        nativeType: 'button'
    })

    const buttonRef = ref<HTMLButtonElement>();

    defineExpose({
        buttonRef,
    })

</script>

<template>
    <component 
        :is="tag" 
        ref="buttonRef" 
        class="ky-button"
        :type="tag === 'button' ? nativeType : void 0" 
        :disabled="disabled || loading ? true : void 0" 
        :loading="loading" 
        :icon="icon" 
        :circle="circle"
        :plain="plain" 
        :round="round"
        :class="{
            [`ky-button--${type}`]: type,
            [`ky-button--${size}`]: size,
            'is-disabled': disabled,
            'is-loading': loading,
            'is-circle': circle,
            'is-plain': plain,
            'is-round': round,
        }"
    >
        <slot></slot>
    </component>
</template>
