/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase/app'
Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        products:[],
        count: 0,
    },
    mutations:{
    setProducts(state, payload){
        state.products = payload
    }
    },
    actions:{
        async login({dispatch,commit},{email, password}){
            try{
               await firebase.auth().signInWithEmailAndPassword(email, password)
            }catch(e){
                throw e
            }
        },
        async register({dispatch},{email,full_name, password}){
            try{
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name: full_name
                })
             }catch(e){
                 throw e
             }
        },
        async addProduct({context, dispatch},payload){
            try{
                // await axios.post('https://avada-media-335d6-default-rtdb.firebaseio.com/products.json', {
                //     id: this.state.count++,
                //     title: payload.title,
                //     location: payload.location,
                //     description: payload.description,
                //     photo: payload.photo,
                //     price: payload.price,
                //     like: false
                // })
                await firebase.database().ref(`/product/${this.state.products.length}`).set({
                    id: this.state.count++,
                    title: payload.title,
                    location: payload.location,
                    description: payload.description,
                    photo: payload.photo,
                    price: payload.price,
                    like: false
                })
            }catch(e){
                console.log(e)
            }
        },
       async fetchProducts(context){
            try{
            let response = await axios.get('https://avada-media-335d6-default-rtdb.firebaseio.com/product.json');
            context.commit('setProducts', response.data)
            console.log(response.data)
            }catch(e){
                console.log(e)
            }
        },
        getUid(){
           const user = firebase.auth().currentUser
           return user ? user.uid : null
        },
        async logout() {
            await firebase.auth().signOut()
        }
    },
    getters: {}
})