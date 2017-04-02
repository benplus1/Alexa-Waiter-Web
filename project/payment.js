
function getReceiptNumber() {
  var x = (Math.pow(10, 8)) * Math.random();
  var result = Math.trunc(x);
  document.getElementById("Receipt").innerHTML = "Receipt #: " + result + "C";
}

function getTimeStamp() {
  var x = new Date().toLocaleString();
  document.getElementById("TimeStamp").innerHTML = x;
}

window.onload = function() {
  getReceiptNumber();
  getTimeStamp();
};

window.setInterval(function(){
  makeItems();
}, 1000);

function makeItems() {
  var xmlHttp = new XMLHttpRequest();
  console.log(xmlHttp);
  xmlHttp.onreadystatechange = function() {
      var obj = JSON.parse(xmlHttp.response);
      if (xmlHttp.status == 500 || obj.status == "invalid order id"){
        console.log("error");
      }
      else if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          var elements = document.getElementsByClassName("foodItem");
          while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
          }
          console.log("entered");
          console.log(xmlHttp.response);
          document.getElementById("restaurant").innerHTML = obj.name;
          document.getElementById("title").innerHTML = ("Receipt: " + obj.name);
          var numItems = obj.items.length;
          for (var i = 0; i < numItems; i++){
            var item = document.createElement("tr");
            item.setAttribute("class", "foodItem");
            var name = document.createElement("td");
            name.setAttribute("class", "col-md-9");
            var em = document.createElement("em");
            em.innerHTML = obj.items[i].name;
            name.appendChild(em);
            var quantity = document.createElement("td");
            quantity.setAttribute("class", "col-md-1");
            quantity.setAttribute("style", "text-align: center");
            quantity.innerHTML = obj.items[i].quantity;
            var price = document.createElement("td");
            price.setAttribute("class", "col-md-1 text-center");
            price.innerHTML = "$" + obj.items[i].price;
            var subsubtotal = document.createElement("td");
            subsubtotal.setAttribute("class", "col-md-1 text-center");
            var nice = (obj.items[i].price)*(obj.items[i].quantity);
            subsubtotal.innerHTML = "$" + nice;
            //subsubtotal.innerHTML = "$234";
            item.appendChild(name);
            item.appendChild(quantity);
            item.appendChild(price);
            item.appendChild(subsubtotal);
            document.getElementById("tbody").insertBefore(item, document.getElementById("subtotal"));
          }
          var temp = 0.07 * (obj.subtotal);
          temp = Number(Math.round(temp+'e2')+'e-2');
          document.getElementById("actualSub").innerHTML = "$" + Number(Math.round(obj.subtotal+'e2')+'e-2');
          document.getElementById("actualTax").innerHTML = "$" + Number(Math.round(temp+'e2')+'e-2');
          var temp2 = 1.07 * (obj.subtotal);
          temp2 = Number(Math.round(temp2+'e2')+'e-2');
          document.getElementById("actualTot").innerHTML = "$" + (temp2);
        }
  }
  xmlHttp.open("GET", "http://08fd0bc4.ngrok.io/cartSum/12/-2", true);
  xmlHttp.send(null);


}
