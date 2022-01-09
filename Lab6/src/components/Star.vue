<template>
    <i
        v-bind:class="getClass()"
        v-on:mouseover="mouseoverHandler()"
        v-on:mouseleave="mouseleaveHandler()"
        v-on:click="clickHandler()"
    ></i>
</template>

<!-- wywoływanie funkcji zdefiniowanych w App.vue --> 
<script>
    export default {
        name: "Star",
        data: function() {
            return {
                hover: false,
            };
        },
        props: ["weight", "enabled", "currentRating"],
        methods: {
            getClass: function() {
                var baseClass = "icon-star";
                if (this.hover || this.currentRating >= this.weight){
                    baseClass += " hover";
                }
                return baseClass;
            },
            mouseoverHandler: function (){
                if(this.enabled) {
                    this.$emit("lightUp", this.weight);
                    this.hover = true;
                }
            },
            mouseleaveHandler: function() {
                if (this.enabled) {
                    this.$emit("lightDown", this.weight);
                    this.hover = false;
                }
            },
            clickHandler: function() {
                if (this.enabled) {
                    this.$emit("rate", this.weight);
                } else {
                    alert("Already voted");
                }
            },
        },
    };
</script>

<style scoped>
    i.icon-star {
        font-size: 20px;
        color: #e3e3e3;
        margin-bottom: 0.5em;
    }
    i.icon-star.hover {
        color: yellow;
    }
</style>
