
import { markRaw } from 'vue'
import AppInput from '@/components/inputs/AppInput.vue'
import AppTextArea from '@/components/inputs/AppTextArea.vue'

const rawInput = markRaw(AppInput)
const rawTextArea = markRaw(AppTextArea)

export default [
  {
    width: 'full',
    label: 'Name',
    placeholder: 'Name',
    name: 'race-name',
    field: 'name',
    component: rawInput,
    value: ''
  },

  {
    width: '1/2',
    label: 'Age',
    placeholder: '',
    name: 'age',
    field: 'age',
    component: rawTextArea,
    value: ''
  },

  {
    width: '1/2',
    label: 'Speed',
    placeholder: '',
    name: 'Speed',
    field: 'Speed',
    component: rawTextArea,
    value: ''
  },

  {
    width: 'full',
    label: 'Alignment',
    placeholder: '',
    name: 'alignment',
    field: 'alignment',
    component: rawTextArea,
    value: ''
  },

  {
    width: 'full',
    label: 'Size',
    placeholder: '',
    name: 'size',
    field: 'size',
    component: rawInput,
    value: ''
  },

  {
    width: 'full',
    label: 'Weight',
    placeholder: '',
    name: 'weight',
    field: 'weight',
    component: rawInput,
    value: ''
  }
]
