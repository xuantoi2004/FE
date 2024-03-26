import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  function addToCart(item, qtyItem) {
    const existingItem = cart.value.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const newQtyItem = existingItem.qtyItem + qtyItem;
      if(newQtyItem > existingItem.qty){
        alert('Không thể thêm nhiều hơn số lượng trong kho');
      } else {
        existingItem.qtyItem = newQtyItem;
        alert('Thêm sản phẩm thành công');
      }
    } else {
      if(qtyItem > item.qty) {
        alert('Không thể thêm nhiều hơn số lượng trong kho!')
      } else {
        cart.value.push({
          ...item,
          qtyItem: qtyItem,
        });
        alert('Thêm sản phẩm thành công!');
      }
    }
  }

  function removeItem(id) {
    cart.value = cart.value.filter((item) => item.id !== id);
  }

  function removeCart() {
    cart.value = [];
  }

  const totalPrice = computed(() =>
    cart.value.reduce((total, item) => total + item.price * item.qtyItem, 0)
  );

  return {
    cart,
    addToCart,
    totalPrice,
    removeItem,
    removeCart,
  };
}, {
  persist: true,
});
