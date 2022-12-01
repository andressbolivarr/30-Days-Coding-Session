
const checkGreaterAge = () =>{
		let ages = []
    for (let i = 0; i < 3; i++) {
    let result = parseInt(prompt("What's your age"))
    Number.isInteger(result) ? ages.push(result) : alert('Please, just submit numbers')
	} 
  console.log(ages)
  let maxNumber = Math.max(...ages)
  alert(`The greater age is ${maxNumber}`)
}

checkGreaterAge()
