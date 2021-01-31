class MultiHome {
       constructor () {
        this.back=createImg('Images/backButton.png',
        () => {
            this.back.size(100, AUTO);
        });

        this.submit=createImg('Images/submit.png',
        () => {
            this.submit.size(200, AUTO);
        });  
         this.title = createElement('H2')
         this.greeting = createElement('H3')
        this.name = createInput('Enter Your Name')
        }


        Hide(){
            this.title.hide();    
            this.name.hide(); 
            this.back.hide();  
            this.submit.hide();
            console.log("hide")
                         
        }

        display(){

           
            this.title.position(displayWidth/2 - 100, displayHeight/2 - 100)  
            this.name.position(displayWidth/2 - 100, displayHeight/2)
            this.back.position(100, displayHeight - 300, 50,50);
            this.submit.position(displayWidth - 300, displayHeight - 300, 50,50)
          
                    this.back.mousePressed(()=>{
                   
                    multiHomeObj.Hide();       
                    homeObj.display();
             
                     console.log("back button is pressed")
                  });

                  this.submit.mousePressed(()=>{
                      multiHomeObj.Hide(); 
                      var playerName = this.name.value(); 
                      this.greeting.html("Hello " + playerName);
                      this.greeting.position(displayWidth/2 - 70, displayHeight/2 - 50)
                  })
        }      


}