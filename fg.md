handleSubmit = (event) => {
  event.preventDefault()
  const { email, password } = this.state;
  let emailArr = [];
  let hash;

  axios.get('/login').then((data) => {
    data.data.forEach(obj => {
      emailArr.push(obj.email)
      if(email === obj.email){
        hash = obj.password
        bcrypt.compare(password, hash, (err, res) => {
          if(res) {
            this.setState({
              first_name: obj.first_name,
              last_name: obj.last_name,
              userID: obj.id
            })
            this.setUser(data)
          } else {
            alert("WRONG PASSWORD");
          }
        })
      }
  })
  if(emailArr.indexOf(email) === -1){
    alert("WRONG EMAIL")
  }
})
}