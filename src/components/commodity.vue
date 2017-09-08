<template>
  <div class="commodity-list">
    <div class="fl">
      <input type="checkbox" class="select-product" :checked="commodityInfo.selected"
        @click="changeSelect(commodityInfo)"/>
    </div>
    <dl>
      <dt>
        <img src="../assets/1.jpg" />
      </dt>
      <dd class="sc-t">
        <a href="">{{commodityInfo.name}}</a>
      </dd>
    </dl>
    <a class="fr delete sc-opera" @click="deleteItem(shopIndex, cIndex)">删除</a>
    <div class="fr sc-calculation calculation">
      <p>￥
        <span class="sc-txt">{{totalPrice}}</span>
      </p>
    </div>
    <div class="fr sc-quantity quantity">
      <button class="cut" @click="reduceCount(commodityInfo)"></button>
      <input type="text" class="input-quantity" :value="commodityInfo.count"
        @keyup="changeCount(commodityInfo)" ref="count"/>
      <button class="add" @click="addCount(commodityInfo)"></button>
    </div>
    <div class="fr sc-price price">
      <p class="value">￥
        <span class="price-txt">{{commodityInfo.price}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  /**
   * 商品
   */
  export default {
    props: {
      shopIndex: {
        type: Number,
        required: true
      },
      cIndex: {
        type: Number,
        required: true
      },
      commodityInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {
      totalPrice () {
        return this.commodityInfo.price * this.commodityInfo.count
      }
    },
    methods: {
      addCount (item) {
        this.$store.commit('addCommodityCount', item)
      },
      reduceCount (item) {
        this.$store.commit('reduceCommodityCount', item)
      },
      changeCount (item) {
        let countRef = this.$refs.count
        countRef.value = countRef.value.replace(/[^\d]/g, '')
        this.$store.commit('changeCommodityCount', {
          commodity: item,
          count: countRef.value
        })
      },
      deleteItem (shopIndex, cIndex) {
        this.$store.commit('removeCommodity', {
          shopIndex,
          cIndex
        })
      },
      changeSelect (item) {
        this.$store.commit('changeCommoditySelect', item)
      }
    }
  }
</script>

<style scoped>
  .commodity-list {
    height: 144px;
  }

  .commodity-list .select-product {
    margin: 20px 20px auto 20px;
  }

  .commodity-list dl {
    float: left;
    width: 670px;
  }

  .commodity-list dl dt {
    float: left;
    width: 180px;
    height: 102px;
    margin-top: 20px;
    margin-right: 20px;
    border: 1px solid #dfdede;
  }

  .commodity-list dl dt img {
    width: 180px;
    height: 102px;
  }

  .commodity-list dl dd {
    text-align: left;
  }

  .commodity-list dl dd.sc-t {
    padding-top: 46px;
    font-size: 16px;
  }

  .commodity-list  a:hover {
    text-decoration: underline;
  }

  .commodity-list .delete {
    cursor: pointer;
    padding-top: 60px;
    color: #397abd;
    font-size: 14px;
  }

  .commodity-list .sc-opera {
    width: 108px;
  }

  .commodity-list .calculation {
    padding-top: 60px;
    font-size: 16px;
    color: #f97400;
  }

  .commodity-list .sc-calculation {
    width: 104px;
  }

  .commodity-list .quantity button {
    float: left;
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-top: 7px;
    cursor: pointer;
    border: none;
  }

  .commodity-list .sc-quantity {
    width: 130px;
  }

  .commodity-list .price {
    padding-top: 62px;
  }

  .commodity-list .sc-price {
    width: 80px;
  }

  .commodity-list p.value {
    color: #999;
    font-size: 12px;
  }

  .commodity-list button.cut {
    margin-left: 30px;
    background: url(../assets/icon_cut.png) no-repeat left center;
  }

  .commodity-list .add {
    background: url(../assets/icon_add.png) no-repeat left center;
  }

  .commodity-list .quantity {
    padding-top: 60px;
  }

  .commodity-list .input-quantity {
    width: 40px;
    height: 18px;
    margin: 0 5px;
    border: 1px solid #dfdfdf;
    text-align: center;
    float: left;
  }
</style>
