<template>
  <div class="page_login">
    <div class="login_block">
      <h3>Login</h3>
      <form action="">
        <div class="form-group-item">
          <label for="email">Email</label>
          <input type="email" required v-model="email" />
        </div>
        <div class="form-group-item">
          <label for="password">Password</label>
          <input type="password" v-model="password" required />
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z"
              fill="black"
            />
          </svg>
          <span>Don't remember password?</span>
          <button type="submit" @click.prevent="login" class="btn-continue">Continue</button>
        </div>
      </form>
    </div>
    <div class="no-login">
      <span
        >I have no account,
        <router-link to="/registration"
          ><a href="#">Register now</a></router-link
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email:'',
      password:'',
    };
  },
  methods: {
    async login() {
      let authData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("login", authData);
        this.$router.push("/home");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.page_login
  margin-top: 100px
  margin-bottom: 50px
.login_block
    margin: 0 auto
    max-width: 425px
    border-radius: 7px
    background: #ffffff
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233)
    h3
        font-family: Helvetica
        font-size: 22px
        line-height: 25px
        color: #282828
        text-align: center
        padding: 20px
        font-weight: normal
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
    span
        font-size: 14px
        line-height: 16px
        text-align: right
        letter-spacing: 0.4px
        color: #8C8C8C
        font-family: Helvetica
    svg
        position: absolute
        top: 45px
        right: 40px
.btn-continue
    background: #349A89
    border-radius: 5px
    font-family: Helvetica
    font-size: 16px
    line-height: 58px
    text-align: center
    letter-spacing: 0.4px
    color: #FFFFFF
    margin-top: 16px
    margin-bottom: 16px
    border: none
    outline: none
    cursor: pointer
.no-login
    margin: 0 auto
    margin-top: 21px
    max-width: 425px
    height: 76px
    background-color: #ffffff
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233)
    border-radius: 7px
    display: flex
    justify-content: center
    align-items: center
    span
        font-family: Helvetica
        font-size: 14px
        line-height: 16px
        color: #2A2A2A
    a
        text-decoration: none
        text-transform: uppercase
        color: #349A89
</style>
