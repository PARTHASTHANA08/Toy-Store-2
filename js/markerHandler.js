AFRAME.registerComponet("markerHandler",{
    init: async function(){
        this.el.addEventListener("markerFound" ,()=>{
            this.handleMarkerFound()
        });
        this.el.addEventListener("markerLost" ,()=>{
            this.handleMarkerLost()
        });
    },
    handleMarkerFound : function(){
        var buttondiv = document.getElementById("buttonDiv")
        buttondiv.style.display = "flex"
        var detailButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        detailButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"rate Dish",
                text:"work in progress"
            })
        })
        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"ordering",
                text:"your order is placed succesfully"

            })
        })
    },
    handleMarkerLost : function(){
        var buttondiv = document.getElementById("buttonDiv")
        buttondiv.style.display="none"
    }
})