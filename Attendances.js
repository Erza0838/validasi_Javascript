let codeId = document.getElementById("Attendance_Random_Code")

let sendData = document.getElementById("Send_Students_Data")

let studentsName = document.getElementById("Username_Input")

let studentsNumber = document.getElementById("Number_Input")

const bodyForm = document.getElementById("Body_Form")

const randomAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const randomNumber = document.getElementById("Attendance_Random_Code")

// Bagian object yang terdiri dari array dan element html
let setOfLeter = 
{
	Letters : randomAlphabet,
	RandomCodeElement : codeId
}
// Bagian akhir Object

// Function untuk menampilkan array
function ShowArrayValue()
{
	let listAlphabet = setOfLeter.Letters

	// console.log(Math.floor(reducedValue))

	while(listAlphabet.length === 26)
	{	
		let reducedValue = Math.random() * Math.round(9.7 + 16)

		if(reducedValue > 0 || reducedValue > listAlphabet)
		{	
			let randomInteger = Math.floor(reducedValue)

			console.log(randomInteger)

			return randomInteger
		}
		break
	}
	return listAlphabet && reducedValue
}
// Baris akhir function

// Function untuk menghasilkan code acak
function RandomCode(max)
{
	let randomElement = setOfLeter.RandomCodeElement

	randomElement += Math.random(Math.floor(2.6)) + max

	if(isNaN(randomElement))
	{
		while(ShowArrayValue.length == 0)
		{	
			let newArray = randomElement.split(" ",5)

			var numberCombination = newArray + ShowArrayValue()

			break
		}
		return numberCombination
	}
}
// Bagian akhir function 
console.log(RandomCode(1))

// Object untuk menyimpan variabel input 
let inputData = 
{
	NameStudents : studentsName.value,
	NumberStudents : studentsNumber.value,
	RandomNumberProperty : randomNumber,
	FormContainer : bodyForm,
	SubmitStudentsData : sendData,
	TruegMessage : "Data siswa tidak kosong",
	WronggMessage : "Data siswa tidak kosong",
	CheckInputData : function CheckStudentsNameInput()
					{	
						let disabledButton = this.SubmitStudentsData

						let randomNumberValue = this.RandomNumberProperty

						if(studentsName.value && studentsNumber.value !== null) 
						{	
							window.alert(this.TruegMessage)
							RandomCodeContainer(randomNumberValue)
							RandomCodeContainer();
						}
							else
							{	
								window.alert(this.WrongMessage)
								return disabledButton.disabled = false
							}
					}
}
// Baris akhir object

// Function untuk memunculkan angka acak
function RandomCodeContainer(saveRandomCodeProperty)
{
	return saveRandomCodeProperty.style.display = "flex"
}
// Baris akhir function

// Event submit untuk mengirim data
const sendSubmitForm = inputData.FormContainer

sendSubmitForm.addEventListener("submit",Send_Student_Data,false)
// Baris akhir event

// function untuk mengirim data para siswa
function Send_Student_Data(event)
{	
	event.preventDefault()

	// Variabel untuk menyimpan property dan method pada object
	let submitDataFunction = inputData.CheckInputData()

	const senderForm = inputData.FormContainer
	// Baris akhir variabel

	switch(submitDataFunction)
	{ 	
		case submitDataFunction : 
		case !null : return submitDataFunction
		case  !submitDataFunction : return senderForm.preventDefault()
	}

	return submitDataFunction
}
// Baris akhir function