<template>
    <div class="flex items-center border-2 rounded-lg px-3 py-2">
        <button class=" text-gray-400 font-bold w-1/3" @click="decreaseCount">
            -
        </button>
        <input class="w-1/3 text-center font-bold focus:border-none" type="number" :value="props.count" disabled>
        <!-- {{ props.count }} -->
        <button class=" text-gray-400 font-bold w-1/3" @click="increaseCount">
            +
        </button>
    </div>
</template>
  
<script setup>

const props = defineProps({
    count: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 2
    }
});

const emit = defineEmits(['update:count']);

const decreaseCount = () => {
    if (props.count > 0) {
        emit('update:count', props.count-1);
    } else {
        alert("Giá trị không được nhỏ hơn 0");
    }
};

const increaseCount = () => {
    if (props.count < props.max) {
        emit('update:count', props.count+1);
    } else {
        alert("Giá trị không được lớn hơn "+props.max);
    }
};
</script>
  