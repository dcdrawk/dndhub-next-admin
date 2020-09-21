import { defineRule } from 'vee-validate'

defineRule('required', value => {
  if (!value || !value.length) return 'This field is required'
  return true
})

defineRule('email', value => {
  // Field is empty, should pass
  if (!value || !value.length) return true

  const emailRegex = new RegExp('^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')

  if (!emailRegex.test(value)) {
    return 'This field must be a valid email'
  }

  return true
})

defineRule('confirmed', (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true
  }

  return 'Passwords must match'
})
