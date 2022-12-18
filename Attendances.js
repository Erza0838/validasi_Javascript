let codeId = document.getElementById("Attendance_Random_Code")

let sendData = document.getElementById("Send_Students_Data")

let studentsName = document.getElementById("Username_Input")

let studentsNumber = document.getElementById("Number_Input")

const bodyForm = document.getElementById("Body_Form")

const randomAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const randomNumber = document.getElementById("Attendance_Random_Code")

const tagInputRandomeCode = document.getElementById("Random_Number")

// class ObjectProperties
// {
// 	DisplayToPage()
// 	{

// 	}
// }

// Bagian object yang terdiri dari array dan element html
let setOfLeter = 
{
	Letters : randomAlphabet,
	RandomCodeElement : codeId,
	RandomCodeDivElement : tagInputRandomeCode
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
			var randomAlphabetResult = listAlphabet[randomInteger] += listCapslockAlphabet[randomCapslock].toUpperCase()
			// Baris akhir variable

			// return randomeAlphabetResult += randomInteger
			return randomAlphabetResult
		}
		break
	}
	return reducedValue && reducedCapslockValue
}
// Baris akhir function

// Function untuk menghasilkan code acak
function RandomCode(FirstDecimalValue)
{
	// var randomElement = setOfLeter.RandomCodeElement

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
	// return numberAlphabetCombination
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
	CodeInputEmpty : "Code harus diisi",
	CodeInputFull : "Semua data sudah lengkap",
	CheckInputData : function CheckStudentsNameInput()
					{	
						// Bagian variable yang menyimpan properti object
						let disabledButton = this.SubmitStudentsData

						let randomNumberValue = this.RandomNumberProperty

						var RandomeCodeVar = setOfLeter.RandomCodeDivElement
						// Baris akhir code 

						if(studentsName.value  && studentsNumber.value !== null || studentsNumber.length === 6) 
						{	
							window.alert(this.TruegMessage)
							RandomCodeContainer(randomNumberValue)

							if(RandomCodeContainer(randomNumberValue) && studentsName.value && studentsNumber.value !== null)
							{	
								ShowInputTage()
								return disabledButton.disabled = true
								// switch(ShowInputTage())
								// {	
								// 	case null : window.alert(this.CodeInputEmpty)
								// 	return disabledButton.disabled = false
								// }
							}
						}

						else
						{	
							window.alert(this.WronggMessage)
							// return disabledButton.disabled = false
						}
					}
}
// Baris akhir object

// Function untuk memunculkan angka acak
function RandomCodeContainer(saveRandomCodeProperty)
{	
	var DisplayRandomeCode = saveRandomCodeProperty.style.display = "flex"

	return DisplayRandomeCode += randomNumber.innerText = RandomCode(24.5)
}
// Baris akhir function

// Function untuk menampilkan input tag
function ShowInputTage()
{	
	var inputDisplayBlock = setOfLeter.RandomCodeDivElement

	return inputDisplayBlock.style.display = "block"
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