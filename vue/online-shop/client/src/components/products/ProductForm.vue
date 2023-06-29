<template>
  <form @submit.prevent="saveProduct">
    <!-- 适配 大的 中等的 ipad 手机 5一半 12全屏-->
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label for="">Name</label>
        <input type="text" name="name" v-model="model.name" class="form-control" 
        placeholder="Name">
      </div>
      <div class="form-group">
        <label for="">Price</label>
        <input type="number" name="price" v-model="model.price" class="form-control" 
        placeholder="Price">
      </div>
      <div class="form-group">
        <label for="">Manufacturer</label>
        <select v-model="model.manufacturer" class="form-control" type="text" name="manufacturer">
          <template v-for="manufacturer in manufacturers">
            <option :selected="manufacturer._id ===
              (model.manufacturer && model.manufacturer._id)" :value="manufacturer._id">
              {{ manufacturer.name }}
            </option>
          </template>
        </select>
      </div>
      <div class="form-group">
        <label for="">Image</label>
        <input type="text" name="image" v-model="model.image" class="form-control" 
        placeholder="Image">
      </div>
      <div class="form-group">
        <label for="">Description</label>
        <input type="text" name="description" v-model="model.description" class="form-control" 
        placeholder="Description">
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model', 'manufacturers', 'isEditing'],
  methods: {
    saveProduct() {
      this.$emit('save-product', this.model)
    }
  }
}
</script>

<style scoped></style>