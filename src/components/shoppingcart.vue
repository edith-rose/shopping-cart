<template>
  <div id="shoppingCart" class="wrap">
    <!--<img src="data:image/jpeg;base64,R0lGODlh9AENAfcAAD+znT+znT6ynD+znT6ynD6ynD6ynD+znT6ynD6ynD6ynD+znT6ynD6ynD6ynD+znT6ynD6ynD6ynD+znT6ynD6ynD6ynD+znT6ynD6ynD6ynD6ynD+znT6ynD6ynD6ynD+znT+ynD+ynD+ynD+znT+ynD+ynD+ynD+ynD+znT+ynD+ynD+ynD+znT+ynD+ynD+ynD+ynD+znT+ynD+ynD+ynD+znT+ynD+ynD+ynD+ynD+znT+ynD+ynD+ynD+znT+ynD+ynD+ynD+ynD+znT+ynD+ynD+ynD+ynD+znT+ynD+ynD+ynD+znT+znT+ynUCznUGznkK0nkO0n0O0n0S1n0W1n024o2K/rm/EtHnIuYHKvIfMwI/Pw5bRx5jSyKbZz8ro4/j8+/v9/f3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v3+/v7+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQACwAAACwAAAAA9AENAQAI/gAnCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DD/osfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkwuJMaTUD7Z5Gd/VGlllVOmdOWVbW1pZZYoeYnlV1FGWZCYf4B5EpoFfeHmm25OxSZBc6pJUp0C4fmUnnraCRKfYsoZKJ2D+ikSoF4KmiihixoaEqJbKhopo5M6+meheWK6p6Z9WroRpFxKBeqXnn406pgDhaHqqqoadWqa/qV69OqZmgY1a6wd3TpQpzJx4euvvtLaaKbD4pqRrsRWahOyE/BqLEXMOgtTtLU+WxG1xdKErbLWWrRtqDd9S2q3F4mL6rKcppstuRKZC2u46nIrLbsNucsSGPjmi6+w8sYLLr0T2UvQFQQXTLCp/o6b7L/NVguwQwLv6nC5CZ/bcLHzPpxQxAsr7JAWIIcMMr8Mc6zxQybjafDKJHuc8sQnb1zxux1brPLKBbds88w603wxtzEz9PK6C4kscs9IU1oyzEEbNDTQx/KstMtMNz31zhhrivPBskotcdZEW+201zX7fJK++ib9db9hi321z8xqS/bPDLt9kMlyg802/tR2v6122Tnh3bffhK9d90yCDw544YvDq/fSbfedeEyTD175S8AC+zfdHituONWPdw5U3J5zjjW3rLLq6tylmw531UeR7rnsS9FuOetN2S457kzpbrfvsfOuOPCrh25x63rCCaekkPM9POxTlQnl5shD/1XGrbuFffZsSS8l9+CHL/745Jdv/vnop6/++uy37/778Mcv//z012///fjnr//+/Pfv//8ADKAAB0jAAhrwgAhMoAIXyMAGOvCBEIygBCdIwQpa8IIYzKAGN8jBDnrwgyAMoQhHSMISmvCEKEyhClfIwha68IUwjKEMZ0jDGtrwhjjMoQ53yMMe+vCHKkAMohCHSMQiGvGISEyiEpfIxCY68YlQjKIUp0jFKlrxiljMoha3+MKAAAA7" alt="">-->
    <div class="content">
      <div id="procedure">
        <h3 class="fl">我的购物车</h3>
        <div class="img fr">
          <span class="span1">1、我的购物车</span>
          <span class="span2">2、填写订单</span>
          <span class="span3">3、完成订单</span>
        </div>
      </div>
      <div id="ShoppingCartInfo">
        <div class="fl" @click="changeAllSelect">
          <input type="checkbox" class="select-all" :checked="isAllSelect">全选
        </div>
        <span class="fl">商品</span>
        <ul class="fr clearfix">
          <li class="unit-price">
            <i>|</i>
            单价
          </li>
          <li class="quantity">
            <i>|</i>
            数量
          </li>
          <li class="calculation">
            <i>|</i>
            小计
          </li>
          <li class="operating">
            <i>|</i>
            操作
          </li>
        </ul>
      </div>
      <shop v-for="(shop, index) in shops" :shop="shop" :shop-index="index"></shop>
      <div class="clearfix" id="Settlement">
        <div class="wrap">
          <div class="fl" @click="changeAllSelect">
            <input type="checkbox" class="select-all" :checked="isAllSelect" />全选
          </div>
          <div class="fl">
            <p>不含运费和进口税
            </p>
          </div>
          <div class="fr total-price">
            <p>应付金额：
              <b>￥<span>{{totalPrice}}</span></b>
            </p>
          </div>
          <div class="fr">
            <p>已选<span>{{selectCommoditiesCount}}</span>件商品</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * 购物车主界面
   */
  import shop from '@/components/shop'

  export default {
    computed: {
      shops () {
        return this.$store.state.shops
      },
      totalPrice () {
        let result = 0
        this.$store.state.shops.forEach(shop => {
          shop.commodities.forEach(commodity => {
            if (commodity.selected === true) {
              result += commodity.price * commodity.count
            }
          })
        })
        return result
      },
      selectCommoditiesCount () {
        let count = 0
        this.$store.state.shops.forEach(shop => {
          shop.commodities.forEach(commodity => {
            if (commodity.selected === true) {
              count += commodity.count
            }
          })
        })
        return count
      },
      isAllSelect () {
        return this.shops.every(shop => {
          return shop.commodities.every(commodity => {
            return commodity.selected === true
          })
        })
      }
    },
    mounted () {
      this.$store.dispatch('getCommodityList')
    },
    methods: {
      changeAllSelect () {
        this.$store.commit('changeAllShopsSelect', !this.isAllSelect)
      }
    },
    components: {
      shop
    }
  }
