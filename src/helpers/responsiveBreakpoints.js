import { useBreakpoints } from '@vueuse/core'
import {ref} from "vue";

const responsiveBreakpoints = () => {
    const breakpoints = useBreakpoints({
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1280,
    });

    const activeBreakpoint = breakpoints.active()

    return  activeBreakpoint ;
}

export default responsiveBreakpoints;