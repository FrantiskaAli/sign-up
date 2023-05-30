//checking input is valid email
const email = $("#email-address")


$("#submit-btn").on('click', function () {
   $('.error').remove()
    const emailValue = email.val()
    let re = new RegExp();
    re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(emailValue)) {
        //alert("valid email");
        $('#content-window').empty();
        const image = $("<img>").attr('src','./assets/images/icon-success.svg').addClass('success-img');
        const heading = $("<h1>").text("Thanks for subscribing!").addClass('tyH');
        const message = $(`<p class="thanks-text"> A confirmation email has been sent to <strong>${emailValue}</strong> 
        Please open it and click the button inside to confirm your subscription.</p>`);
        const dismiss = $('<button>').addClass("btn success-btn").text('Dismiss message').attr("id","dismiss");
        $('#content-window').append(image, heading, message, dismiss).addClass("success")
    } else {
        //alert('invalid email');
        email.addClass('invalid-input')
        $('<label for="email-address" class="error">Valid email required</label>').insertAfter($('#email-label'))

    }

})
//dismiss button
$("#dismiss").click(function() {
    window.location.href = "https://www.frontendmentor.io/profile/FrantiskaAli";
})
