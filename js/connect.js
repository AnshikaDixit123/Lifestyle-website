
const urlParams = new URLSearchParams(window.location.search);
		const fruitsDiv = document.getElementById('fruitsgood');
        const jobDiv = document.getElementById('fruitsavg');
        const baseDiv = document.getElementById('fruitsbad');
		let fruitsHTML = '';
        let fruitsHTML1 = '';
        let fruitsHTML2 = '';


        const fruits = urlParams.get('fruits');
			if (fruits == "1") {
				fruitsHTML += '<li>You have a best exercise schedule.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (fruits == "2") {
				fruitsHTML1 += '<li>Its good that you give time to your body, try to do more. </li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (fruits == "3") {
				fruitsHTML2 += '<li>Try to do some exercise daily, this will you to maintain your energy level.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}


        const job = urlParams.get('job');
			if (job == "1") {
				fruitsHTML += '<li>You are one of those who love themselves.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (job == "2") {
				fruitsHTML1 += '<li>Its good that atleast you try, but restarting again and again will you in keep going.</li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (job == "3") {
				fruitsHTML2 += '<li>Plan your day before starting and you will be able to manage your time..</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}
            
            const food = urlParams.get('food');
                if (food === "1") {
                    fruitsHTML += '<li>Good to hear maintaining your weight will also help in keep yourself healthy.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
                } else if (food == "2") {
                    fruitsHTML1 += '<li>Keep going and do some meditation too along with other exercises.</li>';
                    jobDiv.innerHTML = fruitsHTML1;
                } else if (food === "3") {
                    fruitsHTML2 += '<li>You are just inviting diseases, atleast go for walk.</li>';
                    baseDiv.innerHTML = fruitsHTML2;
                }

            const exer = urlParams.get('exer');
            const phys = urlParams.get('phys');
            if (exer == "1"&phys==1) {
                fruitsHTML += '<li>You have an active lifestyle and you still prefer home cooked food.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
             }else if ((exer == "2"||exer=="3")&phys=="1") {
                fruitsHTML += '<li>You already have an active profession so sometimes its ok to go for street and packed foods.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
             }else if (phys == "2") {
				fruitsHTML1 += '<li>You will still require some exersice.As your profession is not very active on it.</li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (phys == "3") {
                fruitsHTML2 += '<li>Your body require some exersice.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}else if (exer == "1") {
                fruitsHTML += '<li>You work hard to provide yourself healthy meals.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
                    
                }else if (exer == "2") {
                    fruitsHTML1 += '<li>Just go for sometimes.</li>';
                    jobDiv.innerHTML = fruitsHTML1;
                } else if (exer == "3") {
                    fruitsHTML2 += '<li>These types of food not at all fresh and are unhealthy too.</li>';
                    baseDiv.innerHTML = fruitsHTML2;
                }
            
            
            const fri = urlParams.get('fri');
        if (fri == "1") {
            fruitsHTML += '<li>You make excesllent choice.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (fri == "2") {
				fruitsHTML1 += '<li>Still good but try to avoid caffeine. </li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (fri == "3") {
                fruitsHTML2 += '<li>You need to change your choice sugary drinks and alcohol do lots of damage to your body.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}


            const sree = urlParams.get('sree');
        if (sree == "1") {
            fruitsHTML += '<li>Its very good that you donot consume alcohol.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (sree == "2") {
				fruitsHTML1 += '<li>You still need to change. </li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (sree == "3") {
                fruitsHTML2 += '<li>This habit will cause you some severe diseases.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}


            const drs = urlParams.get('drs');
        if (drs == "1") {
            fruitsHTML += '<li>Your BMI is in normal range.</li>';
                fruitsDiv.innerHTML = fruitsHTML;
			} else if (drs == "2") {
				fruitsHTML1 += '<li>Try some strength exercises and take proper meals.</li>';
                jobDiv.innerHTML = fruitsHTML1;
			} else if (drs == "3") {
                fruitsHTML2 += '<li>Consult with dietician for diet plans and start doing physical exercises.</li>';
                baseDiv.innerHTML = fruitsHTML2;
			}

        
            const hob = urlParams.get('hob');
            if (hob == "1" || hob == "2") {
                fruitsHTML += '<li>This will help in keep yourself happy and fit.</li>';
                    fruitsDiv.innerHTML = fruitsHTML;
                } else if (hob == "3") {
                    fruitsHTML1 += '<li>This habit of yours will just you make lazy try to explore other things its fun to do.</li>';
                    jobDiv.innerHTML = fruitsHTML1;
                }