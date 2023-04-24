import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faPen, faTrash, faCheck, faBan, faUser, faCamera, faFloppyDisk, faRotate, faArrowLeft, faCalendar, faAddressCard, faPhone, faDumbbell,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';


// import { faPen} from '@fortawesome/free-solid-svg-icons'
// import '../src/assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'

library.add(faEye, faPen, faTrash, faCheck, faBan, faUser, faCamera, faFloppyDisk, faRotate, faArrowLeft, faCalendar, faAddressCard, faPhone, faDumbbell,faArrowRightFromBracket )

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Datepicker', VueDatepickerUi)
app.use(router)
app.mount('#app')


import 'bootstrap/dist/js/bootstrap'
