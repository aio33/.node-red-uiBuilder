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

                        <b-form-group label="Button:" label-for="nested-button" label-cols-sm="3" label-align-sm="right">
                            <b-button variant="outline-primary">LEARN</b-button>
                            <b-button variant="outline-danger">DEL</b-button>
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
                'selectedOption': "Show"
            }
        };
    },
    mounted() {
    },
    methods: {
        sendName(submitEvent) {
            this.formData = submitEvent.elements
            console.log("form-data => ", submitEvent.originalTarget)
        },
        resetCount() {
            this.formData.count = 0;
        }
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

        }
    }
}
</script>
