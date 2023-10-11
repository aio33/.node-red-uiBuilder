<template>
    <div class="back-img">
        <div class="logo-container">
            <div class="my-container">
            </div>
        </div>
        <h1 class="text-center line-name">{{ lineName }}</h1>
        <div class="home-container">
            <!-- eslint-disable -->
            <template v-for="(item, index) in tableauDeDonnees">
                <div v-if="item" class="poste-container" :class="{
                    'hidden': !item.isEnable,
                    'off': item.status === 'off',
                    'level1': item.status === 'level1',
                    'level2': item.status === 'level2',
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
.header-container {
    display: flex;
}

.home-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 85%;
    column-gap: 1vw;
    padding: 20px;
    justify-content: center;
}

.poste-container {
    width: 350px;
    height: 350px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid;
    padding: 10px;
    border-radius: 10px;
    border: 3px #BFBFBF;
    box-shadow: #808080 0px 3px 8px;
    border-radius: 40px 0 40px 0;
    flex: 0 0 19%;

}

.back-img {
    position: relative;
    background-image: url('../../img/fond.svg');
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif !important;
    font-weight: 700 !important;
    color: #535353;
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
    background-color: white;
}

.level1 {
    background-color: #FCC916
}

.level2 {
    background-color: #f85d5d
}

.my-container {
    height: 110px;
    width: auto;
    background-image: url('../../img/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
}

.logo-container {
    position:absolute;
    top: 0;
    width: 200px;
    height: auto;
    padding: 20px 0 0 30px;
}

.line-name {
    font-weight: bold;
    font-size: 70px;
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
            status: "",
            selectedImage: null,
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
    },
};
</script>
