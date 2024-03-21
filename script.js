
// const collects  = document.getElementById(`addItem`)
// const alerts = document.getElementById(`appear`)

// function collect(){
//     if (items.value == ''){
//         collects.addEventListener('click', ()=>{
//             alerts.classList.remove('d-none');
//             alerts.classList.add('d-block');
//         });
//     } else {
//         cart.push(items.value)
//         document.getElementById('items').value = ''
//         displayItem()
//     }
// }

    var cart = []

    function collect(){
        if (items.value ==''){
        appearr.style.display = 'block'
        } else {
            notYet.style.display= 'none'
            appearr.style.display = 'none'
            showButton.style.display = 'block'
            cart.push(items.value)
            document.getElementById(`items`).value = ''
            displayItem()
        }
    }

    function delLast(){
        cart.pop()
        console.log(cart);
        displayItem()
    }

    function addFirst(){
        if (firstitem.value == ""){
            errors.style.display ='block';
        }
        else {
            errors.style.display ='none';
            cart.unshift( document.getElementById('firstitem').value)
            displayItem()
        }
    }
    
    function delAll(){
        var confirmation = confirm('Are you sure you want to delete. This action is irreversible')
        if (confirmation == true){
            cart.splice(0, cart.length);
            console.log(cart);
            displayItem()
        }
    }

    function editAny(){
        var editNumber = Number(document.getElementById('itemnumber').value)
        var replace = document.getElementById('replacement').value
        if (editNumber == "" || replace == ""){
            alert("Error")
        } else {
            if (editNumber > cart.length){
                alert('input number is outrageous')
            } else {
            cart.splice (editNumber-1, 1, replace)
            displayItem()
        }
        }
        }
    



    //     var editConfirmation = Number(prompt('Specify the number you want to edit'))
    //     var replaceNum = prompt('new value')
    //     cart.splice (editConfirmation-1, 1, replaceNum)
    //     displayItem()
    // }

    function delAny(){
        var start = Number(prompt('which number would you like to delete'))
        cart.splice(start-1, 1)
        displayItem()
    }




function displayItem(){
    var tableHTML = '<table>'
    tableHTML += '<tr>'
    tableHTML += '<th>S/N</th>'
    tableHTML += '<th>Items</th>'
    tableHTML += '<tr>'
    for (var i = 0; i < cart.length; i++){
        console.log(cart[i]);
        tableHTML += '<tr>'
        tableHTML += `<td><small>${i+1}</small></td>`
        tableHTML += `<td>${cart[i]}</td>`
        tableHTML += '</tr>'
    }
    
    tableHTML += '</table>'
    document.getElementById('screennn').innerHTML = tableHTML;
}