let form = document.querySelector(".cta-form");
let button3 = document.querySelector(".btn-3");
const button4 = document.querySelectorAll(".nav-icon");
let header = document.querySelector(".header");
let aboutHeader = document.querySelector(".about-header");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const numberOfRooms = document.querySelector("#rooms")
const customerName = document.querySelector('.name')
const submitBtn = document.querySelector("#submit")
const policyList = document.querySelectorAll(".about-policy-box")
const detailsBtn = document.querySelectorAll(".btn-5")
const removeDetail = document.querySelectorAll(".btn-6")
// const hiddenText = document.querySelector(".hidden-text")

// console.log(policyList)



// Opens and close navigation bar
button4.forEach(function (icon) {
  icon.addEventListener("click", (event) => {
    header.classList.toggle("open-nav");
  });
});

policyList.forEach(function (div) {
  // hiddenText.forEach(function())
  div.addEventListener("click", (event) => {
    const parent = div
    const text = parent.querySelector(".hidden-text")
    text.classList.toggle("show")
    console.log(text)
  });
});

detailsBtn.forEach(function (div) {
  div.addEventListener("click", (event) => {
    const child = div
    parent = child.parentElement.parentElement.parentElement.parentElement
    const detail = parent.querySelector('.detail-hidden')
    detail.classList.add("detail-background")
    console.log(parent)
  });
})

removeDetail.forEach(function (div) {
  div.addEventListener("click", (event) => {
    const child = div
    parent = child.parentElement.parentElement.parentElement
    const detail = parent.querySelector('.detail-hidden')
    detail.classList.remove("detail-background")
    console.log(parent)
  });
})


// Scrolls smoothly to the CTA section
// const ctaLinks = document.querySelectorAll(".btn-4");
// console.log(ctaLinks)
// ctaLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     console.log(link);
//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//     if (href !== "#" && href.startsWith("#")) {
//       // console.log(href)
//       sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({
//         behavior: "smooth",
//       });
//     }

//     if (link.classList.contains("main-nav-link")) {
//       header.classList.toggle("open-nav");
//     }
//   });
// });


// Sumbit Form Handler
form.addEventListener("submit", (event) => {
  console.log(5);
  validateForm()
  let isValid = formIsValid();
  console.log(isValid)
  if (!isValid) {
    event.preventDefault();
  } else {
    // event.preventDefault();
    let formData = JSON.parse(localStorage.getItem("details")) || []
    console.log(numberOfRooms)
    formData.push({
      Name: fullName.value,
      email: email.value,
      numberRoom: numberOfRooms.value
    })
    localStorage.setItem('details', JSON.stringify(formData))
    // submitBtn.onclick = () => {
    //   location.href = "www.yoursite.com";
    // }
    // // customerName.innerHTML = fullName.value
    // console.log(fullName.value)
    // details.Name = fullName.value
    // details.emailAddress = email.value
    // form.submit()
  }
});

// Validate Form Handler
function validateForm() {
  if (fullName.value.trim() === "") {
    onError(fullName, "name field cannot be empty");
  } else {
    onSuccess(fullName)
  }
  if (email.value.trim() === "") {
    onError(email, "Email field cannot be empty");
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    onSuccess(email);
  } else {
    onError(email, "Enter valid email");
  }
  if (numberOfRooms.value.trim() === "") {
    onError(numberOfRooms, "field cannot be empty");
  } else if (Number.isInteger(parseInt(numberOfRooms.value))) {
    console.log(parseInt(numberOfRooms.value))
    onSuccess(numberOfRooms)
  } else {
    onError(numberOfRooms, "Enter valid room number");
  }
  console.log(email);
}

function formIsValid() {
  if (fullName.value.trim() === "" || email.value.trim() === "" || numberOfRooms.value.trim() === "") {
    return false
  }
  else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) && Number.isInteger(parseInt(numberOfRooms.value))) {
    return true
  } else {
    return false
  }
}

// function show()

// Handles Error Messages
function onError(element, errorMessage) {
    const parent = element.parentElement;
    const paragragh = parent.querySelector('p');
    paragragh.innerText = errorMessage
    paragragh.classList.add('error-message');
    parent.classList.add('error')
    // parent.classList.remove('success');
}

// Clears Error Messages
function onSuccess(element) {
  const parent = element.parentElement;
    const paragragh = parent.querySelector('p');
    paragragh.innerText = ''
    paragragh.classList.remove('error-message');
    parent.classList.remove('error');
}
