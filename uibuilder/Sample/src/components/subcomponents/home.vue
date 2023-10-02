<template>
    <div>
        <div class="home-container">
            <!-- eslint-disable-next-line vue/no-v-for-template-key -->
            <template v-for="(item, index) in tableauDeDonnees" :key="`item-${index}`">
                <div class="poste-container" :class="{ 'hidden': !item.isEnable }">
                    <h1 class="fs-1">{{ item.name }}</h1>
                </div>
            </template>
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
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
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

.hidden {
    display: none;
}
</style>
<script>
var title;
var count;
var selectedOption;
var buttonStatus;
module.exports = {
    data() {
        /*
        uibuilder.onChange('msg', function (msg) {
            postes = msg.array
            /*
            for (let index = 1; index < msg.array.length; index++) {
                console.log(msg.array[index].name)
                postes[index] = {
                    "name": msg.array[index].name
                }
            }
            console.log(postes)

        });
        console.log(("data !!!"), postes)
        this.postes = [
            {
                "name": '1'
            },
            {
                "name": "2"
            }
        ]
        */


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
            tableauDeDonnees: []
        };
    },
    mounted() {

    },
    created() {
        uibuilder.onChange('msg', (msg) => {
            this.tableauDeDonnees = msg.postes
        });
    },
    methods: {
    }
};
</script>
