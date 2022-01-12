exports.token = function(to, from, next) {
  if (localStorage.getItem('token')) {
    next();
  } else {
    next({ name: 'index' })
  }
}

exports.noToken = function(to, from, next) {
  if (!localStorage.getItem('token')) {
    next();
  } else {
    next({ name: 'home' })
  }
}
  