var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("datefield").setAttribute("min", today);

document.getElementById('checkdatefield').value = document.getElementById('datefield').value

function getText(id) {
    const sel = document.getElementById(id);
    return sel.options[sel.selectedIndex].text;
}

function tryConfirm() {
    document.getElementById('fname').style.borderBottomColor = 'black';
    document.getElementById('lname').style.borderBottomColor = 'black';
    document.getElementById('phone').style.borderBottomColor = 'black';
    document.getElementById('datefield').style.borderBottomColor = 'black';
    document.getElementById('master').style.borderBottomColor = 'black';
    document.getElementById('service').style.borderBottomColor = 'black';
    document.getElementById('time').style.borderBottomColor = 'black';
    let field = document.getElementById('fname');
    const first_name = field.value;
    let check = false;
    if (first_name === '') {
        const color = field.style.border;
        field.style.borderBottomColor = 'indianred';
        // setTimeout(() => {
        //     field.style.border = color;
        // }, 1000);
        check = true;
    }
    field = document.getElementById('lname');
    const last_name = field.value;
    if (last_name === '') {
        // const color = field.style.border;
        field.style.borderBottomColor = 'indianred';
        // setTimeout(() => {
        //     field.style.backgroundColor = color;
        // }, 1000);
        check = true;
    }
    field = document.getElementById('phone');
    const phone = field.value;
    if (phone === '') {
        const color = field.style.border;
        field.style.borderBottomColor = 'indianred';
        // setTimeout(() => {
        //     field.style.backgroundColor = color;
        // }, 1000);
        check = true;
    }
    field = document.getElementById('datefield');
    const date = field.value;
    if (date === '0000-00-00' || date === '') {
        // const color = field.style.border;
        field.style.borderBottomColor = 'indianred';
        // setTimeout(() => {
        //     field.style.backgroundColor = color;
        // }, 1000);
        check = true;
    }
    field = document.getElementById('service');
    const service = field.value;
    if (service === '0') {
        const color = field.style.border;
        field.style.borderBottomColor = 'indianred';
        // setTimeout(() => {
        //     field.style.backgroundColor = color;
        // }, 1000);
        check = true;
    }
    field = document.getElementById('master');
    const master = field.value;
    if (master === '0') {
        const color = field.style.border;
        field.style.borderBottomColor = 'indianred';
        // setTimeout(() => {
        //     field.style.backgroundColor = color;
        // }, 1000);
        check = true;
    }
    field = document.getElementById('time');
    const time = field.value;
    if (time === '0') {
        const color = field.style.border;
        field.style.borderBottomColor = 'indianred';
        // setTimeout(() => {
        //     field.style.backgroundColor = color;
        // }, 1000);
        check = true;
    }
    if (check) {
        return;
    }

    document.getElementById('service_confirm').innerText = 'Service: ' + getText('service');
    document.getElementById('master_confirm').innerText = 'Master: ' + getText('master');
    document.getElementById('time_confirm').innerText = 'Time: ' + getText('time');
    document.getElementById('date_confirm').innerText = 'Date: ' + date;
    document.getElementById('price').innerText = "Price: " + getPrice('../api/price');
    $(".confirm-order").addClass("change").addClass('animate');
}

// api
function request(url, callback) {
    let data;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function change() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            try {
                data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function getDate() {
    return document.getElementById('datefield').value;
}

// after page reload
function refreshFields() {
    document.getElementById('datefield').value = '0000-00-00';
    document.getElementById('checkdatefield').value = '0000-00-00';
    document.getElementById('master').innerHTML = '<option value="0" disabled selected hidden>' +
        'Master</option>';
    document.getElementById('master').disabled = true;
    document.getElementById('time').innerHTML = '<option value="0" disabled selected hidden>Time</option>';
    document.getElementById('time').disabled = true;
}

// available masters for that date
function availableMasters(url) {
    const old_date = document.getElementById('checkdatefield').value
    const date = getDate();
    if (date === old_date) {
        return;
    } else {
        document.getElementById('checkdatefield').value = date;
    }
    url += '?date=' + date;

    request(url, (data) => {
        let available = data['available'];
        let html = '<option value="0" disabled selected hidden>Master</option>'
        available.forEach((item) => html += '<option value="' + item.id + '">' + item.first_name + ' ' + item.last_name
            + '</option>')
        document.getElementById('master').innerHTML = html;
        document.getElementById('master').disabled = false;
    });
}

// available hours for master
function availableHours(url) {
    const date = getDate();
    const e = document.getElementById('master')
    const master = e.options[e.selectedIndex].value;
    url += '/' +master + '?date=' + date;
    request(url, (data) => {
        let hours = data['hours']
        let html = ''
        hours.forEach((item) => html += '<option value="' + item + '">' + item + ':00</option>')
        document.getElementById('time').innerHTML = html;
        document.getElementById('time').disabled = false;
    });
}

// price
function getPrice(url) {
    const master = document.getElementById('master').value;
    const service = document.getElementById('service').value;
    url += '?master=' + master + "&service=" + service;
    request(url, (data) => {
        document.getElementById('price').value = data['price'];
        document.getElementById('price_confirm').innerText = 'Price: ' + data['price'] + 'UAH';
    })
}

function postRequest(url, data) {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data)

}

// post form
function postSubmit() {
    location.href='../';
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const master = document.getElementById('master').value;
    const service = document.getElementById('service').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('datefield').value;
    const price = document.getElementById('price').value;
    const data = 'fname=' + fname + "&lname=" + lname + "&phone=" + phone + "&master=" + master + "&service=" + service
        + "&time=" + time + "&date=" + date + "&price=" + price;
    postRequest('../api/make_order', data)
}