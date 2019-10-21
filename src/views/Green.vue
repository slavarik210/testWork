<template>
  <div class="green">
    <div class= "green-red"/>
    <div class= "green-yellow"/>
    <div :class="classes" />
    <div class= "green-timer">{{timer}}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isPending: false,
      time: null,
      timer: 15,
    }
  },
  computed : {
    classes () {
      return {
        "green-green" : true,
        "green-green-pending" : this.isPending,
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
    setTimeout(this.roll, 12000, this.classes , this.isPendind);
  }
}
</script>

<style lang="scss" scoped>
.green {
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
    background-color: rgb(97, 99, 0);
    width: 100px;
    height: 100px;
    margin:10px;
    border-radius: 25px;
  }
  &-green {
    background-color: rgb(51, 255, 0);
    width: 100px;
    height: 100px;
    margin:10px;
    border-radius: 25px;
    &-pending {
      background-color: rgb(28, 141, 0);
    }
  }
  &-timer {
    font-size: 18px;
    color:white;
    text-align: center;
  }
}
</style>
