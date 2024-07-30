// store/useAuth.js
import {onMounted, ref} from 'vue';
import {defineStore} from 'pinia';

export const useAuth = defineStore('counter', () => {
    const randomUser = ref({});

    async function generateUser() {
        fetch('https://randomuser.me/api/')
            .then((res) => res.json()) // Converte o corpo da resposta para JSON
            .then((data) => {
                randomUser.value = data.results[0]; // Armazena o primeiro usuário retornado
            })
            .catch((error) => {
                console.error('Error fetching user:', error); // Trata erros de rede
            });
    }

    onMounted(async () => {
        await generateUser()
    })

    return { randomUser, generateUser };
});