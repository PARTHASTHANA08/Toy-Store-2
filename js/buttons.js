AFRAME.registerComponent("createButtons" , {
    init: function() {  
        var button1 = document.createElement("button");
        button1.innerHTML = "ORDER NOW";
        button1.setAttribute("id", "rating-button");
        button1.setAttribute("class", "btn btn-warning");
        var button2 = document.createElement("button");
        button2.innerHTML = "SEE MORE DETAILS"; 
        button2.setAttribute("id", "order-button"); 
        button2.setAttribute("class", "btn btn-warning"); 
        var buttonDivi = document.getElementById("buttonDiv"); 
        buttonDivi.appendChild(button1); buttonDivi.appendChild(button2); } 
})