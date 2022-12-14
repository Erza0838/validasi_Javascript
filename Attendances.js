let codeId = document.getElementById("Attendance_Random_Code")

let sendData = document.getElementById("Send_Students_Data")

let studentsName = document.getElementById("Username_Input")

let studentsNumber = document.getElementById("Number_Input")

const bodyForm = document.getElementById("Body_Form")

const randomAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const randomNumber = document.getElementById("Attendance_Random_Code")

// class ObjectProperties
// {
// 	DisplayToPage()
// 	{

// 	}
// }

// Bagian object yang terdiri dari array dan element html
var setOfLeter = 
{
	Letters : randomAlphabet,
	RandomCodeElement : codeId
}
// Bagian akhir Object

// Function untuk menampilkan array
function ShowArrayValue()
{	
	// Variable untuk menyimpan objek berisi array
	var listAlphabet = setOfLeter.Letters

	var listCapslockAlphabet = setOfLeter.Letters
	// Baris akhir variable

	while(listAlphabet.length === 26)
	{	
		// Variable untuk melakukan peritungan acak 
		var reducedValue = Math.random() * Math.round(9.7 + 16)

		var reducedCapslockValue = Math.random() * Math.round(9.7 + 6)
		// Baris akhir variable 

		if(reducedValue > 0  && reducedCapslockValue > 0 || reducedValue > listAlphabet)
		{	
			var randomInteger = Math.floor(reducedValue)

			var randomCapslock =  Math.floor(reducedCapslockValue)

			// Variable untuk mneyimpan hasil perhitungan acak
			var randomeAlphabetResult = listAlphabet[randomInteger] += listCapslockAlphabet[randomCapslock].toUpperCase()
			// Baris akhir variable

			// return randomeAlphabetResult += randomInteger
			return randomeAlphabetResult
		}
		break
	}
	return reducedValue && reducedCapslockValue
}
// Baris akhir function

// Function untuk menghasilkan code acak
function RandomCode(FirstDecimalValue)
{
	var newRandomeNumber = Math.floor(Math.random() * Math.round(FirstDecimalValue * 7.21 * 2.8))

	var numberAlphabetCombination = newRandomeNumber += ShowArrayValue()
	
	while(newRandomeNumber !== null || isNaN(newRandomeNumber))
	{	
		if(newRandomeNumber.length > ShowArrayValue.length || newRandomeNumber.length == ShowArrayValue.length)
		{	
			return numberAlphabetCombination
		}
		break
	}
}
// Bagian akhir function 

// Object untuk menyimpan variabel input 
let inputData = 
{
	NameStudents : studentsName.value,
	NumberStudents : studentsNumber.value,
	RandomNumberProperty : randomNumber,
	FormContainer : bodyForm,
	SubmitStudentsData : sendData,
	TruegMessage : "Data siswa tidak kosong",
	WronggMessage : "Data siswa kosong",
	CheckInputData : function CheckStudentsNameInput()
					{	
						let disabledButton = this.SubmitStudentsData

						let randomNumberValue = this.RandomNumberProperty

						if(studentsName.value && studentsNumber.value !== null) 
						{	
							window.alert(this.TruegMessage)

							let showRandomeCode = RandomCodeContainer(randomNumberValue)

							if(showRandomeCode && showRandomeCode !== undefined)
							{
								return disabledButton.disabled = false
							}

							return showRandomeCode
						}

						else
						{	
							if(studentsNumber.length !== 6 || studentsNumber.length === null)
							{
								window.alert(this.WronggMessage)
								return disabledButton.disabled = false
							}
						}
					}
}
// Baris akhir object

// Function untuk memunculkan angka acak
function RandomCodeContainer(saveRandomCodeProperty)
{	
	let randomElement = RandomCode(24.5) 

	var DisplayRandomeCode = saveRandomCodeProperty.style.display = "flex"

	if(DisplayRandomeCode)
	{
		DisplayRandomeCode.append = randomElement
	}

	else 
	{
		return 
	}
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