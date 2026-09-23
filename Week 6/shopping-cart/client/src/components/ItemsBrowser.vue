<script setup>
// TODO: Declare props (input)
// give me the items to display.
// the items should be objects
const props = defineProps(["items"]);
// TODO: Declare Emits (output)
// an 'addcart' event to notify the parent component when items are added
const emit = defineEmits(['addcart'])
// TODO: Handle button click to add selected items to the cart
function doClick() {
  // add code

  let itemsToAdd = []
  for (let item of props.items){
    if (item.quantity > 0){
        itemsToAdd.push(item)
    }
  }
    emit('addcart',itemsToAdd)

}
</script>
<template>
  <div>
    <!-- Display items table if there are items -->
    <div v-if="items.length > 0">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <td>{{ item.name }}</td>
            <td>${{ item.price }}</td>
            <td>
              <!-- Input for selecting item quantity -->
              <input
                type="number"
                min="0"
                style="width: 50px"
                v-model="item.quantity"
              />
            </td>
            <td>
              <!-- Display subtotal for the item -->
              ${{ (item.price * item.quantity).toFixed(2) }}
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Button to add selected items to the cart -->
      <button class="btn btn-primary" @click="doClick"><slot></slot></button>
    </div>
    <!-- Display when there are no items -->
    <p v-else>No item.</p>
  </div>
</template>
<style scoped>
/* Scoped styles for this component (optional) */
</style>
