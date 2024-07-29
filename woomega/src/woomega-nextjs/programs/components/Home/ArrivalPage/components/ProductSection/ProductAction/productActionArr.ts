import { productActiveIcon, productIcon } from "@/woomega-nextjs/libs/Icon";

export const productActionIcon = [
    {
        id:1,
        icon:productIcon.compare,
        activeIcon:productActiveIcon.compareActive,
        path:"/",
    },
    {
        id:2,
        icon:productIcon.favouriteFill,
        activeIcon:productActiveIcon.heartActive,
        path:"/",
    }, 
    {
        id:3,
        icon:productIcon.eyeFill,
        activeIcon:productActiveIcon.eyeActive,
        path:"/",
    },   
    {
        id:4,
        icon:productIcon.cartFill,
        activeIcon:productActiveIcon.cartActive,
        path:"/",
    },
]