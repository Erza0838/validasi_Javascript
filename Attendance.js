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
	NameStudents : studentsName.value,
	NumberStudents : studentsNumber.value,
	RandomNumberProperty : randomNumber,
	FormContainer : bodyForm,
	SubmitStudentsData : sendData,	
	CheckInputData : function CheckStudentsNameInput()
					{	
						let disabledButton = inputData.SubmitStudentsData

						var actionSubmit = this.FormContainer

						let randomNumberValue = this.RandomNumberProperty

						if(Object.values(this).includes(studentsName.value) && Object.values(this).includes(studentsNumber.value) !== null) 
						{	
							console.log("Data siswa tidak kosong")

							RandomCodeContainer(randomNumberValue)

							return  actionSubmit.preventDefault()
						}
							else
							{	
								console.log("Data siswa kosong")
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
function Send_Student_Data()
{	
	// Variabel untuk menyimpan property dan method pada object
	let submitDataFunction = inputData.CheckInputData()

	const senderForm = inputData.FormContainer
	// Baris akhir variabel

	switch(submitDataFunction)
	{ 	
		case submitDataFunction :
		case !null : return submitDataFunction
			break
		case null :
		case !submitDataFunction : return senderForm.preventDefault()
			break
	}

	return submitDataFunction
}
// Send_Student_Data()
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

