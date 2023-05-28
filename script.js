//checking input is valid email
const email = $("#email-address")


$("#submit-btn").on('click', function () {
   $('.error').remove()
    const emailValue = email.val()
    let re = new RegExp();
    re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(emailValue)) {
        alert("valid email");

    } else {
        //alert('invalid email');
        email.addClass('invalid-input')
        $('<label for="email-address" class="error">Valid email required</label>').insertAfter($('#email-label'))

    }

})

//function from stack overflow
