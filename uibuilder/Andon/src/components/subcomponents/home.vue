<template>
    <div class="back-img">
        <h1 class="text-center mt-5">{{ lineName }}</h1>
        <div class="home-container">
            <!-- eslint-disable -->
            <template v-for="(item, index) in tableauDeDonnees">
                <div v-if="item" class="poste-container" :class="{
                    'hidden': !item.isEnable,
                    'off': item.status === 'off',
                    'level1': item.status === 'level1',
                    'level2': item.status === 'level2'
                }">
                    <h1 class="name">{{ item.name }}</h1>
                    <p class="timer">{{ item.timer }}</p>
                    <p class="count">{{ item.count }}</p>
                </div>
            </template>
            <!-- eslint-enable -->
        </div>
    </div>
</template>
<style scoped>
.home-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 85%;
}

.poste-container {
    height: 225px;
    max-width: 18%;
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
    flex: 1 0 21%;

}

.back-img {
    background-image: url(http://127.0.0.1:8080/fond.svg);
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.hidden {
    display: none;
}

.timer {
    font-size: 40px;
    font-weight: bold;
}

.count {
    font-size: 20px;
    font-weight: bold;
}

.name {
    font-weight: bold;
    font-size: 35px;
}

.off {
    background-color: rgba(255, 255, 255, 0.1)
}

.level1 {
    background-color: #FCC916
}

.level2 {
    background-color: #f85d5d
}
</style>
<script>
var title;
var count;
var selectedOption;
var buttonStatus;
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
        this.$root.$on("data-form-buttonStatus", (msg) => {
            buttonStatus = msg
            uibuilder.send({ buttonStatus: buttonStatus })
        });
        return {
            title: title,
            timer2: "",
            selectedOption: selectedOption,
            count: count,
            buttonStatus: buttonStatus,
            tableauDeDonnees: [],
            lineName: "",
            status: ""
        };
    },
    mounted() {

    },
    created() {
        uibuilder.onChange('msg', (msg) => {
            console.log('data !!', msg)
            this.tableauDeDonnees = msg.postes
            this.lineName = msg.lineName
        });
    },
    methods: {
    }
};
</script>
