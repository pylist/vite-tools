<script setup lang="ts">
import { ref, computed} from 'vue'
import CopyValue from '@/components/CopyValue/index.vue'
import dayjs from 'dayjs'
const nowTimestamp = ref(Math.round(new Date().getTime() / 1000))
const cornTime = () => {
  setInterval(() => {
    nowTimestamp.value += 1
  }, 1000)
}
cornTime()

const tipsNowDate = dayjs(nowTimestamp.value*1000).format('YYYY-MM-DD HH:mm:ss')

const nowTime = ref('')
const toNowTime = ref('')
const timeUint = ref('s')
const timeUint2 = ref('s')

const nowDate = ref('')
const toNowDate = ref()


const timestampToTime = () => {
  let uint = parseInt(nowTime.value)
  if (!uint) {
    uint = new Date().getTime() / 1000
  }
  if (timeUint.value == 's') {
    uint *= 1000
  } 
  toNowTime.value = dayjs(uint).format('YYYY-MM-DD HH:mm:ss')
}
const dateToTimestamp = () => {
  let time = nowDate.value
  if (!time) {
    time = tipsNowDate
  }
  let nowUnix = dayjs(time).unix()
  if (timeUint2.value == 'ms') {
    nowUnix *= 1000
  }
  toNowDate.value = String(nowUnix)
}
</script>

<template>  
<div>
  <div>
    <span>当前:</span>
    <a-typography-paragraph copyable>
      {{ nowTimestamp }}
    </a-typography-paragraph>
  </div>
</div>
<div>
  <a-input v-model="nowTime" style="width: 200px;"></a-input>
  <a-select v-model="timeUint" style="width: 120px;margin-left: 5px;">
    <a-option value="s">秒(s)</a-option>
    <a-option value="ms">毫秒(ms)</a-option>
  </a-select>
  <a-button type="primary" @click="timestampToTime" style="margin-left: 5px;">转换</a-button>
  <a-input v-model="toNowTime" style="width: 200px;margin-left: 5px;"></a-input>
</div>
<div style="margin-top: 10px;">
  <a-input :placeholder="tipsNowDate" v-model:value="nowDate" style="width: 200px;"></a-input>
  <a-select v-model="timeUint2" style="width: 120px;margin-left: 5px;">
    <a-option value="s">秒(s)</a-option>
    <a-option value="ms">毫秒(ms)</a-option>
  </a-select>
  <a-button type="primary" @click="dateToTimestamp" style="margin-left: 5px;">转换</a-button>
  <a-input v-model="toNowDate" style="width: 200px;margin-left: 5px;"></a-input>
</div>
</template>

<style scoped>
</style>