</script>

<style scoped>
  .wrap {
    background-color: #fff;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
  }

  #procedure {
    overflow: hidden;
    margin-top: 55px;
    margin-bottom: 23px;
  }

  #procedure h3 {
    line-height: 31px;
    font-size: 24px;
    color: #000;
    margin-right: 40px;
  }

  #procedure .img {
    width: 665px;
    height: 31px;
    display: block;
    background: url(../assets/order-img.png) no-repeat 0 -40px;
  }

  #procedure .img span {
    display: inline-block;
    width: 215px;
    line-height: 32px;
    font-style: normal;
    text-align: left;
    text-indent: 30px;
    float: left;
    color: #fff;
    font-size: 16px;
  }

  #procedure .img span.span3 {
    text-indent: 80px;
  }

  #ShoppingCartInfo {
    width: 100%;
    height: 32px;
    line-height: 32px;
    background: #fafafa;
    font-size: 14px;
  }

  #ShoppingCartInfo span {
    padding-left: 15px;
  }

  #ShoppingCartInfo ul li {
    float: left;
    text-indent: center;
    color: #8c8c8c;
  }

  .unit-price {
    width: 80px;
  }

  #ShoppingCartInfo ul li i {
    float: left;
    font-style: normal;
    color: #dfdfdf;
  }

  .quantity {
    width: 130px;
  }

  .calculation {
    width: 104px;
  }

  .operating {
    width: 108px;
  }

  #Settlement {
    text-align: right;
  }

  #Settlement .wrap {
    background: #c1c1c1;
    height: 60px;
    line-height: 60px;
    padding-right: 10px;
  }

  #Settlement p {
    line-height: 60px;
    font-size: 14px;
    padding-left: 50px;
  }

  #Settlement p span {
    color: #f40;
    font-weight: normal;
    font-size: 16px;
  }

  #Settlement .total-price p {
    font-size: 20px;
  }

  #Settlement .total-price p span {
    font-size: 24px;
  }

  .red {
    background: red;
  }
</style>
