const validate = {
  isPasswordShort(password) {
    return password.length < 6
  },
}

export default validate
