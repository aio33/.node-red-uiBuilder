<template>
    <div class="home-container">
        <div class="poste-container">
            <h1>{{ title }}</h1>
            <p>{{ timer2 }}</p>
            <p>{{ count }}</p>
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
}

.poste-container {
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    padding: 10px;
    border-radius: 10px;
    height: fit-content;
}
</style>
<script>
module.exports = {
    data() {
        return {
            count: "",
            title: "",
            status: "",
            timer2: ""
        };
    },
    mounted() {
        uibuilder.onChange('msg', (msg) => {
            console.log('>> msg recvd >>', msg, this)

            this.title = msg.title
            this.count = msg.count
            this.status = msg.status
            this.timer2 = msg.timer2
        })
    },
    methods: {
    },
}
</script>
