import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css"

export const toastOptions = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 10,
    newestOnTop: true,
    position: "bottom-right",
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
};

export const toast = Toast;