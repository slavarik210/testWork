<template>
  <div class="yellow">
    <div class= "yellow-red"/>
    <div :class= "classes"/>
    <div class="yellow-green" />
  </div>
</template>

<script>
export default {
    props: {
        fromColor: String,
    },
    data () {
        return {
            isPending: false,
            time: 0
        }
    },
    computed : {
        classes () {
            return {
                "yellow-yellow" : true,
                "yellow-yellow-pending" : this.isPending,
            }
        }
    },
    methods: {
      roll () {
      this.time += 600
      if (this.time < 3000) {
        this.isPending = !this.isPending
        setTimeout(this.roll, 600);
      }
      if (this.time >= 3000) {
        if(this.fromColor == 'green'){   
            this.$router.push({name: 'red', params: {fromColor: this.$route.name.toString() }})
        } else {
            this.$router.push({name: 'green', params: {fromColor: this.$route.name.toString() }})
        }
            
      }
    }
  },
  mounted () {
       setTimeout(this.roll, 100, this.classes , this.isPendind);
  },
}
</script>

<style lang="scss" scoped>
.yellow {
  position: absolute;
  top:20%;
  left:40%;
  background-color: black;
  &-red {
    background-color: rgb(95, 0, 0);
    width: 100px;
    height: 100px;
    margin:10px;
    border-radius: 25px;
  }
  &-yellow {
    background-color: rgb(251, 255, 0);
    width: 100px;
    height: 100px;
    margin:10px;
    border-radius: 25px;
    &-pending {
      background-color: rgb(97, 99, 0);
    }
  }
  &-green {
    background-color: rgb(28, 141, 0);
    width: 100px;
    height: 100px;
    margin:10px;
    border-radius: 25px;
    
  }
}
</style>
