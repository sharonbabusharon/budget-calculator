// console.log(document.querySelector('#exp1').textContent)
// document.querySelector('#exp1').textContent='great!'


let budget=0;
let balance=0;
let expense=0;

let expTitle='';
let expAmount=0;
let totalExpense=0;
let temp='';
let table='';


function addbudget()
{
	budget=BudgetName.value;
	budget=parseFloat(budget).toFixed(2);
	balance = budget;


	if(budget<0)
	{
		alert("value cannot be negative or zero")
	}else{
		document.getElementById("budget-amount").innerHTML=`${budget}`
	}
}

function resetbudget()
{
	window.location="index.html"
}

function addexpense()
{
	expTitle = title.value;
	expAmount = Amount.value

	if(budget<0)
	{
		alert("add the budget amount")
	}
	else
	{
		if(expAmount<0)
		{
			alert("expense can not be zero");
		}
		else{
			expAmount=parseFloat(expAmount);
			balance -= expAmount;
			balance=parseFloat(balance).toFixed(2);
			totalExpense += expAmount

			
			temp = table;

			table =`<tr>
			<td style="font-size: 25px;border: 2px solid black;">${expTitle}</td>
			<td style="font-size: 25px; border: 2px solid black;">${expAmount}</td>
			<td name=${expAmount} onclick="del(this)" style="font-size: 25px; border: 2px solid black;" >&#10060</td>
			
			</tr>`;

			table += temp
            console.log(temp);


			document.getElementById("table_exp").innerHTML=table

			document.getElementById("budget-expense").innerHTML = `${totalExpense}`;
			document.getElementById("budget-balance").innerHTML = `${balance}`  
			

		}
	}

}

function del(r) {
	var i = r.parentNode.parentNode.rowIndex;
    
    document.getElementById("table_exp").deleteRow(i);

	let deldata=r.getAttribute("name");
	totalExpense-=deldata;
	balance=budget;
	balance-=totalExpense
	document.getElementById("budget-balance").innerHTML = `${balance}`;
    document.getElementById("budget-expense").innerHTML = `${totalExpense}`;
  }