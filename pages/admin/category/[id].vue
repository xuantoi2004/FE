<template>
    <div class="flex gap-x-5">
        <div class="w-1/3 flex flex-col rounded border border-gray-600 p-5 gap-y-5">
            <div class="flex flex-col gap-y-2">
                <img src="/img/avatar/default.jpg" class="w-1/2 rounded-full self-center" alt="">
                <div class="text-center">Bruce Wayne</div>
                <div class="bg-red-500 text-white rounded py-1 px-2.5 w-fit self-center">Admin</div>
                <div class="flex">
                    <div class="w-1/2 flex">
                        <div></div>
                        <div class="flex flex-col">
                            <div class="font-semibold">
                                1,230
                            </div>
                            <div>Task Done</div>
                        </div>
                    </div>
                    <div class="w-1/2 flex">
                        <div></div>
                        <div class="flex flex-col">
                            <div class="font-semibold">
                                1,230
                            </div>
                            <div>Task Done</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-y-5">
                <div class="border-b text-lg pb-5 font-bold">Details</div>
                <ul class="flex flex-col gap-y-4">
                    <li class="flex">
                        <div class="font-bold">Username:</div>
                        <div>@catwomen1940</div>
                    </li>
                    <li class="flex">
                        <div class="font-bold">Billing Email:</div>
                        <div>@catwomen1940</div>
                    </li>
                    <li class="flex">
                        <div class="font-bold">Status:</div>
                        <div class="bg-green-500 text-white rounded py-1 px-2">Active</div>
                    </li>
                    <li class="flex">
                        <div class="font-bold">Role:</div>
                        <div>Admin</div>
                    </li>
                    <li class="flex">
                        <div class="font-bold">Tax ID:</div>
                        <div>Tax-8894</div>
                    </li>
                    <li class="flex">
                        <div class="font-bold">Contact:</div>
                        <div>(123)456</div>
                    </li>
                    <li class="flex">
                        <div class="font-bold">Language:</div>
                        <div>English</div>
                    </li>
                    <li class="flex">
                        <div class="font-bold">Country:</div>
                        <div>USA</div>
                    </li>
                </ul>
                <div class="flex items-center justify-center gap-x-5">
                    <div class="bg-red-500 text-white rounded-xl py-2.5 px-5 uppercase">
                        Edit
                    </div>
                    <div class="bg-transparent text-red-500 uppercase py-2.5 px-5 border border-red-500 rounded-xl">
                        Suspend
                    </div>
                </div>
            </div>

        </div>

        <div class="w-2/3 flex flex-col gap-y-5">
            <div class="flex">
                <div class="w-1/5 border-b border-red-500 pb-5 uppercase" @click="toggleTab(1)">
                    Overview
                </div>
                <div class="w-1/5 border-b  pb-5 uppercase" @click="toggleTab(2)">
                    Security
                </div>
                <div class="w-1/5 border-b  pb-5 uppercase" @click="toggleTab(3)">
                    Billing & plan
                </div>
                <div class="w-1/5 border-b pb-5 uppercase">
                    Notifications
                </div>
                <div class="w-1/5 border-b  pb-5 uppercase">
                    More
                </div>
            </div>
            <!-- tab-content -->
            <div class="flex flex-col" :class="{
                'hidden': openTab !== 1
            }">
                <div class="flex flex-col">
                    <div class="text-lg border border-b-0 border-gray-600 rounded rounded-b-none px-5 pt-5 pb-3">
                        Project List
                    </div>
                    <AdminItemTable :headers="headers" :items="items" class="rounded-b-lg" />
                </div>
            </div>
            <div class="flex flex-col" :class="{
                'hidden': openTab !== 2
            }">
                <div class="flex flex-col">
                    <div class="text-lg border border-b-0 border-gray-600 rounded rounded-b-none px-5 pt-5 pb-3">
                        Project Hehe
                    </div>
                    <AdminItemTable :headers="headers" :items="items" class="rounded-b-lg" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin', middleware: 'auth-admin',
})
const route = useRoute()

const openTab = ref(1);
const toggleTab = (tabNumber) => {
    openTab.value = tabNumber;
}

const headers = ref([
    {
        text: 'Project',
        value: 'project'
    },
    {
        text: 'Total task',
        value: 'task'
    },
    {
        text: 'Progess',
        value: 'progess'
    },
    {
        text: 'Hours',
        value: 'hour'
    }
])

const items = ref([
    { id: 1, "project": "Tin Tức", "task": 178, "progess": 77, "hour": 20, isSelected: false },
    { id: 2, "project": "Tin Tức", "task": 178, "progess": 77, "hour": 20, isSelected: false },
    { id: 3, "project": "Tin Tức", "task": 178, "progess": 77, "hour": 20, isSelected: false },
])

const idCategory = ref(route.params.id)
</script>