<script lang="ts" setup>
</script>

<template>
    <div class="flex-col fixed top-0 bottom-0 z-20 hidden lg:flex items-stretch shrink-0 w-[--tw-sidebar-width] dark"
        data-drawer="true" data-drawer-class="drawer drawer-start flex top-0 bottom-0"
        data-drawer-enable="true|lg:false" id="sidebar">
        <!-- Sidebar Header -->
        <div class="flex flex-col gap-2.5" id="sidebar_header">
            <div class="flex items-center gap-2.5 px-3.5 h-[70px]">
                <a href="/metronic/tailwind/demo10/index.html">
                    <img class="size-[34px]" src="/media/app/mini-logo-circle-success.svg" />
                </a>
                <span class="text-gray-900 text-lg font-medium text-inverse grow">
                    GrokGames
                </span>
            </div>
            <div class="flex items-center gap-2.5 px-3.5">
                <!-- Input -->
                <a class="btn btn-dark btn-sm justify-center min-w-[198px]"
                    href="/metronic/tailwind/demo10/public-profile/projects/3-columns">
                    <i class="ki-filled ki-plus">
                    </i>
                    Publish Your Game
                </a>
                <!-- End of Input -->
                <button class="btn btn-icon btn-dark btn-icon-lg size-8 hover:text-primary"
                    data-modal-toggle="#search_modal">
                    <i class="ki-filled ki-magnifier">
                    </i>
                </button>
            </div>
        </div>
        <!-- End of Sidebar Header -->
        <!-- Sidebar menu -->
        <div class="flex flex-col grow overflow-hidden" id="sidebar_menu">
            <div
                class="scrollable-y-auto h-full max-h-[calc(100vh-150px)] overflow-y-auto [--tw-scrollbar-thumb-color:var(--tw-gray-300)] mt-5">
                <!-- Primary Menu -->
                <div class="mb-5">
                    <h3 class="text-sm text-gray-500 uppercase ps-5 inline-block mb-3">
                        Games
                    </h3>
                    <div class="menu flex flex-col w-full gap-1.5 px-3.5" data-menu="true"
                        data-menu-accordion-expand-all="false" id="sidebar_primary_menu">
                        <div class="menu-item active">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-home-3">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    All Games
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-rocket">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Action
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-compass">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Adventure
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-cd">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Shooter
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-abstract-26">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Platformer
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-crown">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Role-Playing (RPG)
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-chart">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Strategy
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-element-11">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Tactics
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-chart-pie-simple">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Puzzle
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-abstract-14">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Logic
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-abstract-22">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Simulation
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-medal-star">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Sports
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-abstract-41">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Casual
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-people">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Social
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-abstract-30">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Rhythm
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-abstract-45">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Music
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-mask">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Horror
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-book-open">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Educational
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-briefcase">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Serious Games
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-shield-slash">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Fighting
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-note-2">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Card Games
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-element-equal">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Board Games
                                </span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                href="/metronic/tailwind/demo10/">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i class="ki-filled ki-abstract-32">
                                    </i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    Experimental/Indie
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- End of Primary Menu -->
            </div>
        </div>
        <!-- End of Sidebar menu-->
    </div>
</template>