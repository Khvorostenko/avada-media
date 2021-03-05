<template>
  <div class="page-home">
    <div class="sort_block">
      <div class="custom-select">
        <select name="categoty" id="category">
          <option value="">Choose Category</option>
        </select>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1429 0H14.5714C15.9126 0 17 1.08739 17 2.42857V4.85714C17 6.19832 15.9126 7.28571 14.5714 7.28571H12.1429C10.8017 7.28571 9.71429 6.19832 9.71429 4.85714V2.42857C9.71429 1.08739 10.8017 0 12.1429 0ZM12.1429 9.71429H14.5714C15.9126 9.71429 17 10.8017 17 12.1429V14.5714C17 15.9126 15.9126 17 14.5714 17H12.1429C10.8017 17 9.71429 15.9126 9.71429 14.5714V12.1429C9.71429 10.8017 10.8017 9.71429 12.1429 9.71429ZM4.85714 9.71429H2.42857C1.08739 9.71429 0 10.8017 0 12.1429V14.5714C0 15.9126 1.08739 17 2.42857 17H4.85714C6.19832 17 7.28571 15.9126 7.28571 14.5714V12.1429C7.28571 10.8017 6.19832 9.71429 4.85714 9.71429ZM2.42857 0H4.85714C6.19832 0 7.28571 1.08739 7.28571 2.42857V4.85714C7.28571 6.19832 6.19832 7.28571 4.85714 7.28571H2.42857C1.08739 7.28571 0 6.19832 0 4.85714V2.42857C0 1.08739 1.08739 0 2.42857 0Z"
            fill="#505050"
          />
        </svg>
        <svg
          class="arrow"
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.14256 7.62263L14.7307 0.206903C15.0092 -0.0569426 15.4723 -0.0701756 15.7649 0.177159C16.0576 0.424494 16.0691 0.838996 15.7904 1.10284L9.06588 8.67222C8.86861 8.85905 8.57881 8.92028 8.32251 8.85227C8.03055 9.06765 7.59773 9.0531 7.32469 8.80862C7.03436 8.54867 0.217836 1.35396 0.217836 1.35396C-0.072612 1.09414 -0.072612 0.672842 0.217836 0.412901C0.508284 0.153081 0.978876 0.153081 1.26934 0.412901L8.14256 7.62263Z"
            fill="#666666"
          />
        </svg>
      </div>
      <input type="number" placeholder="Price from (USD)" />
      <span></span>
      <input type="number" placeholder="Price from (USD)" />
    </div>
    <div class="content-block">
      <div class="card" v-for="(item, index) in productsList" :key="index">
        <img src="../../image/Mask.png" alt="image" />
        <h6>{{ item.title }}</h6>
        <span>${{ item.price }}</span>
        <div class="like" @click="item.like = !item.like">
          <svg
            v-if="!item.like"
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.5 1.18016C10.5328 -0.489899 13.5751 -0.386848 15.4836 1.48538C16.4619 2.4443 17 3.72024 17 5.078C17 6.43654 16.4619 7.7117 15.4836 8.67062L9.40693 14.6318C9.15674 14.8773 8.82797 15 8.5 15C8.17203 15 7.84326 14.8773 7.59307 14.6318L1.51637 8.67062C0.538066 7.7117 0 6.43576 0 5.078C0 3.72024 0.538066 2.44509 1.51637 1.48538C3.42566 -0.386848 6.46802 -0.489112 8.5 1.18016ZM8.72613 13.964L14.8036 8.00276C15.5999 7.2224 16.0377 6.18403 16.0377 5.078C16.0377 3.97276 15.5999 2.9336 14.8036 2.15324C13.159 0.540611 10.4839 0.540611 8.84 2.15324C8.65156 2.33732 8.34684 2.33732 8.1592 2.15324C7.33726 1.34614 6.25712 0.943375 5.17778 0.943375C4.09844 0.943375 3.0183 1.34693 2.19637 2.15324C1.40009 2.93438 0.962264 3.97276 0.962264 5.078C0.962264 6.18324 1.40009 7.22162 2.19637 8.00276L8.27307 13.964C8.39816 14.0867 8.60104 14.0867 8.72613 13.964Z"
              fill="#B7B7B7"
            />
          </svg>
          <svg
            v-else
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4836 1.48538C13.5751 -0.386848 10.5328 -0.489899 8.5 1.18016C6.46802 -0.489112 3.42566 -0.386848 1.51637 1.48538C0.538066 2.44509 0 3.72024 0 5.078C0 6.43576 0.538066 7.7117 1.51637 8.67062L7.59307 14.6318C7.84326 14.8773 8.17203 15 8.5 15C8.82797 15 9.15674 14.8773 9.40693 14.6318L15.4836 8.67062C16.4619 7.7117 17 6.43654 17 5.078C17 3.72024 16.4619 2.4443 15.4836 1.48538Z"
              fill="#349A89"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  computed: {
    productsList() {
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="sass">
.sort_block
    margin: 0 auto
    max-width: 855px
    min-height: 49px
    background: #FFFFFF
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.217111)
    border-radius: 4px
    display: flex
    flex-direction: row
    justify-content: flex-start
    row-gap: 10px
    align-items: center
    column-gap: 20px
    flex-wrap: wrap
    input
        background: #F9FAFB
        border: 1px solid #DEDEE0
        box-sizing: border-box
        border-radius: 5px
        max-width: 143px
        height: 35px
        font-size: 14px
        line-height: 16px
        color: #505050
        font-family: Helvetica
        padding-left: 10px
    select
        width: 285px
        height: 35px
        background: #F9FAFB
        border: 1px solid #DEDEE0
        box-sizing: border-box
        border-radius: 5px
        position: relative
        padding-left: 35px
        font-family: Helvetica
        font-size: 14px
        line-height: 16px
        letter-spacing: 0.35px
        color: #505050
        -webkit-appearance: none
        -moz-appearance: none
        -moz-appearance: none
    span
        width: 12px
        margin-left: -10px
        margin-right: -10px
        border: 1px solid #DEDEE0
    svg
        position: absolute
        left: 10px
        top: 9px
.custom-select
  position: relative
  margin-left: 10px
  .arrow
        position: absolute
        left: 260px
        top: 13px
.content-block
    margin: 0 auto
    margin-top: 15px
    max-width: 855px
    display: flex
    justify-content: space-between
    flex-direction: row
    flex-wrap: wrap
    row-gap: 10px
.card
    width: 209px
    height: 212px
    background: #FFFFFF
    border: 1px solid #E4E4E4
    box-sizing: border-box
    box-shadow: 0px 4px 14px rgba(121, 121, 121, 0.0527344)
    border-radius: 4px
    position: relative
    img
        margin: 2px
        height: 148px
        border-radius: 4px 4px 0px 0px
    h6
        margin: 0
        font-family: Helvetica
        font-size: 15px
        line-height: 17px
        color: #373738
        padding-left: 12px
        font-weight: normal
        padding-bottom: 10px
    span
        font-family: Helvetica
        font-size: 18px
        line-height: 21px
        color: #101010
        font-weight: bold
        padding: 12px
.like
   width: 30px
   height: 30px
   background: #FFFFFF
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.163407)
   border-radius: 50%
   position: absolute
   right: 7px
   bottom: 46px
   svg
       padding: 7px
       cursor: pointer
@media screen and (max-width: 965px)
  .sort_block
    justify-self: center
    flex-direction: column
    padding: 10px
  .content-block
    justify-content: space-around
</style>
