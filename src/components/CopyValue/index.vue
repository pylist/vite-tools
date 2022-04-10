<script setup lang="ts">
import { ref, defineProps } from 'vue'
const props = defineProps({
  value: String
})
const clickBool = ref<Boolean>(true)
// const value = ref<string>('')
const tips = ref<string>('复制文本')
const copy = () => {
  const oInput = document.createElement('input')
  oInput.value = props.value || ' '
  document.body.appendChild(oInput)
  oInput.select()
  document.execCommand('Copy')
  oInput.remove()
  tips.value = '复制成功'
  clickBool.value = false
}
const mouseleave = (visible: Boolean) => {
  if (!visible) {
    setTimeout(() => {
      tips.value = '复制文本'
      clickBool.value = true
    }, 100) 
  }
}
</script>

<template>
<a-tooltip @visibleChange="mouseleave" placement="top">
  <template #title>
    <span>{{ tips }}</span>
  </template>
  <span style="margin-left: 5px;">
    <!-- <CopyOutlined v-if="clickBool" @click="copy" style="color: #1890ff;" />
    <CheckOutlined v-else :style="{ color: '#52c41a' }" /> -->
  </span>
</a-tooltip>

</template>