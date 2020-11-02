// UI Elements
let product_list = document.querySelector('#product-list'),
    cart_list = document.querySelector('#cart-list');

// Product Class
class Products{
    constructor(product, price){
        this.product = product;
        this.price = price;
    }
}

// UI Class
class UI{
    static addItemToCart(item, num_of_items){
        let tr = document.createElement('tr');
// Add Serial Number
        var th = document.createElement('th');
        th.innerHTML = num_of_items
        tr.appendChild(th);
// Add Product Name
        var td = document.createElement('td');
        td.innerHTML = item.product;
        tr.appendChild(td);
// Add Price
        var td = document.createElement('td');
        td.innerHTML = item.price;
        tr.appendChild(td);
// Button for remove
        var td = document.createElement('td');
        var link = document.createElement('a');
        link.classList.add('btn', 'btn-danger', 'btn-sm');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        td.appendChild(link);
        tr.appendChild(td);

        // console.log(tr);
        cart_list.appendChild(tr);
    }
}

// Store in Local Storage Class
class Store{
    static getProducts(){
        let items;
        if(localStorage.getItem('items') === null){
            items = [];
        }
        else{
            items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }

    static addItemToLS(item){
        let items = Store.getProducts();
        // console.log(items)
        items.push(item);
        // console.log(items)
        localStorage.setItem('items', JSON.stringify(items));
        UI.addItemToCart(item, items.length);

    }

    static removeItemFromLS(nam, dam){
        var items = Store.getProducts();
        items.forEach((tmp, index)=>{
            if(tmp.product === nam && tmp.price === dam){
                items.splice(index, 1);
            }
        })
        localStorage.setItem('items', JSON.stringify(items));

    }
}

// Define Event Listners
product_list.addEventListener('click', addToCart);
document.addEventListener('DOMContentLoaded', loadItems);
cart_list.addEventListener('click', removeItem);


// Define Functions
function addToCart(e){
    if(e.target.hasAttribute('href')){
        let elmnt = e.target.parentNode.parentNode.parentNode
        let product = elmnt.childNodes[3].textContent.trim(),
        price = elmnt.childNodes[5].textContent.trim();
        let item = new Products(product, price);
        Store.addItemToLS(item);
    }
    e.preventDefault()
}

function loadItems(e){
    let items = Store.getProducts();
    let count = 1;
    items.forEach(item =>{
        UI.addItemToCart(item, count);
        count += 1;
    })
}

function removeItem(e){
    if(e.target.hasAttribute('href')){
        let elmnt = e.target.parentNode.parentNode
        let product = elmnt.childNodes[1].textContent.trim();
        let price = elmnt.childNodes[2].textContent.trim();
        Store.removeItemFromLS(product, price);
        elmnt.remove();
    }
    // e.preventDefault()
}