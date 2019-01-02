   // This function pops up an alert box
        function alertme() {
            alertmsg = document.littlebrain.src + "\nHeight: " + document.littlebrain.height + "\nWidth: " + document.littlebrain.width;
            alert(alertmsg);
            return true;
        }
        //  When you hover over the bored, it will changed red and show excited
        function changeColor() {
            document.getElementById("h3style").style.color = "red";
            document.getElementById("h3style").firstChild.nodeValue = "Excited";
            return true;
        }
        // This one is responsible of taking back the text when not hovering
        function changeAgain() {
            document.getElementById("h3style").style.color = "gray";
            document.getElementById("h3style").firstChild.nodeValue = "Bored";
            return true;
        }
        //  This one will turn on and off the paragraph
        function showPara() {
            document.getElementById("first").style.visibility = (document.formex.firstpara.checked) ? "visible" : "hidden";
            document.getElementById("second").style.visibility = (document.formex.secondpara.checked) ? "visible" : "hidden";
            document.getElementById("third").style.visibility = (document.formex.thirdpara.checked) ? "visible" : "hidden";
            return true;
        }
        // This one is responsible of resizing image
        function changeImage() {
            document.getElementById("littlebrain").style.height = "35%";
            document.getElementById("littlebrain").style.width = "35%";
            return true;
        }

 //This is a boolean value which checks if the browser you are using is Internet explorer
        var mie = (navigator.appName === "Microsoft Internet Explorer") ? true : false;

        if (!mie) {
            document.captureEvents(Event.MOUSEMOVE); // Specifies that you want all mouse movement events passed to the document
            document.captureEvents(Event.MOUSEDOWN); //This one will capture events when typed
        }
        // initializing the event that will happen when the key is pressed, mouse moved or mose clicked
        document.onkeypress = keyPressed;
        document.onmousemove = mousePos;
        document.onmousedown = mouseClicked;
        //The values are initialized to zero
        var mouseClick = 0;
        var keyClicked = 0;
        var mouseX = 0;
        var mouseY = 0;

        //This one is responsible of showing the mouse when you are moving it
        function mousePos(e) {
            if (!mie) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            } else {
                mouseX = event.clientX + document.body.scrollLeft;
                mouseY = event.clientY + document.body.scrollTop;
            }

            document.formex.mousex.value = mouseX;
            document.formex.mousey.value = mouseY;
            return true;
        }
        //When the key is pressed, this happens, it will show which character is pressed
        function keyPressed(e) {
            if (mie) {
                //  e = window.event;
                keyClicked = e.keyCode;
            } else {
                keyClicked = String.fromCharCode(e.charCode); // Converts char code to character
            }

            if (!keyClicked) {
                return false;
            }
            document.formex.keypress.value = keyClicked;
            return true;
        }
        // When the mouse is clicked, it will show which side you clicked
        function mouseClicked(e) {
            if (mie) {
                switch (event.button) {
                    case 0:
                        document.formex.mousebutton.value = "Left";
                        break;
                    case 1:
                        document.formex.mousebutton.value = "Middle";
                        break;
                    default:
                        document.formex.mousebutton.value = "Right";
                        break;
                }
                return false;

            } else {
                switch (e.which) {
                    case 1:
                        document.formex.mousebutton.value = "Left";
                        break;
                    case 2:
                        document.formex.mousebutton.value = "Middle";
                        break;
                    default:
                        document.formex.mousebutton.value = "Right";
                        break;
                }
                return true;
            }
        }
        // Here are other useful events*****************************************************
        /* The other JavaScript Events
        OnAbort - Called when a page load is interrupted
        OnError - Called when an error occurs during page load
        OnKeyDown - When key is pressed but not released
        OnKeyUp - When key is released
        OnMouseUp - When mouse button is released
        OnReset - When reset button is clicked
        OnSelect - When text is selected
        OnSubmit - When submit button is clicked
        OnUnload - When user leaves a page


        */
