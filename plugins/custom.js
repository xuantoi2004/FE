export default defineNuxtPlugin(() => {
    return {
        provide: {
            objstring: (inputObj) => {
                const transformed = {};
    
                for (const [key, value] of Object.entries(inputObj)) {
                    transformed[key] = String(value); // Chuyển đổi giá trị số thành chuỗi
                }
    
                return transformed;
            }
        }
    }
})