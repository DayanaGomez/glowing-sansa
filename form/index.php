<!DOCTYPE html>
<html>
	<head>
	<title>Form</title>
    <link rel="stylesheet" type="text/css" href="css/main.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <script src="js/contact.js" type="text/javascript"></script>

	</head>
	<body>
    
    	<div id="bodywrapper">
        	<div id="header">
            <p><img src="images/headerBck.jpg" href="" aling="center" /></p>
            </div>
            <section id="contact">
            <?php if (empty($_POST)): ?>
            <div id="form">
            <?php if (empty($_POST)): ?>
            <form name="personladata" method="POST" action="/form" enctype="multipart/form-data">
            
                <div id="applicant">
                
                    <p class="appinfo">Applicant's Information</p>
                    <p class="name"><input type="text" name="myName"> Name</p>
                    <p class="last"><input type="text" name="myLastname"> Last Name</p>                  
                    <p class="name"><input type="text" name="myAddress"> Address</p>
                    <p class="city"><input type="text" name="myCity"> City</p>
                    <p class="name"><input type="text" name="myAddress"> State</p>
                    <p class="zip"><input type="text" name="myZip"> Zip Code</p>
                    <p class="name"><input type="date" name="DOB"> DOB</p>
                    <p class="phone"><input type="tel" name="myPhone"> Phone Number</p>
                    <p class="name"><input class="email" type="email" name="myEmail"> E-mail</p>
                    
                </div>
                
                <div id="software">
                
                    <p class="appinfo">Software</p>
                    <p><input class="softbox" type="checkbox" name="photoshop"> Photoshop</p>
                    <p><input class="softbox" type="checkbox" name="illustration"> Illustrator</p>
                    <p><input class="softbox" type="checkbox" name="flash"> Flash</p>
                    <p><input class="softbox" type="checkbox" name="indesign"> Indesign</p>
                    <p><input class="softbox" type="checkbox" name="dreamweaver"> Dreamweaver</p>
                
                </div>
                
                <div id="education">
                
                    <p class="appinfo">Highest Level or Education</p>
                    <p><input class="softbox" type="radio" name="myRadio"> Associate Degree</p>
                    <p><input class="softbox" type="radio" name="myRadio"> Bachelor Degree</p>
                    <p><input class="softbox" type="radio" name="myRadio"> Master Degree</p>
    
                </div>
                
                <div id="addinfo">
                
                    <h3>Additional Information</h3>
                    <p>Career Level</p>
                    <select name="mySelect">
                        <option value="inter">Intership</option>
                        <option value="entry">Entry Level</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                    </select>
                    <p>Are you willing to travel?</p>
                    <p><input type="radio" name="myRadio"> Yes </p>
                    <p><input type="radio" name="myRadio"> No </p>
                    <p>If so, how often?</p>
                    <select name="mySelect">
                        <option value="25">25%</option>
                        <option value="50">50%</option>
                        <option value="75">75%</option>
                        <option value="100">100%</option>
                    </select>               
                    <p>Have you ever been convincted of a felony?</p>
                    <p><input type="radio" name="myRadio"> Yes </p> 
                    <p><input type="radio" name="myRadio"> No </p>
                    <p>If yes, describe:</p>
                    <textarea class="textbox"></textarea>
                    <p>Are you a citizen of the United States?</p>
                    <p><input type="radio" name="myRadio"> Yes </p>
                    <p><input type="radio" name="myRadio"> No </p>
                    
                </div>
                
                <div id="letter">
                
                    <h3>Cover Letter</h3>
                    <textarea class="textbox"></textarea>
    
                    <p><input type="hidden" name="hidden"></p>
                    <p>Upload Resume</p>
        
                    <p><input type="file" anme="file"></p>
                    <p>Password: <input type="password" name="pass"></p>
                    <p><input class="submit" type="submit" name="upload" value="Submit Application"></p>
                    
                </div>
    
            </form>
            <?php else: ?>
            <h1>Thank You!</h1>
            <p>I will do my best to respond at a timely matter</p>
            <?php endif; ?>
            </div>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"> </script>
            <script>
                var val = 'why!';
                $( '#test' ).on(  'focus', function() {
                    if ( this.value === val )
                        this.value = '';
                }).on( 'blur', function() {
                    if ( this.value == '' ) {
                        this.value = val;
                    }
                });
            </script>
            
    	</div>
        
	</body>
</html>
