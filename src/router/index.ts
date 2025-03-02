import KTComponent from "@/metronic/core";
import CatalogueDefault from "@views/catalogue/Default.vue";
import { nextTick } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/catalogue",
    },
    {
        path: "/catalogue/:categoryId?",
        name: "Catalogue",
        component: CatalogueDefault,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(async () => {
    await nextTick(() => {
        KTComponent.init();
    });
});

export default router;