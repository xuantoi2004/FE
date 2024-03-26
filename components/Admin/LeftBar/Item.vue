<template>
    <div class="flex flex-col px-2" v-for="route in dataRoute">
        <div class="flex uppercase font-semibold text-gray-400 text-xs items-center">
            <IconMinus />
            <div class="uppercase">{{ route.name || 'Danh mục' }}</div>
        </div>
        <ul class="flex flex-col gap-4 py-0.5">
            <li class="flex uppercase text-sm items-center" :class="item.active ? 'bg-amber-400 text-white p-1.5 rounded-md font-semibold shadow-lg' : 'text-gray-500'" v-for="item in route.data">
                <IconMenuTest class="scale-75"/>
                <div class="ml-2">
                    <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
defineProps({
    dataRoute: {
        type: Array,
        required: false
    }
}
)

</script>