document.body.classList.add('rosterbody');

/* number of weeks in the table */
var divo3 = document.createElement('DIV');
divo3.classList.add('numberDivElement');
document.body.appendChild(divo3);           						

	var tab3 = document.createElement('table'); 
	divo3.appendChild(tab3); 
		
		var dweek =['Week No ','1','2','3','4','5','6','7','8','9','10','11','12'];

			for(let i=0; i<dweek.length; i++){
			tr3 = document.createElement('tr');
				   tab3.appendChild(tr3);				
			
				   var td3 = document.createElement('td');
				   	td3.classList.add('numberElement');	
					td3.innerHTML = dweek[i];
					tr3.appendChild(td3);
			   }
			   
/* days of the week */
var divo2 = document.createElement('DIV');
divo2.classList.add('dayDivElement');
document.body.appendChild(divo2);           						

	var tab2 = document.createElement('table'); 
	divo2.appendChild(tab2); 
		
		var week =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
			tr2 = document.createElement('tr');
				   tab2.appendChild(tr2);
			for(let i=0; i<week.length; i++){
				
			
				   var td2 = document.createElement('td');
				   	td2.classList.add('dayElement');	
					td2.innerHTML = week[i];
					tr2.appendChild(td2);
			   }
	
/* main roster table */                  
var divo1 = document.createElement('DIV');
divo1.classList.add('rosterDIV');
document.body.appendChild(divo1);                  
       
	var tab1 = document.createElement('table'); 
	divo1.appendChild(tab1); 
	
	              
		var days1 =['OFF','5:30','5:30','5:30','5:30','OFF','OFF',
					'5:30','OFF','OFF','5:30','5:30','5:30','OFF',
					'5:30','5:30','5:30','5:30','OFF','OFF','OFF',
					'5:30','OFF','OFF','OFF','5:30','5:30','5:30',
					'OFF','5:30','5:30','5:30','5:30','OFF','OFF',
					'OFF','OFF','5:30','5:30','5:30','5:30','OFF',
					'5:30','5:30','5:30','5:30','OFF','OFF','OFF',
					'5:30','OFF','OFF','OFF','5:30','5:30','5:30',
					'OFF','5:30','5:30','5:30','5:30','OFF','OFF',
					'5:30','5:30','OFF','OFF','5:30','5:30','OFF',
					'5:30','5:30','5:30','5:30','OFF','OFF','OFF',
					'5:30','OFF','OFF','OFF','5:30','5:30','5:30'];
			
	
			for (let j=0; j<days1.length; j++) {
				
				if(j % 7 === 0) {
				   tr = document.createElement('tr');
				   tab1.appendChild(tr);
						}
					
						var td = document.createElement('td');
						td.classList.add('rosterTD');	
						td.innerHTML = days1[j];
						tr.appendChild(td);
							if (days1[j] === 'OFF') {
								td.classList.add('cell-color');
							} else {
								
								td.classList.add('cell-ON');
								}
						}
/* **************************************************************************************** */						
						
/* basic data */
 var da = new Date();
 var m = da.getTime();
 var oneday = 86400000; 
 
 /* first day of the roster since 01-03-21*/
 var march0121 = Date.parse("March 01, 2021");

 var MyFirstUpToNow = m - march0121;

/* moving date*/
 var colleTD = document.getElementsByTagName('td');
 var correct = (colleTD.length - days1.length);
 var moveday = ((MyFirstUpToNow - (MyFirstUpToNow % oneday))/oneday) % 84 + correct;

 /* roster date format */ 
 var monthdays = ["01","02","03","04","05","06","07","08","09","10",
				  "11","12","13","14","15","16","17","18","19","20",
				  "21","22","23","24","25","26","27","28","29","30","31"];
 var monthd = monthdays[da.getDate()-1];
 var yearmonth = ["01","02","03","04","05","06","07","08","09","10","11","12"];
 var yearm = yearmonth[da.getMonth()];
 var ddat = monthd +"-"+ yearm;
  	 colleTD[moveday].style.backgroundColor = '#FFFF00';
	 colleTD[moveday].innerHTML = ddat; 

	 /* the noumber of the day*/
	 var NoDay = ((MyFirstUpToNow -(MyFirstUpToNow % oneday))/oneday)+1;
/*
var cp = document.createElement('P');
cp.innerText = "This is " + NoDay + " day of your roster - soldier.  \n One of these days ";
document.body.appendChild(cp);
cp.classList.add('PElement'); */
/* just ignore that */
