window.onload = function(){

  var selectedOperator = "";
  var before = "";
  var after= "";
  var numbers = document.querySelectorAll(".num");
  for(var i=0; i<numbers.length; i++) {
      numbers[i].addEventListener("click", function(){
        //when we click show on display: step:2
          document.getElementById("result").innerHTML += this.value;


          // if no selected operator wait for nr || after selected operator

          if(selectedOperator==''){
            before += this.value;
          }
          else if(selectedOperator!== ''){
            after += this.value;
          }
      },false);
  }

  //operators
  
  var operators = document.querySelectorAll(".operator");
  for(var i=0; i<operators.length; i++) {
      operators[i].addEventListener("click", function(){

        document.getElementById("result").innerHTML += this.value;

        //selected operators value

         selectedOperator = this.value;


        
      },false);
  }

         document.getElementById("equation").addEventListener("click", function(){

          // equation
          //parseFloat!!

          var calResult = "";

        if(selectedOperator == "+"){
          calResult   += parseFloat(before) + parseFloat(after);
        }

        else if(selectedOperator =="-"){
          calResult += parseFloat(before) - parseFloat(after);
        }

        else if(selectedOperator=="*"){
          calResult += parseFloat(before) * parseFloat(after);
        }

        else if(selectedOperator=="/"){
          calResult += parseFloat(before) / parseFloat(after);
        
        }

        
        else if(selectedOperator=="%") {
          calResult += (parseFloat(before)/100);
        
          
          
        }

        

    

        // calculation result

        document.getElementById("result").innerHTML = calResult;


  },false);

         document.getElementById("delete").addEventListener("click", function(){

          selectedOperator = "";
          before= "";
          after="";
          document.getElementById("result").innerHTML = "";

  },false);

};
