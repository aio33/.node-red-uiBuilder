<template>
    <div class="form-container">
        <form @submit.prevent="sendName">
            <b-col>
                <b-modal id="modal-sm" centered size="sm" title="Submit Clicked">
                    Sample Modal
                </b-modal>
                <b-card bg-variant="light" style="margin-top:5%;">
                    <b-form-group label-cols-lg="3" label="Station" label-size="lg" label-class="font-weight-bold pt-0"
                        class="mb-0">

                        <b-form-group label="Name:" label-for="nested-name" label-cols-sm="3" label-align-sm="right">
                            <b-form-input v-model="formData.name" id="nested-name"></b-form-input>
                        </b-form-group>

                        <b-form-group label="Count:" label-for="nested-count" label-cols-sm="3" label-align-sm="right">
                            <b-button @click="resetCount()" variant="outline-secondary">Reset</b-button>
                        </b-form-group>

                        <b-form-group label="Button:" label-for="nested-button" label-cols-sm="3" label-align-sm="right"
                            v-model="formData.buttonStatus">
                            <b-button @click="sendLearnStatus()" variant="outline-primary">LEARN</b-button>
                            <b-button @click="sendDelStatus()" variant="outline-danger">DEL</b-button>
                        </b-form-group>

                        <b-form-group label="View:" label-cols-sm="3" label-align-sm="right" class="mb-0"
                            v-slot="{ ariaDescribedby }">
                            <b-form-radio-group class="pt-2" :options="['Show', 'Hide']" v-model="formData.selectedOption"
                                :aria-describedby="ariaDescribedby"></b-form-radio-group>
                        </b-form-group>
                    </b-form-group>
                    <input type="submit" v-b-modal.modal-sm style="float:right;" class="btn btn-info">
                </b-card>
            </b-col>
        </form>
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
    justify-content: center;
    align-items: center;
}
</style>

<script>

module.exports = {
    data() {
        return {
            formData: {
                'name': "",
                'count': 1,
                'selectedOption': "Show",
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
