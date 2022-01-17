<template>
    <span>
        <ciekawe-hero></ciekawe-hero>
        <ciekawe-first></ciekawe-first>
        <ciekawe-second></ciekawe-second>
        <ciekawe-third></ciekawe-third>
    </span>
</template>

<script>
import CiekaweHero from '@/components/CiekaweHero';
import CiekaweFirst from '@/components/CiekaweFirst';
import CiekaweSecond from '@/components/CiekaweSecond';
import CiekaweThird from '@/components/CiekaweThird';

export default {
    name: 'ciekawe',
    components: {
        CiekaweHero,
        CiekaweFirst,
        CiekaweSecond,
        CiekaweThird
    }
};
</script>