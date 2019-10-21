<template>
  <div class="red">
    <div :class= "classes"/>
    <div class= "red-yellow"/>
    <div class="red-green" />
    <div class= "red-timer">{{timer}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPending: false,
      time: null,
      timer: 10,
    }
  },
  computed : {
    classes () {
      return {
        "red-red" : true,
        "red-red-pending" : this.isPending,
      }
    }
  },
  methods: {
    roll () {
      if (this.timer > 0) {
        this.isPending = !this.isPending
        setTimeout(this.roll, 500);
      }
      if (this.timer === 0) {
        this.$router.push({name: 'yellow', params: {fromColor: this.$route.name.toString() }})     
      }
    },
    startTimer() {
      this.time = setInterval(() => {
        this.timer--
        if (timer === 0) {
        this.stopTimer()
      }
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.time)
    },
  },
  mounted () {
    this.startTimer(this.timer)
    setTimeout(this.roll, 7000, this.classes , this.isPendind);
  },
  
}
</script>

<style lang="scss" scoped>
.red {
  position: absolute;
  top:20%;
  left:40%;
  background-color: black;
  &-red {
    background-color: rgb(255, 0, 0);
    width: 100px;
    height: 100px;
    margin:10px;
    border-radius: 25px;
    &-pending {
      background-color: rgb(95, 0, 0);
    }
  }
  &-yellow {
    background-color: rgb(117, 119, 0);
    width: 100px;
    height: 100px;
    margin:10px;
    border-radius: 25px;

  }
  &-green {
    background-color: rgb(28, 141, 0);
    width: 100px;
    height: 100px;
    margin:10px;
    border-radius: 25px;
  }
  &-timer {
    font-size: 18px;
    color:white;
    text-align: center;
  }
}
</style>
