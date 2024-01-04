<template>
    <div class="form-container">
        <a class="config-link " href="http://localhost:1880/Andon/#/formPostes" target="" @click="updateForm()">
            <div class="logo-conf"></div>
        </a>
        <div class="phones-container">
            <div class="colums-phones">
                <div class="phones-title"> <div class="logo-phone"></div> <h3 class="title-main">PHONE LEVEL 1</h3><p class="title-note">(+33)</p></div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <div class="colums-phones">
                <div class="phones-title"> <div class="logo-phone"></div> <h3 class="title-main">PHONE LEVEL 2</h3><p class="title-note">(+33)</p></div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <div class="colums-phones">
                <div class="phones-title"> <div class="logo-mails"></div> <h3 class="title-main">Mails</h3></div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="phones-rows">
                    <input type="text">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
        <div class="mail-settings-container">
            <div class="title-calendar">
                <div class="logo-calendar"></div>
                <h4>DAY AND TIME</h4>
                <h4>MAIL SENDING</h4>
            </div>
            <div class="day">
                <h5 class="day-time-title">DAY</h5>
                <select class="day-select">
                    <option value=""></option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                </select>
            </div>
            <div class="time">
                <div class="flex-time-title">
                    <h5 class="day-time-title">HOUR</h5><p class="day-time-title">(HH:MM:SS)</p>
                </div>
                <input type="time" step="1">
            </div>
            
            <div class="btn-calendar">
                <button type="button" class="btn btn-primary btn-separated" @click="refreshPage">SUBMIT</button>
                <button type="button" class="btn btn-primary" @click="refreshPage">CANCEL</button>
            </div>
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
    padding-top: 100px;
    display: flex;
    flex-direction: column;
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
    justify-content: space-between;
    flex-direction: row;
}

.mail-settings-container {
    box-shadow: 1px 1px 5px grey;
    background-color: white;
    border-radius: 20px 0px 20px 0px;
    padding: 20px;
    max-height: 40vw;
    overflow: auto;
    margin-top: 4vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.flex-time-title {
    display: flex;
}

.day-time-title {
    margin-bottom: 0;
    margin-right: 1vw;
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


.phones-title {
    display: flex;
    align-items: center;
    margin-bottom: 1vh;
    margin-left: 2vw;
}
.title-main {
    margin-top: 1vh;
}
.title-note {
    margin-top: 2.5vh;
    margin-left: 0.5vw;
}

.title-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1vh;
    margin-left: 2vw;
}
.logo-phone {
    background-image: url('../../img/mobile-screen-button-solid.svg');
    background-size: contain;
    background-repeat: no-repeat;
    height: 50px;
    width: 50px;
    filter: invert(1) brightness(0.33);
}

.logo-mails {
    background-image: url('../../img/envelope-regular.svg');
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 1vw;
    height: 50px;
    width: 50px;
    filter: invert(1) brightness(0.33);
}

.logo-calendar {
    background-image: url('../../img/calendar-days-regular.svg');
    background-size: contain;
    background-repeat: no-repeat;
    height: 50px;
    width: 50px;
    filter: invert(1) brightness(0.33);
    margin-bottom: 2vh;
}

.phones-rows {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1vh;
}

.day {
    display: flex;
    flex-direction: column;
}

.time {
    display: flex;
    flex-direction: column;
}
.btn-calendar {
    margin-right: 2vw;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.btn-separated {
    margin-right: 10px; /* Ajoutez une marge à droite pour séparer les boutons */
}

.day-select {
    width: 100%;
    height: 50%;
    background-color: transparent;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 2vw;
}

input[type=time] {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 2vw;
}

input[type=text] {
    width: 75%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 2vw;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-top: 1vh;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
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
}
</script>
