var answer;
var score = 0;
var backgroundImages = [];
var details = ['Kaveri is cute','Kaveri lives in Mirza','Her nickname is pumpkin','Her favourite subject is biology','Kaveri loves wildlife'];

function nextQuestion(){
	const n1 = Math.floor(Math.random() * 5);
	document.getElementById('n1').innerHTML = n1;
	const n2 = Math.floor(Math.random() * 6);
	document.getElementById('n2').innerHTML = n2;
	answer = n1 + n2;
}

function checkAnswer(){

	const prediction = predictImage();

	if(prediction == answer)
	{
		score++;
		console.log('correct');
		if(score <= 6)
		{
		backgroundImages.push(`url('images/background${score}.svg')`);
		document.body.style.backgroundImage = backgroundImages;
		}
		else
		{
			const name = Math.floor(Math.random() * 8);
			alert('Congratulations , you won !!!\n' + details[name]);
			score = 0;
			backgroundImages = [];
			document.body.style.backgroundImage = backgroundImages;
		}
	}
	else
	{
		if(score != 0)
		{
		score--;
		}
		console.log('wrong');
		alert('Wrong answer!!!');
		setTimeout(function(){
			backgroundImages.pop();
			document.body.style.backgroundImage = backgroundImages;
		},1000);
	}

}


