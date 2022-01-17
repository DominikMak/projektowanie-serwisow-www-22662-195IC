<template>
    <span>
        <jeszcze-hero></jeszcze-hero>
        <jeszcze-first></jeszcze-first>
        <jeszcze-second></jeszcze-second>
    </span>
</template>

<script>
import JeszczeHero from '@/components/JeszczeHero';
import JeszczeFirst from '@/components/JeszczeFirst';
import JeszczeSecond from '@/components/JeszczeSecond';

export default {
    name: 'jeszcze',
    components: {
        JeszczeHero,
        JeszczeFirst,
        JeszczeSecond
    }
};
</script>