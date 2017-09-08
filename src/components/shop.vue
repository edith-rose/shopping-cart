<template>
  <div class="shopping-cart-list">
    <div class="commodity">
      <div class="seller-shop">
        <input type="checkbox" :checked="isAllSelect" @click="changeAllSelect(shop)" ref="allSelect" />
        <span>
          <b>店铺：{{shop.shopname}}</b>
        </span>
      </div>
      <commodity v-for="(item, index) in shop.commodities" :shop-index="shopIndex" :c-index="index" :commodity-info="item" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * 店铺
   */
  import commodity from '@/components/commodity'

  export default {
    computed: {
      isAllSelect () {
        return this.shop.commodities.every(commodity => {
          return commodity.selected === true
        })
      }
    },
    props: {
      shopIndex: {
        type: Number,
        required: true
      },
      shop: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      changeAllSelect (shop) {
        this.$store.commit('changeShopSelect', {
          shop,
          status: !this.isAllSelect
        })
      }
    },
    components: {
      commodity
    }
  }
</script>

<style scoped>
  .shopping-cart-list {
    margin-bottom: 30px;
  }

  .shopping-cart-list .commodity {
    border: 2px solid #dfdfdf;
    margin: 16px auto;
    /*border-bottom: 2px solid #dfdfdf;*/
  }

  .shopping-cart-list .seller-shop {
    height: 30px;
    border-bottom: 1px solid #eee;
    margin-top: 10px;
    text-align: left;
    line-height: 30px;
  }
</style>
