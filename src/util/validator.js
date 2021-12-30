const validator = {};

const list = {
  numeric: {
    regex: /^([0-9]+)$/,
    message: 'Please input valid number'
  },
  alphaNum: {
    regex: /^[a-zA-Z0-9 ]*$/,
    message: 'Please input valid alphabet / number'
  },
  alpha: {
    regex: /^[a-zA-Z ]*$/,
    message: 'Please input valid alphabet'
  },
  email: {
    regex: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    message: 'Please input valid email'
  },
  currency: {
    regex: /^-?\d*[.,]?\d{0,2}$/,
    message: 'Please input valid currency'
  }
}

for (const name in list) {
  validator[name] = (payload) => {
    var re = new RegExp(list[name].regex)
    if (re.test(payload)) {
      return null
    } else {
      return list[name].message
    }
  }
}

validator.validate = (refs) => {
  let allValid = true
  for (const ref in refs) {
    if (refs[ref] && refs[ref].validate) {
      const valid = refs[ref].validate()
      allValid = allValid && valid
    }
  }
  return allValid
}

module.exports = validator;
