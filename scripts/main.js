var time = '';
var dateValue = '';


function send() {
    let dateTime = document.getElementById('dateTimeInput');
    let button = document.getElementById('bookHourBtn');


    button.addEventListener('click', () => {
        let nameInput = document.getElementById('username').value;
        let result = '';
        let regex = /[A-z][A-Za-z0-9_ ]+/gm
        
        if(nameInput.length< 3 || nameInput.length > 25 || nameInput.match(regex).join('')!== nameInput) {
            
            alert('Please enter a valid name');
            return;
        }
        

        if(dateValue === '') {
            alert('Please enter a date and time')
        } else {

        let name = document.getElementById('lecturer').value;

        let dateVal =dateValue.split('/');

        result += name + ' - ' + dateVal[2] +'/' + dateVal[1] + ' - ' + time;

        let list = document.getElementById('list');
        let li = document.createElement('li');
        let span = document.createElement('span');
        let i = document.createElement('i');
        i.className = 'fas fa-chevron-circle-right';
        span.innerText = result;
        li.appendChild(span);
        li.appendChild(i);
        list.appendChild(li);

        dateValue = '';
        document.getElementById('username').value ='';
        dateTime.value = dateValue;
        

        }

        

        
    })
}



function openPicker() {
    let dateTime2 = document.getElementById('dateTimeInput');
    

    dateTime2.addEventListener('focus', () => {
       
        let form = document.getElementsByTagName('form')[0];
        let simplepicker = new SimplePicker(form);

        simplepicker.on('submit', (date, readableDate) => {


            let readable = readableDate.split(' ');

            dateValue += readable[2] +'/';
            
            if(Number(readable[0]) < 10 ) {
                dateValue += '0' + readable[0] + '/';
            } else {
                dateValue += readable[0] + '/';
            }
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            let count = 1;
            for(let date1 of month) {
                if(readable[1] === date1 && count < 10) {
                    dateValue += '0' + count;
                } else if (readable[1] === date1) {
                    dateValue += count;
                }

                count++;
            }

            var dateTime = document.getElementById('dateTimeInput');
            if(dateValue.length > 10) {
                dateValue = dateValue.substring(10,20);
            }
            dateTime.value = dateValue;

            time = readable[3];
            form.removeChild(form.lastChild);
            

        })

        simplepicker.on('close', () => {
            form.removeChild(form.lastChild);
            dateValue= '';
        })

    })
}