// Baris untuk menyimpan varaible
let codeId = document.getElementById("Attendance_Random_Code")

let sendData = document.getElementById("Send_Students_Data")

let studentsName = document.getElementById("Username_Input")

let studentsNumber = document.getElementById("Number_Input")

const bodyForm = document.getElementById("Body_Form")

const randomAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const randomNumber = document.getElementById("Attendance_Random_Code")

const tagInputRandomeCode = document.getElementById("Random_Number")
// Baris akhir code


// Bagian object yang terdiri dari array dan element html
let setOfLeter = 
{
	Letters : randomAlphabet,
	RandomCodeElement : codeId,
	RandomCodeDivElement : tagInputRandomeCode,
	// Kumpulan function untuk memberi tanda apakah data sudah lengkap
	WarningNameFalse : function RedNameTag()
					{	
						if(studentsName)
						{	
							return studentsName.style.border = ".14rem solid red"
						}
					},
	WarningNumbersFalse : function RedNumbersTag()
					{	
						if(studentsNumber)
						{	
							return studentsNumber.style.border = ".14rem solid red"
						}
					},
	WarningRandomCodeFalse : function RedRandomCodeTag()
					{	
						if(tagInputRandomeCode)
						{	
							return tagInputRandomeCode.style.border = ".14rem solid red"
						}
					},
	TrueNameInput : function BorderNoneNameTag()
					{
						if(studentsName)
						{	
							return studentsName.style.border = "none"
						}	
					},
	TrueNumbersInput : function BorderNoneNumbersTag()
						{
							if(studentsNumber)
							{	
								return studentsNumber.style.border = "none"
							}	
						},
    TrueRandomCode : function BorderNoneRedRandomCodeTag()
					{
						if(tagInputRandomeCode)
						{	
							return tagInputRandomeCode.style.border = "none"
						}
					}
// Baris akhir kumpulan function
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

		if(reducedValue > 0 && reducedCapslockValue > 0 || reducedValue > listAlphabet)
		{	
			var randomInteger = Math.floor(reducedValue)

			var randomCapslock =  Math.floor(reducedCapslockValue)

			// Variable untuk mneyimpan hasil perhitungan acak
			var randomAlphabetResult = listAlphabet[randomInteger] += listCapslockAlphabet[randomCapslock].toUpperCase()
			// Baris akhir variable

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
	// Function untuk validasi data siswa
	CheckInputData : function CheckStudentsNameInput()
					{	
						// Bagian variable yang menyimpan properti object

						let randomNumberValue = this.RandomNumberProperty

						var randomCodeVar = tagInputRandomeCode.value
						// Baris akhir code 

						if(studentsName.value !== "" && studentsNumber.value !== "" || studentsNumber.length === 6) 
						{	
							window.alert(this.TruegMessage)

							RandomCodeContainer(randomNumberValue)

							setOfLeter.TrueNameInput() && setOfLeter.TrueNumbersInput()

							ShowInputTage()
							if(ShowInputTage)
							{
								if(randomCodeVar !== "" || randomCodeVar !== null && randomCodeVar === RandomCode(24.5))
								{	
									var allStudentsData = [studentsName.value, studentsNumber.value, randomCodeVar.value]

									window.alert(this.CodeInputFull)
									if(allStudentsData !== null || allStudentsData !== "")
									{	
										this.FormDataField()										
									}
									// return window.location.href = "Attendance_Succes/Redirect.html"
								}
								
								else								
								{
									window.alert(this.CodeInputEmpty)
									return setOfLeter.WarningRandomCodeFalse()
								}		
							}
						}

						else if(studentsName.value === "" && studentsNumber.value === "" || studentsNumber.length !== 6)  
						{	
							window.alert(this.WronggMessage)
							return setOfLeter.WarningNameFalse() && setOfLeter.WarningNumbersFalse() 
						}
					},
	// Baris akhir function

	// Function untuk mengirim data ke file json
	FormDataField : function transferData()
				{
					let allData = new FormData(bodyForm)

					var jsonDirectory = "Absensi_JS/Store_Data/Students_Data.json"
					
					fetch(jsonDirectory, 
					{
						method : "POST",
						headers : 
								 {
								   "Content-Type " : "application/json"
								 },
						body : JSON.stringify(
						{	
							"NameStudent" : this.NameStudents,
							"Numbertudent" : this.NumberStudents,
							"RandomCodeStudent" : window.randomCodeVar  	
						})
					})
					.then(function response()
					{	
						if(NameStudent !== "" && Numbertudent !== "" && RandomCodeStudent !== "")
						{
							console.log("succes")
						}
						return response.json()
					}).catch(function error()
					{
						console.log("error")
					})
				}
    // Baris akhir function 
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

const submitStudentsData = sendSubmitForm.addEventListener("submit",Send_Student_Data,false)
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
		case submitDataFunction : return submitDataFunction
		case !submitDataFunction : return senderForm.preventDefault()
			break
	}
	return submitDataFunction
}
// Baris akhir function