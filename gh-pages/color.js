var chbox;
    chbox=document.getElementById('bone');
        function changecolor() {
        var chbox;
        chbox=document.getElementById('bone');
            if(chbox.checked) {
                document.getElementById("mainmenu").style.background = "Gainsboro";
                document.getElementById("mainblock").style.background = "Gainsboro";
                document.body.style.background = "white";
                document.getElementById("rightblock").style.background = "Gainsboro";
                document.getElementsByClassName("b1")[0].style.background = "DimGray";
                document.getElementsByClassName("b1")[1].style.background = "DimGray";
                document.getElementsByClassName("b1")[2].style.background = "DimGray";
                document.getElementById("mainblock").style.boxShadow = "0 0 0px 0px";
                document.getElementById("mainmenu").style.boxShadow = "0 0 0px 0px";
                document.getElementById("rightblock").style.boxShadow = "0 0 0px 0px";
                document.getElementsByTagName("p")[0].style.color = "black";
                document.getElementsByTagName("p")[1].style.color = "black";
                document.getElementsByTagName("p")[2].style.color = "black";
                document.getElementsByTagName("p")[3].style.color = "black";
                document.getElementsByTagName("p")[4].style.color = "black";
                document.getElementsByTagName("p")[5].style.color = "black";
                document.getElementsByTagName("h1")[0].style.color = "black";
                document.getElementsByTagName("h1")[1].style.color = "black";
                document.getElementsByTagName("h1")[2].style.color = "black";
                document.getElementsByTagName("h1")[3].style.color = "black";
                document.getElementsByTagName("a")[0].style.color = "black";
                document.getElementsByTagName("a")[1].style.color = "black";
                document.getElementsByClassName("topmain")[0].style.color = "white";
                document.getElementsByClassName("topmain")[0].style.background = "black";
                document.getElementsByClassName("toptwo")[0].style.color = "black";
            }
            else {
                document.getElementById("mainmenu").style.background = "#0D0D0C";
                document.getElementById("mainblock").style.background = "#0D0D0C";
                document.body.style.background = "#0e0e10";
                document.getElementById("rightblock").style.background = "#0D0D0C";
                document.getElementsByClassName("b1")[0].style.background = "darkgray";
                document.getElementsByClassName("b1")[1].style.background = "darkgray";
                document.getElementsByClassName("b1")[2].style.background = "darkgray";
                document.getElementById("mainblock").style.boxShadow = "0 0 5px 2px";
                document.getElementById("mainmenu").style.boxShadow = "0 0 5px 2px";
                document.getElementById("rightblock").style.boxShadow = "0 0 5px 2px";
                document.getElementsByTagName("p")[0].style.color = "white";
                document.getElementsByTagName("p")[1].style.color = "white";
                document.getElementsByTagName("p")[2].style.color = "white";
                document.getElementsByTagName("p")[3].style.color = "white";
                document.getElementsByTagName("p")[4].style.color = "white";
                document.getElementsByTagName("p")[5].style.color = "white";
                document.getElementsByTagName("h1")[0].style.color = "white";
                document.getElementsByTagName("h1")[1].style.color = "white";
                document.getElementsByTagName("h1")[2].style.color = "white";
                document.getElementsByTagName("h1")[3].style.color = "white";
                document.getElementsByTagName("a")[0].style.color = "white";
                document.getElementsByTagName("a")[1].style.color = "white";
                document.getElementsByClassName("topmain")[0].style.color = "black";
                document.getElementsByClassName("topmain")[0].style.background = "white";
                document.getElementsByClassName("toptwo")[0].style.color = "white";
            }
        }
