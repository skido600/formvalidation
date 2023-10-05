let user = ""
let post = ""
let promise = Promise.all([user, post]).then(promise => console.log(promise)).then(data => console.log(data)).catch(err => console.log(err))