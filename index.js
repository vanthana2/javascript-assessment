"use strict";

document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();
    function submitForm() {
      
        let productName = document.getElementById('productName').value;
        let amount = document.getElementById('amount').value;
    
        if (productName === '') 
        {
            document.getElementById('product-alert').textContent = 'Invalid Product Name';
            return;
        } 
        else 
        {
            document.getElementById('product-alert').textContent = '';
        }
    
        if (amount === '' || isNaN(amount)) 
        {
            document.getElementById('amount-alert').textContent = 'Invalid Amount';
            return;
        } 
        else 
        {
            document.getElementById('amount-alert').textContent = '';
        }
    
        createListDiv(productName, amount);
    }
    submitForm();
    function createListDiv(productName, amount) 
    {
        let dataList = document.getElementById('entry-name');
        let element = document.createElement('div');
        element.className = 'element';

        let listname = document.createElement('h5');
        listname.className = 'list-name';
        listname.textContent = productName;

        let listamount = document.createElement('h5');
        listamount.className = 'list-amount';
        listamount.textContent = amount;

        let listdata = document.createElement('div');
        listdata.className = 'listdata';
        listdata.append(listname, listamount);
        let index = dataList.children.length;
        listdata.classList.add(index % 2 === 0 ? 'even' : 'odd');

        let deleteicon = createDeleteIcon(element, dataList);

        element.addEventListener('mouseover', function () 
        {
            deleteicon.style.display = 'inline';
        });

        element.addEventListener('mouseout', function ()
        {
            deleteicon.style.display = 'none';
        });

        element.append(listdata, deleteicon);
        dataList.append(element);

        updateTotalAmount();
    }

    
    function createDeleteIcon(element, dataList) 
    {
        let deleteicon = document.createElement('li');
        deleteicon.className = 'fa-solid fa-trash';
        deleteicon.style.color ='rgb(204,2,2)';
        deleteicon.style.display = 'none';

    
        deleteicon.addEventListener('click', function () 
        {
            dataList.removeChild(element);
            updateTotalAmount();
            alert("Do you want to delete this Item?");
        });
    
        return deleteicon;
    }
    
    function updateTotalAmount() 
    {
        let totalAmount = 0;
        let totalamt = document.querySelectorAll('.list-amount');
    
        totalamt.forEach(function (listAmtElement) {
            totalAmount += parseFloat(listAmtElement.textContent);
        });
    
        document.getElementById('totalAmount').textContent = totalAmount;
    }

    let arrow = document.getElementById('arrow');
    arrow.addEventListener('click',productsort)

    function productsort()
    {
        let dataList = document.getElementById('entry-name')
        
    }

});