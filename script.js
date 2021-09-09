function dis(val)
	{
	document.getElementById("box").value+=val
	 }
	//function for evaluation
function solve()
	{
	let x = document.getElementById("box").value
	let y = eval(x)
	document.getElementById("box").value = y
	}
	//function for clearing the display
function clr()
	{
	document.getElementById("box").value = ""
	}
	// function for clearing backspace one by one 
function back()
	{
	var value = document.getElementById("box").value;
    document.getElementById("box").value = value.substr(0, value.length - 1);
    }
	