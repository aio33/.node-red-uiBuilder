<template>
    <div class="home-container">
        <div class="poste-container">
            <h1 class="fs-1">{{ title }}</h1>
            <p class="fs-2">{{ timer2 }}</p>
            <p class="fs-3">{{ count }}</p>
        </div>
    </div>
</template>
<style scoped>
.home-container {
    background-image: url(http://127.0.0.1:8080/fond.svg);
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.poste-container {
    width: 20%;
    height: 225px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid;
    padding: 10px;
    border-radius: 10px;
    border: 3px #BFBFBF !important;
    box-shadow: #808080 0px 3px 8px;
    border-radius: 40px 0 40px 0;
}
</style>
<script>
var title = "";
var count = 1;
var selectedOption = "Show"
module.exports = {
    data() {
        this.$root.$on("data-form-name", (msg) => {
            title = msg
            uibuilder.send({ name: title })
        });
        this.$root.$on("data-form-count", (msg) => {
            count = msg
            uibuilder.send({ count: count })
        });
        this.$root.$on("data-form-selectedOption", (msg) => {
            selectedOption = msg
            uibuilder.send({ selectedOption: selectedOption })
        });

        return {
            title: title,
            timer2: "",
            selectedOption: selectedOption,
            count: count,
            test: ""
        };
    },
    mounted() {
    },
    methods: {
    }
};
</script>
