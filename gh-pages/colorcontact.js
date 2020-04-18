function changeothercolor(){
            let chbox;
            chbox=document.getElementById('bone');
            if(chbox.checked){
                document.getElementsByClassName("mainmenu")[0].style.background = "Gainsboro";
                document.body.style.background = "white";
                document.getElementsByTagName("a")[0].style.color = "black";
                document.getElementsByTagName("a")[1].style.color = "black";
                document.getElementsByTagName("a")[2].style.color = "black";
                document.getElementsByClassName("topmain")[0].style.color = "white";
                document.getElementsByClassName("topmain")[0].style.background = "black";
                document.getElementsByClassName("toptwo")[0].style.color = "black";
                document.getElementById("mainmenu").style.boxShadow = "0 0 0px 0px";
                document.getElementsByTagName("i").style.color = "black";
            }else {
                document.getElementsByClassName("mainmenu")[0].style.background = "#0D0D0C";
                document.getElementsByClassName("mainblock")[0].style.background = "#0D0D0C";
                document.body.style.background = "#0e0e10";
                document.getElementsByTagName("a")[0].style.color = "black";
                document.getElementsByTagName("a")[1].style.color = "black";
                document.getElementsByTagName("a")[2].style.color = "black";
                document.getElementsByClassName("topmain")[0].style.color = "white";
                document.getElementsByClassName("topmain")[0].style.background = "black";
                document.getElementsByClassName("toptwo")[0].style.color = "black";
                document.getElementById("mainblock").style.boxShadow = "0 0 5px 2px";
                document.getElementsByTagName("i").style.color = "white";
            }
        }
