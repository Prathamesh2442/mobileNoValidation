setInterval(valid =() => {
    var number = document.getElementById('mNo').value;
    var result = document.getElementById('result');
    var regX = /^[7-9]\d{9}$/;      // Mobile number pattern e.g., 9465783465
    if (regX.test(number)) {
        result.innerHTML = 'Valid mobile number!!'
        result.style.background = 'green';
        result.style.color = '#fff';
        result.style.visibility = 'visible';
    } else {
        result.innerHTML = 'Invalid mobile number!!';
        result.style.background = 'red';
        result.style.color = '#fff';
        result.style.visibility = 'visible';
    }
}, 1000);