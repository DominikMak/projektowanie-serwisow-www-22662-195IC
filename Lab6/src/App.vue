<template>
    <div id="app">
        <div class="inner">
            <div class="ratingContainer">
                <span class="bigRating" v-html="bigRating"></span>
                <div>
                    <Star
                        v-for="index in 5"
                        v-bind:key="index"
                        v-bind:weight="index"
                        v-bind:enabled="enabled"
                        v-bind:currentRating="currentRating"
                        v-on:lightUp="lightUpHandler"
                        v-on:lightDown="lightDownHandler"
                        v-on:rate="rateHandler"
                    ></Star>
                </div>
            </div>
            <Summary v-bind:ratings="ratings"></Summary>
        </div>
    </div>
</template>

<script>
import Star from "./components/Star.vue";
import Summary from "./components/Summary.vue";

export default {
    name: "App",
    components: { Star, Summary },
    data: function () {
        return {
            currentRating: 0,
            bigRating: "&#128566;", // neutralna emotka 😶
            enabled: true,
            ratings: [
                {
                    weight: 1,
                    votes: 0,
                },
                {
                    weight: 2,
                    votes: 0,
                },
                {
                    weight: 3,
                    votes: 0,
                },
                {
                    weight: 4,
                    votes: 0,
                },
                {
                    weight: 5,
                    votes: 0,
                },
            ],
        };
    },
    methods: {
        lightUpHandler: function (weight) {
        this.currentRating = weight;

        // wyświetlanie różnych emotek w zależności od oceny.
        if (weight == 1) {
            this.bigRating = "&#128549;"; // 😥
        }
        if (weight == 2) {
            this.bigRating = "&#128530;"; // 😒
        }
        if (weight == 3) {
            this.bigRating = "&#128528;"; // 😐
        }
        if (weight == 4) {
            this.bigRating = "&#128522;"; // 😊
        }
        if (weight == 5) {
            this.bigRating = "&#128525;"; // 😍
        }
      },
      lightDownHandler: function () {
          // wyszarzanie gwiazdek
          this.currentRating = 0;
          this.bigRating = "&#128566;"; // 😶
      },
      rateHandler: function (weight) {
        this.currentRating = weight;

        let rating = this.ratings.find((obj) => obj.weight == weight);
        rating.votes++;

        // blokowanie po zagłosowaniu
        this.enabled = false;

        // zapisywanie wyników
        localStorage.setItem("ratings", JSON.stringify(this.ratings));
        },
      },
    created: function () {
        if (localStorage.ratings) {
            this.ratings = JSON.parse(localStorage.ratings);
        }
    },
};
</script>

<!-- css dla aplikacji -->
<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:100, 300, 400);
/* ikona gwiazdki pobierana jest z font-awesome */
@import url(https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
#app {
    width: 400px;
}
.ratingContainer {
    float: left;
    width: 45%;
    margin-right: 5%;
    text-align: center;
}
.bigRating {
    color: #333333;
    font-size: 72px;
    font-weight: 100;
    line-height: 1em;
    padding-left: 0.1em;
}
</style>