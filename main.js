var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
  },
  mounted: function(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
      this.hasError = true
      console.log(error)
    }.bind(this))
  },
  filters: {
    currencyDecimal(value){
      return value.toFixed(2)
    }
  }
})