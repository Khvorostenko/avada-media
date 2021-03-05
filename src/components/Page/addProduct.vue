<template>
  <div class="add_product">
    <h3>Add product</h3>
    <form>
      <div class="form-group-item">
        <label for="title">Title <i>*</i></label>
        <input
          id="title"
          type="text"
          v-model="title"
          placeholder="For example: Iron man suit"
        />
      </div>
      <div class="form-group-item">
        <label for="location">Location <i>*</i></label>
        <input
          id="location"
          type="text"
          v-model="location"
          placeholder="For example: Los Angeles, CA"
        />
      </div>
      <div class="form-group-item">
        <label for="description">Description</label>
        <textarea id="description" placeholder="For example: Iron man suit" v-model="description" />
      </div>
      <div class="form-group-item">
        <label for="">Photos</label>
        <input id="photos" type="file" />
        <label class="file-input" for="photos"><div>+</div></label>
      </div>
      <div class="form-group-item">
        <label for="price">Price</label>
        <input
          id="price"
          type="number"
          v-model="price"
          placeholder="For example: Los Angeles, CA"
        />
        <button class="btn-submit" @click.prevent="AddProduct">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      title: "",
      location: "",
      description: "",
      photo: null,
      price: null,
    };
  },
  methods:{
  async  AddProduct(){
      let productData = {
        title: this.title,
        location: this.location,
        description: this.description,
        photo: this.photo,
        price: this.price,
      }
      try{
        await this.$store.dispatch('addProduct', productData)
        this.$router.push('/home')
      }catch(e){
        console.log(e)
      }

    }
  }
};
</script>

<style lang="sass">
.add_product
    margin: 0 auto
    max-width: 1136px
    height: 874px
    background: #FFFFFF
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233)
    border-radius: 7px
    margin-bottom: 50px
    h3
        font-family: Helvetica
        font-size: 22px
        line-height: 25px
        color: #282828
        font-weight: normal
        text-align: center
        padding-top: 36px
    form
        margin: 0 auto
        max-width: 664px
.form-group-item
    display: flex
    flex-direction: column
    padding: 10px 20px 10px 20px
    position: relative
    label
        font-family: Helvetica
        font-size: 12px
        line-height: 14px
        letter-spacing: 0.3px
        text-transform: uppercase
        color: #303030
    input
        background: #F9FAFB
        outline: none
        border: 1px solid #DEDEE0
        box-sizing: border-box
        border-radius: 5px
        color: rgba(102, 102, 102, 0.466455)
        letter-spacing: 0.4px
        height: 58px
        font-size: 16px
        font-family: Helvetica
        padding-left: 20px
    svg
        position: absolute
        top: 45px
        right: 40px
    textarea
        background: #F9FAFB
        border: 1px solid #DEDEE0
        box-sizing: border-box
        border-radius: 5px
        height: 183px
        font-size: 16px
        font-family: Helvetica
        padding-left: 20px
        padding-top: 20px
    i
        color: red
    input[type=file]
        display: none
.file-input
    background: #F9FAFB
    outline: none
    border: 1px solid #DEDEE0
    box-sizing: border-box
    border-radius: 5px
    color: rgba(102, 102, 102, 0.466455)
    height: 124px
    cursor: pointer
    div
        width: 92px
        height: 92px
        background: #E4E4E4
        border-radius: 4px
        margin: 16px
        font-size: 80px
        display: flex
        justify-content: center
        align-items: center
        color: #349A89
.btn-submit
    background: #349A89
    border-radius: 5px
    font-family: Helvetica
    font-size: 16px
    line-height: 18px
    text-align: center
    letter-spacing: 0.4px
    color: #FFFFFF
    min-width: 360px
    height: 58px
    outline: none
    border: none
    cursor: pointer
    margin: 0 auto
    margin-top: 32px
</style>
