function generateForm(){
  var numEchos = document.getElementById("numEchos");
  var numItems = document.getElementById("numItems");
  var button = document.getElementById("generateFormButton");

  var echos = numEchos.value;
  var items = numItems.value;
  numItems.parentNode.removeChild(numItems);
  button.parentNode.removeChild(button);

  numEchos.setAttribute("id", "restaurantId");
  numEchos.setAttribute("type", "text");
  numEchos.setAttribute("placeholder", "Restaurant ID");
  numEchos.value = "";

  var echoDisplay = document.createElement("p");
  echoDisplay.setAttribute("id", "echoDisplay");
  var textNode1 = document.createTextNode(echos);
//  echoDisplay.appendChild(textNode1);

  var itemDisplay = document.createElement("p");
  itemDisplay.setAttribute("id", "itemDisplay");
  var textNode2 = document.createTextNode(items);
//  itemDisplay.appendChild(textNode2);

  document.getElementById("restaurantForm").appendChild(echoDisplay);
  document.getElementById("restaurantForm").appendChild(itemDisplay);

  for (var i = 0; i < echos; i++){
    var brr = document.createElement("br");
    document.getElementById("restaurantForm").appendChild(brr);

    var echobox = document.createElement("input");
    echobox.setAttribute("type", "text");
    echobox.setAttribute("placeholder", "Echo ID");
    echobox.setAttribute("id", "echo"+i);
    document.getElementById("restaurantForm").appendChild(echobox);
  }

  var brr = document.createElement("br");
  document.getElementById("restaurantForm").appendChild(brr);
  var brr = document.createElement("br");
  document.getElementById("restaurantForm").appendChild(brr);

  for (var j = 0; j < items; j++){
    var itembox = document.createElement("input");
    itembox.setAttribute("type", "text");
    itembox.setAttribute("placeholder", "Item Name");
    itembox.setAttribute("id", "itemName"+j);
    document.getElementById("restaurantForm").appendChild(itembox);

    var costbox = document.createElement("input");
    costbox.setAttribute("type", "text");
    costbox.setAttribute("placeholder", "Item Cost");
    costbox.setAttribute("id", "itemCost"+j);
    document.getElementById("restaurantForm").appendChild(costbox);

    var brr = document.createElement("br");
    document.getElementById("restaurantForm").appendChild(brr);
  }

  var brr = document.createElement("br");
  document.getElementById("restaurantForm").appendChild(brr);

  var submit = document.createElement("button");
  submit.setAttribute("id", "submitButton");
  submit.setAttribute("onclick", "createRestaurant()");
  submit.setAttribute("class", "btn btn-success");
  submit.innerHTML = "Submit";
  document.getElementById("restaurantForm").appendChild(submit);
}

function createRestaurant(){
  var echos = document.getElementById("echoDisplay").innerHTML;
  var items = document.getElementById("itemDisplay").innerHTML;

  var object = {
    "name": "",
    "id": "",
    "echos": [],
    "items": [],
  }

  var name = document.getElementById("rName").value;
  object.name = name;

  var restaurantId = document.getElementById("restaurantId").value;
  object.id = restaurantId;

  for (var i = 0; i < echos; i++){
    var echo = document.getElementById("echo"+i).value;
    object.echos.push(echo);
  }

  for (var j = 0; j < items; j++){
    var itemName = document.getElementById("itemName"+j).value;
    var itemCost = document.getElementById("itemCost"+j).value;

    object.items.push({"name": itemName, "cost": itemCost});
  }
  var dataObj = JSON.stringify(object);
  var url = "http://waiter.bleak.io/restaurant";
  console.log(jQuery.post(url, dataObj));
  var myNode = document.getElementById("restaurantForm");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  var tempRName = document.createElement("input");
  tempRName.setAttribute("type", "text");
  tempRName.setAttribute("placeholder", "Name");
  tempRName.setAttribute("id", "rName");
  tempRName.setAttribute("class", "form-control");
  var tempNumEchoes = document.createElement("input");
  tempNumEchoes.setAttribute("type", "text");
  tempNumEchoes.setAttribute("placeholder", "Number of Tables");
  tempNumEchoes.setAttribute("id", "numEchos");
  tempNumEchoes.setAttribute("class", "form-control");
  var tempItems = document.createElement("input");
  tempItems.setAttribute("type", "text");
  tempItems.setAttribute("placeholder", "Number of Items");
  tempItems.setAttribute("id", "numItems");
  tempItems.setAttribute("class", "form-control");
  var tempButton = document.createElement("button");
  tempButton.setAttribute("onclick", "generateForm()");
  tempButton.setAttribute("class", "btn btn-success");
  var t = document.createTextNode("Generate Form");
  tempButton.appendChild(t);
  tempButton.setAttribute("id", "generateFormButton");
  var mybr = document.createElement("br");
  myNode.appendChild(tempRName);
  myNode.appendChild(mybr);
  myNode.appendChild(tempNumEchoes);
  var mybr = document.createElement("br");
  myNode.appendChild(mybr);
  myNode.appendChild(tempItems);
  var mybr = document.createElement("br");
  myNode.appendChild(mybr);
  myNode.appendChild(tempButton);
}

function getNessieData(){
  var url = "http://waiter.bleak.io/restaurant";
  var r = document.getElementById("nessieName").value;
  var node = document.getElementById("temp");
  var nodeChildren = node.childNodes;
  if (nodeChildren.length >= 1) {
    var myNode = document.getElementById("temp");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }
  console.log(nodeChildren);
  jQuery.get(url+"/"+r, function(data, status, xhr){
    console.log(data);
    var node = document.createElement("p");
    node.innerHTML = "$" + Number(Math.round(data+'e2')+'e-2');
    document.getElementById("temp").appendChild(node);
  });

}
