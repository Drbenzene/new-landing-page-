function contactUs() {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  const service = document.getElementById('servicesonpage')
  const phone = document.getElementById('phone').value
  const e = document.getElementById('servicesonpage')
  const serviceSelected = e.options[e.selectedIndex].text

  console.log(serviceSelected, phone, email, name, message)

  if (!name || !message || !email || !serviceSelected || !phone) {
    swal({
      icon: 'error',
      text: 'Please ensure all information are filled',
      buttons: false,
      timer: 2000,
    })
    return 'Please Enter All Fields'
  }

  const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

  if (!emailReg.test(email)) {
    swal({
      icon: 'error',
      text: 'Invalid Email Provided.',
      buttons: false,
      timer: 2000,
    })

    return
  }

  const data = {
    message,
    name,
    email,
    serviceSelected,
    phone,
  }

  fetch('https://cleverdevelopers.onrender.com/api/user/contactus', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      console.log(response)
      swal({
        icon: 'success',
        text:
          'Thanks for reaching out. Someone from our Team will reach out to you shortly.',
        buttons: false,
        timer: 5000,
      })

      document.getElementById('name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('message').value = ''
      document.getElementById('phone').value = ''
      e.options[e.selectedIndex].value = 0
    })
    .catch((error) => {
      console.log(error)
      swal({
        icon: 'error',
        text: 'Something went wrong. Please try again',
        buttons: false,
        timer: 2000,
      })
    })
}

function subscribeEmail() {
  const email = document.getElementById('emailsubscribe').value

  console.log(email)

  if (!email) {
    console.log('Please enter your email')
    swal({
      icon: 'error',
      text: 'Please enter your email',
      buttons: false,
      timer: 2000,
    })
    return 'Please Enter Your Email Address'
  }

  const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

  if (!emailReg.test(email)) {
    console.log('Please enter a valid email')
    swal({
      icon: 'error',
      text: 'Please enter a valid email address',
      buttons: false,
      timer: 2000,
    })
    return 'Please enter a valid Email'
  }

  const data = {
    email,
  }

  fetch('https://cleverdevelopers.onrender.com/api/user/subscription', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      document.getElementById('emailsubscribe').value = ''
      swal({
        icon: 'success',
        text: 'Email subscribed successfully.',
        buttons: false,
        timer: 2000,
      })
      document.getElementById('emailsubscribe').value = ''
      console.log(response)
    })

    .catch((error) => {
      swal({
        icon: 'error',
        text: 'Something Went Wrong. Please Try Again.',
        buttons: false,
        timer: 2000,
      })
      console.log(error)
    })
}

function joinWaitingList() {
  const email = document.getElementById('waitingemail').value
  const phone = document.getElementById('waitingphone').value
  const name = document.getElementById('waitingname').value

  if (!email || !phone || !name) {
    swal({
      icon: 'error',
      buttons: false,
      timer: 2000,
      text: 'Please ensure all information are filled',
    })
    return
  }

  const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/

  if (!emailReg.test(email)) {
    swal({
      icon: 'error',
      buttons: false,
      timer: 2000,
      text: 'Invalid Email Provided.',
    })
    return
  }

  const data = {
    email,
    phone,
    name,
  }

  fetch('https://cleverdevelopers.onrender.com/api/user/bootcamp', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  swal({
    icon: 'info',
    text: 'Processing! Please wait',
    buttons: false,
    timer: 2000,
  })
    .then((response) => {
      document.getElementById('emailsubscribe').value = ''
      swal({
        icon: 'success',
        text:
          'Thanks for joining our waiting list. You will be notified once our registration opens',
        buttons: false,
        timer: 5000,
      })
      document.getElementById('waitingemail').value = ''
      document.getElementById('waitingphone').value = ''
      document.getElementById('waitingname').value = ''
    })

    .catch((error) => {
      swal({
        icon: 'error',
        text: 'Something Went Wrong. Please Try Again.',
        buttons: false,
        timer: 2000,
      })
      console.log(error)
    })
}
