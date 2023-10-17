import { createRouter, createWebHistory } from "vue-router";

import Mining from "@/pages/MiningPage.vue"
import Home from "@/pages/Home.vue"
import Control from "@/pages/ContolPage.vue"
import Geo from "@/pages/GeoPage.vue"
import Hydro from "@/pages/HydroPage.vue"
import Recycle from "@/pages/RecyclePage.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/Mining", component: Mining, name: Mining},
    { path: "/Control", component:Control , name:Control },
    { path: "/Geo", component:Geo , name:Geo },
    { path: "/Hydro", component:Hydro , name:Hydro },
    { path: "/Recycle", component:Recycle , name:Recycle },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;