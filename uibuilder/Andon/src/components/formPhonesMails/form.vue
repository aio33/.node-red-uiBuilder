<template>
    <div class="form-container">
        <a class="config-link " href="http://localhost:1880/Andon/#/formPostes" target="" @click="updateForm()">
            <div class="logo-conf"></div>
        </a>
        <div class="phones-container">
            <div class="colums-phones">
                <h3 class="phones-title">PHONE LEVEL 1</h3>
                <div class="phones-rows">1</div>
                <div class="phones-rows">2</div>
                <div class="phones-rows">3</div>
                <div class="phones-rows">4</div>
            </div>
            <div class="colums-phones">
                <h3 class="phones-title">PHONE LEVEL 2</h3>
                <div class="phones-rows">1</div>
                <div class="phones-rows">2</div>
                <div class="phones-rows">3</div>
                <div class="phones-rows">4</div>
            </div>
            <div class="colums-phones">
                <h3 class="phones-title">MAILS</h3>
                <div class="phones-rows">1</div>
                <div class="phones-rows">2</div>
                <div class="phones-rows">3</div>
                <div class="phones-rows">4</div>
            </div>
        </div>
        <div class="mail-settings-container">
            
        </div>
    </div>
</template>
<style scoped>
.form-container {
    background-image: url('../../img/fond.svg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding: 25px;
    padding-top: 75px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif !important;
    color: #535353;
}

.phones-container {
    box-shadow: 1px 1px 5px grey;
    background-color: white;
    border-radius: 20px 0px 20px 0px;
    padding: 20px;
    max-height: 40vw;
    overflow: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}

.mail-settings-container {
    box-shadow: 1px 1px 5px grey;
    background-color: white;
    border-radius: 20px 0px 20px 0px;
    padding: 20px;
    max-height: 40vw;
    overflow: auto;
}

.lineName-container {
    box-shadow: 1px 1px 5px grey;
    background-color: white;
    border-radius: 20px 0px 20px 0px;
    min-width: 30vw;
    padding: 20px;
    text-align: center;
}

#nested-name {
    width: 200px;
}

.submit-container {
    margin-top: 10px;
    display: flex;
    justify-content: end;
}

.lineName-container h1 {
    font-size: 2vw;
}

.form-title p {
    font-size: 2vw;
    font-weight: bold;
}

.logo-reboot {
    background-image: url('../../img/reboot.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    margin: auto;
    background-color: transparent;
    border: none;
}

.enable {
    background-image: url('../../img/enable.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
}

.disable {
    background-image: url('../../img/disable.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
}

.config-link {
    position: absolute;
    right: 50px;
    top: 35px;
}

.logo-conf {
    background-image: url('../../img/picto-parametre.png');
    background-size: cover;
    height: 50px;
    width: 50px;
}

.forms-container {
    height: 70vh;

}
</style>

<script>
module.exports = {
    data() {
        return {
            postes: [
                {
                    name: "",
                    isEnable: false,
                    count: 0,
                    isLearning: false
                }
            ],
            updateForm: false,
            selectedLearnIndex: null,
            /*
            formData: {
                'name': "",
                'count': 0,
                'selectedOption': "",
                'buttonStatus': null,
            },
            */
            lineName: "",
            takTime: 0,
            storedLineName: "",
            storedTakTime: 0,
            isActive: false
        };
    },
    mounted() {
        var boutons = document.querySelectorAll('b-button');
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



        uibuilder.onChange('msg', (msg) => {
            if (!this.updateForm) {
                this.postes = msg.postes.filter(item => item !== null);
                this.lineName = msg.lineName;
                this.takTime = msg.takTime
                this.updateForm = true
            }
            switch (msg.modal) {
                case 'appuiBtn':
                    console.log('msg: ', msg)
                    alertBtn.style.display = "block"
                    break;
                case 'success':
                    alertBtn.style.display = "none"
                    alertSuccess.style.display = "block"
                    console.log('onChange', alertSuccess.style.display)
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        this.selectedLearnIndex = null;
                        boutons.forEach(function (bouton) {
                            if (bouton.hasAttribute('disabled')) {
                                bouton.removeAttribute('disabled');
                            }
                        });
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
        },
        resetCount(index) {
            this.postes[index].count = 0
            uibuilder.send({
                'topic': 'setGlobalVariable',
                'payload': {
                    'postes': this.postes,
                    'lineName': this.lineName,
                    'takTime': parseFloat(this.takTime)
                }
            })

        },
        sendLearnStatus(index) {
            this.selectedLearnIndex = index
            this.postes[index].isLearning = true
            uibuilder.send({
                'topic': 'lrn-' + index,
            })
        },
        sendDelStatus(index) {
            uibuilder.send({
                'topic': 'del-' + index,
            })
        },
        sendVariables() {
            uibuilder.send({
                'topic': 'setGlobalVariable',
                'payload': {
                    'postes': this.postes,
                    'lineName': this.lineName,
                    'takTime': parseFloat(this.takTime)
                }
            })
        },
        reboot() {
            uibuilder.send({
                'topic': 'reboot'
            })
        },
        toggle() {
            console.log(this.isActive)
            this.isActive = !this.isActive
        },
        sendPostes() {
            uibuilder.send({
                'topic': 'setGlobalVariable',
                'payload': {
                    'postes': this.postes,
                    'lineName': this.lineName,
                    'takTime': parseFloat(this.takTime)
                }
            })
        },
        sendEnable(index) {
            this.postes[index].isEnable = !this.postes[index].isEnable;
            uibuilder.send({
                'topic': 'setGlobalVariable',
                'payload': {
                    'postes': this.postes,
                    'lineName': this.lineName,
                    'takTime': parseFloat(this.takTime)
                }
            })
        }
    },
    watch: {
        /*
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
    */
    }
}
</script>
