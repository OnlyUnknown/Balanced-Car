
const API_URL = "http://localhost:3001/users/tokens"

let access_token;
let refresh_token = localStorage.getItem("refresh_token");
let resource_owner;

const signupForm = document.querySelector("#sign_up_form")
const signinForm = document.querySelector("#sign_in_form")