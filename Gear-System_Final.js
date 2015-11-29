        var canvas, ctx;
        var centerX=0, centerY=0, Angle=0.015 , dA=0;
        var rpm=5
        var homeradius=184 , otherradius=59
		var scaleX=1 ,scaleY=1;
        var circles = []
        var navlinks=[]
        var texticons=[]
        var iconNo=-1;
        var IE=detectIE()
        var Circle = function(x, y, radius) {
    this.left =  (x - radius)*scaleX;
    this.top =   (y - radius)*scaleX;
    this.right = (x + radius)*scaleX;
    this.bottom =(y + radius)*scaleX;
};
       function init() {
            // This function is called after the page is loaded
            // 1 - Get the canvas
            canvas = document.getElementById('gearsCanvas');
            // 2 - Get the context
            ctx=canvas.getContext('2d');
			
			// 3 - Scale drawing to canvas size
			scaleX=canvas.width/601
			scaleY=canvas.height/607
			ctx.scale(scaleX,scaleY)
			
			// 4 - Setup button areas
            clickRegions()
            canvas.addEventListener('click', clickedHere );
            //canvas.addEventListener("mouseover", stop);
            canvas.addEventListener("mouseout", start);
            canvas.addEventListener("mousemove", hoveredHere);    ///for center icon/texticons
        
                       //5- Fonts

                      ctx.font = '30pt Calibri';
                      ctx.textAlign = 'center';
                       
            


          requestId = requestAnimationFrame(animationLoop)
        }




       function clickRegions(){
        //inspiraion from pterkildsen
          var circle0 = new Circle(293,295,0.7071*homeradius);
          var circle1 = new Circle(519,295, otherradius);
          var circle2 = new Circle(488,408,otherradius);
          var circle3 = new Circle(406,490,otherradius);
          var circle4 = new Circle(293,520,otherradius);
          var circle5 = new Circle(181,490,otherradius);
          var circle6 = new Circle(99,408,otherradius);
          var circle7 = new Circle(68,294,otherradius);
          var circle8 = new Circle(99,183,otherradius);
          var circle9 = new Circle(180,100,otherradius);
          var circle10 = new Circle(293,69,otherradius);
          var circle11 = new Circle(406,100,otherradius);
          var circle12 = new Circle(488,182,otherradius);
          

          
          circles.push(circle0);
          circles.push(circle1);
          circles.push(circle2);
          circles.push(circle3);
          circles.push(circle4);
          circles.push(circle5);
          circles.push(circle6);
          circles.push(circle7);
          circles.push(circle8);
          circles.push(circle9);
          circles.push(circle10);
          circles.push(circle11);
          circles.push(circle12);
          navlinks.push("http://2015.igem.org/Team:IISER_Pune"); //0 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Attributions"); //1 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Collaborations"); //2 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Software"); //3 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Safety"); //4 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Team"); //5 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Sponsors"); //6 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Parts"); //7 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Measurement"); //8 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Modeling"); //9 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Projects"); //10 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Notebook"); //11 
          navlinks.push("http://2015.igem.org/Team:IISER_Pune/Practices"); //12
          texticons.push("HOME")
          texticons.push("Attributions")
          texticons.push("Collaborations")
          texticons.push("Software")
          texticons.push("Safety")
          texticons.push("Team")
          texticons.push("Sponsors")
          texticons.push("Parts")
          texticons.push("Measurement")
          texticons.push("Modelling \ & \ Simulations")
          texticons.push("Project")
          texticons.push("Notebooks")
          texticons.push("Human Practices")

          
          
       };
       
       function clickedHere (e) {
         //Identifies Which circle clicked
         //put a function for opening respective page in if block
         var rect = canvas.getBoundingClientRect();
         var clickedX = e.clientX - rect.left
         var clickedY = e.clientY - rect.top
    
         for (var i = 0; i < circles.length; i++) {
             if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
                 openpage(i);
				 highlightgear(i);
             }
         }
       }
 
       function hoveredHere(e){
        var rect = canvas.getBoundingClientRect();
         var hoverX = e.clientX - rect.left
         var hoverY = e.clientY - rect.top
        for (var i = 0; i < circles.length; i++) {
             if (hoverX < circles[i].right && hoverX > circles[i].left && hoverY > circles[i].top && hoverY < circles[i].bottom) {
                 iconNo=i;
                 showlink()
				
                  highlightgear(i);
             }
         }
       }
       
       function showlink(){
        if (iconNo===-1){
                 ctx.drawImage(document.getElementById("Logo"),0,0,canvas.width/scaleX,canvas.height/scaleY)
           }

        else if (iconNo===0){
         ctx.fillStyle = 'black';


         ctx.drawImage(document.getElementById("Logo"),0,0,canvas.width/scaleX,canvas.height/scaleY)
         
         ctx.fillText(texticons[iconNo], 0.5*canvas.width/scaleX,0.7*canvas.height/scaleY);
         

        }
        else {

            ctx.fillStyle = 'red';
            wrapText(ctx,texticons[iconNo], 0.5*canvas.width/scaleX, 0.5*canvas.height/scaleY, 368, 35)
 
        }
        
       }


  

       

       
       
       function openpage(i){
		window.location.href= navlinks[i];
		}
	   
	   
       function highlightgear(i){
	   }
		function animationLoop() {
            // 1 - Clear the canvas
  
            ctx.clearRect(0, 0, canvas.width/scaleX, canvas.height/scaleY);
          
            // 2 Draw the gear canvas using variables for pos, angle, etc.
 
           drawGears(centerX, centerY, Angle);
		   
		   
		   ctx.drawImage(document.getElementById("Icons"),0,0,canvas.width/scaleX,canvas.height/scaleY)   //Icons on top
                   showlink()
          
          
           // 3 Move the gears  (change pos, angle, size, etc.   -- with math)
          
          
          
          
          
          Angle+=rpm * 0.001745329252;
             dA-=rpm * 3.5 * 0.001745329252;
          
          requestId = requestAnimationFrame(animationLoop)
        }
        
        
        
        
 
   function putgear(atx,aty,sangle){
     ctx.save()
     ctx.translate(atx, aty)
     ctx.rotate(sangle)
     ctx .translate(- otherradius,- otherradius)
     ctx.drawImage(document.getElementById("Gearside"),0,0)
     ctx.restore()
   }
        
        
   function drawGears(x, y, angle, headColor, eyeColor) {   



   if (IE) {
    }
   else
  {



     // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
     ctx.save();
     
     // Moves or scales coordinate system to draw gears at new angles , sizes

     ctx.translate(293,295);
     ctx.rotate(Angle)
     ctx.translate(-184,-184)
     ctx.drawImage(document.getElementById("Gearcentre"),0,0)
     ctx.restore()
     ctx.save();
     
     
     // draw side gears
     putgear(519,295,0+dA)
     putgear(488,408,-1.832595714594046+dA)
     putgear(406,490,-3.665191429188092+dA)
     putgear(293,520,-5.497787143782138+dA)
     putgear(181,490,-7.330382858376184+dA)
     putgear(99,408, -9.16297857297023+dA)
     putgear(68,294, 10.995574287564276+dA)
     putgear(99,183,  9.16297857297023+dA)
     putgear(180,100, 7.330382858376184+dA)
     putgear(293,69,  5.497787143782138+dA)
     putgear(406,100, 3.665191429188092+dA)
     putgear(488,182, 1.832595714594046+dA)
     

     
     
     // GOOD PRACTICE : Restore context at end
     ctx.restore();
     }
   }
    
      
      function start(){
       iconNo=-1;
       if (requestId===0) {
        requestId = requestAnimationFrame(animationLoop)
       }
      }      
      
    
     function stop() {
         //if (requestId) {
          //   cancelAnimationFrame(requestId);
          //   requestId = 0;
         //}
     }
        

        function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }
    



   function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}


   init()