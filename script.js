// function addNewWEField(){
//     //   console.log('adding new experience ') ; 
//     let newNode = document.createElement('textarea');
//     newNode.classList.add("form-control");
//     newNode.classList.add("weField");
//     newNode.classList.add("mt-2");
    
//     newNode.setAttribute("rows",3);
//     newNode.setAttribute("placeholder","Enter here");
    
//     let weOb = document.getElementById('we');
//     let weAddButtonOb = document.getElementById('weAddButton');
    
//     weOb.insertBefore(newNode, weAddButtonOb );
    
//     }

function addNewWEField() {
  const weContainer = document.getElementById('we');
  const newWEField = document.createElement('div');
  newWEField.classList.add('form-group', 'mt-2');
  
  newWEField.innerHTML = `
    <label for="">Project Title:</label>
    <textarea placeholder="Enter here" class="form-control weField"></textarea>
    
    <div class="form-group mt-3">
      <label for="">Select your photo</label>
      <input type="file" class="form-control">
    </div>
    
    <label for="">Tech Stacks used:</label>
    <textarea placeholder="Enter here" class="form-control weField"></textarea>
    
    <label for="">Description:</label>
    <textarea placeholder="Enter here" class="form-control weField"></textarea>
    
    <label for="">Github Link:</label>
    <textarea placeholder="Enter here" class="form-control weField"></textarea>
  `;
  
  weContainer.appendChild(newWEField);
}
    
function EaddNewWEField() {
  const EweContainer = document.getElementById('Ewe');
  const EnewWEField = document.createElement('div');
  EnewWEField.classList.add('form-group', 'mt-2');
  
  EnewWEField.innerHTML = `
    <label for="">Name of the Event:</label>
    <textarea placeholder="Enter here" class="form-control EweField"></textarea>
    
    <div class="form-group mt-3">
      <label for="">Select your photo</label>
      <input type="file" class="form-control">
    </div>
    
    <label for="">Role:</label>
    <textarea placeholder="for example Speaker/Organizer/ Volunteer etc." class="form-control EweField"></textarea>
    
    <label for="">Organized by: </label>
    <textarea placeholder="Enter here" class="form-control EweField"></textarea>
    
    <label for="">Venue:</label>
    <textarea placeholder="Enter here" class="form-control EweField"></textarea>
  `;
  
  EweContainer.appendChild(EnewWEField);
}
    function addNewAQField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    
    let aqOb = document.getElementById('aq');
    let aqAddButtonOb = document.getElementById('aqAddButton');
    
    aqOb.insertBefore(newNode, aqAddButtonOb );
    }
    
    // generating cv
    function generateCV(){
        // console.log("generating CV")
        let nameField = document.getElementById('nameField').value;
        let nameT1 = document.getElementById('nameT1');
        nameT1.innerHTML = nameField;
     document.getElementById('nameT2').innerHTML = nameField;
     document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
     document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
     let link = document.getElementById("instaField").value;
    //  document.getElementById("fbT").href= 'link';
    // console.log(document.getElementById("fbField").value);
     document.getElementById("fbT").href = document.getElementById("fbField").value;
     document.getElementById("instaT").href = document.getElementById("instaField").value;
     document.getElementById("linkedT").href = document.getElementById("linkedField").value;
     
     //objective
     document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;
    //  card


    // document.getElementById('proTittle1').innerHTML =  document.getElementById('tittle').value;
    // document.getElementById('discripT1').innerHTML =  document.getElementById('discrip').value;
    // document.getElementById('techT1').innerHTML =  document.getElementById('tech').value;
    // document.getElementById('githubT1').href =  document.getElementById('github').value;

    
    
     //we
  //    let wes = document.getElementsByClassName('weField');

  //    let str=" ";

  //    for(let e of wes){
  //      str = str + `<li> ${e.value} </li>` ;
  //    }
  //  document.getElementById('weT').innerHTML = str;
   
   //aq
   let aqs = document.getElementsByClassName('aqField');

     let str1=" ";

     for(let e of aqs){
       str1 = str1 + `<li> ${e.value} </li>` ;
     }
   document.getElementById('aqT').innerHTML = str1;

  //  code for generating image
// let file = document.getElementById("imgField").files[0];

// let reader= new FileReader() ;
// reader.readAsDataURL(file);
// set the image to template
// reader.onloadend = function(){
// document.getElementById('imgTemplate').src = reader.result;
// }

// setting porjects image
// let profile = document.getElementById("projimg").files[0];
// let profilereader= new FileReader() ;
// reader.readAsDataURL(profile);
// reader.onloadend = function(){
//   document.getElementById('cardimg').src = reader.result;
//   }


let file = document.getElementById("imgField").files[0];
  let reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById('imgTemplate').src = reader.result;

    // setting projects image
    let profile = document.getElementById("projimg").files[0];
    let profileReader = new FileReader();
    profileReader.onloadend = function () {
      document.getElementById('cardimg').src = profileReader.result;




      
     
    };
    profileReader.readAsDataURL(profile);
  };
  reader.readAsDataURL(file);

  document.getElementById('cv-form').style.display ='none';
      document.getElementById('cv-template').style.display= 'block';
}

    // document.getElementById('cv-form').style.display ='none';
    // document.getElementById('cv-template').style.display= 'block';
// }

    function printCV(){
        window.print();
     
       
    }
    