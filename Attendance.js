let codeId = document.getElementById("Attendance_Random_Code")

let sendData = document.getElementById("Send_Students_Data")

let studentsName = document.getElementById("Username_Input")

let studentsNumber = document.getElementById("Number_Input")

const bodyForm = document.getElementById("Body_Form")

const randomAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const randomNumber = document.getElementById("Attendance_Random_Code")

// Object untuk menyimpan variabel input 
let inputData = 
{
	NameStudents : studentsName,
	NumberStudents : studentsNumber,
	RandomNumberProperty : randomNumber,
	FormContainer : bodyForm,
	SubmitStudentsData : sendData,	
	CheckInputData : function CheckStudentsNameInput()
					{	
						const formBody = this.FormContainer

						let nameAndNumberValue = [this.NameStudents, this.NumberStudents]

						if(Object.values(this).includes(studentsName.value) && Object.values(this).includes(studentsNumber.value) !== null)
						{	
							if(nameAndNumberValue[0].length >= 1)
							{	
								if(nameAndNumberValue[0].length === 6)
								{
									console.log("Data siswa tidak kosong")

									RandomCodeContainer(saveRandomCodeProperty)
								}
							}
						}
							else
							{	
								console.log("Data siswa kosong")

								return // PreventSubmit(formBody)
							}
					}
}
// Baris akhir object

// Function untuk menghentikan event
function PreventSubmit(PreventForm)
{
	return PreventForm.preventDefault()
}
// Baris akhir function

// Function untuk memunculkan angka acak
function RandomCodeContainer(saveRandomCodeProperty)
{
	saveRandomCodeProperty = inputData.RandomNumberProperty

	return saveRandomCodeProperty.style.display = "flex"
}
// Baris akhir function

// Event submit untuk mengirim data
const sendSubmitEvent = inputData.SubmitStudentsData

sendSubmitEvent.addEventListener("submit",Send_Student_Data,false)

sendSubmitEvent.dispatchEvent(new Event("submit"))
// Baris akhir event

// function untuk mengirim data para siswa
function Send_Student_Data()
{	
	// Variabel untuk menyimpan property dan method pada object
	let submitDataFunction = inputData.CheckInputData()

	let preventSubmitValue = inputData.FormContainer
	// Baris akhir variabel

	switch(submitDataFunction)
	{ 
		case !null : return submitDataFunction
			break
		case null : return PreventSubmit(preventSubmitValue)
			break
	}
}
// Baris akhir function

// Bagian object yang terdiri dari array dan element html
let setOfLeter = 
{
	Letter : randomAlphabet,
	RandomCodeElement : codeId
}
// Bagian akhir Object

// Function untuk menghasilkan code acak
function RandomCode(RandomArray)
{
	setOfLeter.RandomCodeElement = Math.random()

	return setOfLeter.RandomCodeElement
}
// Bagian akhir function 

// console.log(RandomCode(30 * 2))

