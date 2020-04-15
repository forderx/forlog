var elem = document.getElementById("othercolor");
      othercolor.onclick = function () {
        if(this.style.backgroundColor)
          this.style.backgroundColor = "white";
        if(this.style.color)
          this.style.color = "black";
        else
           this.style.backgroundColor = "#0e0e10";
      }

