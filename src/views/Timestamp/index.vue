<script setup lang="ts">
import { ref, computed} from 'vue'
import { CopyOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons-vue'
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
  toNowDate.value = nowUnix
}
</script>

<template>  
<div>
  <span>当前</span><span>{{ nowTimestamp }}</span><CopyValue :value="String(nowTimestamp)"></CopyValue>
</div>
<div>
  <a-input v-model:value="nowTime"></a-input>
  <a-select v-model:value="timeUint" class="select">
    <a-select-option value="s">秒(s)</a-select-option>
    <a-select-option value="ms">毫秒(ms)</a-select-option>
  </a-select>
  <a-button @click="timestampToTime">转换</a-button>
  <a-input v-model:value="toNowTime"></a-input>
  <CopyValue :value="String(toNowTime)"></CopyValue>
</div>
<div>
  <a-input :placeholder="tipsNowDate" v-model:value="nowDate"></a-input>
  <a-select v-model:value="timeUint2" class="select">
    <a-select-option value="s">秒(s)</a-select-option>
    <a-select-option value="ms">毫秒(ms)</a-select-option>
  </a-select>
  <a-button @click="dateToTimestamp">转换</a-button>
  <a-input v-model:value="toNowDate"></a-input>
  <CopyValue :value="String(toNowDate)"></CopyValue>
</div>
</template>

<style scoped>
.ant-input {
  width: 200px;
}
.select {
  width: 100px;
}
</style>