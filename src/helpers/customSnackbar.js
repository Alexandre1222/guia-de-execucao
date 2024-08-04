// src/snackbar.js
import { reactive } from 'vue';

export const snackbarState = reactive({
    show: false,
    message: '',
    color: 'success',
    timeout: -1,
});

export function showSnackbar(message, details= null, color = 'success', vertical = false, timeout = 5000) {
    snackbarState.message = message;
    snackbarState.details = details;
    snackbarState.color = color;
    snackbarState.timeout = timeout;
    snackbarState.show = true;
}