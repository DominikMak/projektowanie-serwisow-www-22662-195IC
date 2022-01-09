<!-- podsumowanie wszystkich ocen -->
<template>
    <div class="summaryContainer">
        <ul>
            <li v-for="rating in ratings" v-bind:key="rating.weight">
                {{ rating.weight }}<i class="icon-star"></i>: {{ rating.votes }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Summary",
    props: ["ratings"]
};
</script>

<style scoped>
.summaryContainer {
    float: left;
    width: 50%;
    font-size: 13px;
}
</style>