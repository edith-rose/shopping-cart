/**
 * Created by luoying on 2017/9/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    shops: [] // 多个店铺
  },
  mutations: {
    changeList (state, shops) {
      state.shops = shops
    },
    addCommodityCount (state, commodity) {
      commodity.count++
    },
    reduceCommodityCount (state, commodity) {
      if (commodity.count > 1) {
        commodity.count--
      }
    },
    changeCommodityCount (state, {commodity, count}) {
      commodity.count = count
    },
    removeCommodity (state, {shopIndex, cIndex}) {
      let commodities = state.shops[shopIndex]['commodities']
      let commodityLen = commodities.length
      if (commodityLen === 1) {
        state.shops.splice(shopIndex, 1)
      } else {
        commodities.splice(cIndex, 1)
      }
    },
    changeCommoditySelect (state, commodity) {
      commodity.selected = !commodity.selected
    },
    changeShopSelect (state, {shop, status}) {
      shop.commodities.forEach(commodity => {
        commodity.selected = status
      })
    },
    changeAllShopsSelect ({shops}, status) {
      shops.forEach(shop => {
        shop.commodities.forEach(commodity => {
          commodity.selected = status
        })
      })
    }
  },
  actions: {
    getCommodityList ({commit}) {
      axios.get('api/commoditylist')
        .then((resp) => {
          var data = resp.data
          if (data.errno === 0 && data.data) {
            commit('changeList', data.data)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
})

export default store
