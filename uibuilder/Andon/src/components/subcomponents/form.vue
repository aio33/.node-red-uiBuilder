<template>
    <div class="form-container">
        <div class="form-title">
            <p>Name</p>
            <p>Count</p>
            <p>Button</p>
            <p>View</p>
        </div>
        <div class="forms-container">
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
            <b-form inline @submit.prevent="sendName" class="form-div">
                <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                <div>
                    <b-button v-model="formData.buttonStatus" @click="sendLearnStatus()"
                        variant="outline-primary">LEARN</b-button>
                    <b-button v-model="formData.buttonStatus" @click="sendDelStatus()"
                        variant="outline-danger">DEL</b-button>
                </div>
                <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                    :aria-describedby="ariaDescribedby"></b-form-radio-group>
            </b-form>
        </div>
        <div>
            <b-modal id="bv-modal-example" ref="bvModal" hide-footer>
                <template #modal-title>
                    <h1>Veuillez appuyer sur le bouton pour l'assigner au Poste</h1>
                </template>
            </b-modal>

            <div id="alert-btn">
                <b-alert show variant="success">Veuillez appuyer sur le bouton pour l'assigner au Poste</b-alert>
            </div>
            <div id="alert-success">
                <b-alert show variant="success">Bouton assigné avec succès </b-alert>
            </div>
            <div id="alert-delete">
                <b-alert show variant="success">Bouton supprimé avec succès </b-alert>
            </div>
            <div id="alert-andon">
                <b-alert show variant="danger">Andon en cours</b-alert>
            </div>
            <div id="alert-assigne">
                <b-alert show variant="danger">Bouton déjà assigné</b-alert>
            </div>

        </div>
    </div>
</template>
<style scoped>
.form-container {
    background-image: url(http://127.0.0.1:8080/fond.svg);
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 25px;
}

.form-title {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.form-div {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.forms-container {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>

<script>

module.exports = {
    data() {
        return {
            formData: {
                'name': "",
                'count': 0,
                'selectedOption': "",
                'buttonStatus': null,
            },
        };
    },
    mounted() {
        var alertBtn = document.getElementById('alert-btn')
        alertBtn.style.display = "none"
        var alertSuccess = document.getElementById('alert-success')
        alertSuccess.style.display = "none"
        var alertDelete = document.getElementById('alert-delete')
        alertDelete.style.display = "none"
        var alertAssigne = document.getElementById('alert-assigne')
        alertAssigne.style.display = "none"
        var alertAndon = document.getElementById('alert-andon')
        alertAndon.style.display = "none"

        uibuilder.onChange('msg', function (msg) {
            switch (msg.modal) {
                case 'appuiBtn':
                    alertBtn.style.display = "block"
                    break;
                case 'success':
                    alertBtn.style.display = "none"
                    alertSuccess.style.display = "block"
                    console.log('onChange', alertSuccess.style.display)
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        alertSuccess.style.display = "none";
                    }, 0);
                    break;
                case 'andon':
                    alertBtn.style.display = "none"
                    alertAndon.style.display = "block"
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        alertAndon.style.display = "none";
                    }, 0);
                    break;
                case 'delete':
                    alertBtn.style.display = "none"
                    alertDelete.style.display = "block"
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        alertDelete.style.display = "none";
                    }, 0);
                    break
                case 'assigne':
                    alertBtn.style.display = "none"
                    alertAssigne.style.display = "block"
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        alertAssigne.style.display = "none";
                    }, 0);
                    break
                default:
            }
        });
    },

    methods: {
        sendName(submitEvent) {
            this.formData = submitEvent.elements
        },
        resetCount() {
            this.formData.count = 0;
        },
        sendLearnStatus() {
            this.formData.buttonStatus = "learn"
        },
        sendDelStatus() {
            this.formData.buttonStatus = "del"
        },
    },
    watch: {
        'formData.name': {
            handler: function () {
                this.$root.$emit("data-form-name", this.formData.name)
            },

        },
        'formData.count': {
            handler: function () {
                this.$root.$emit("data-form-count", this.formData.count)
            },

        },
        'formData.selectedOption': {
            handler: function () {
                this.$root.$emit("data-form-selectedOption", this.formData.selectedOption)
            },

        },
        'formData.buttonStatus': {
            handler: function () {
                this.$root.$emit("data-form-buttonStatus", this.formData.buttonStatus)
            },

        },

    }
}
</script>
