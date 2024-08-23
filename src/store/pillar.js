import {defineStore} from "pinia";
import {ref} from "vue";

export const usePillar = defineStore('pillar', () => {
    const pillars = ref([
        {
          pillarName: 'Pillar One',
          pk: 'pk-for-pillar-one'
        },
        {
            pillarName: 'Pillar Two',
            pk: 'pk-for-pillar-two'
        },
        {
            pillarName: 'Pillar Three',
            pk: 'pk-for-pillar-three'
        },
        {
            pillarName: 'Pillar Four',
            pk: 'pk-for-pillar-four'
        },
    ])

    return { pillars }
})