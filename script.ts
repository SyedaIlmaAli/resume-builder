let my_Name = document.getElementById("name") as HTMLInputElement;
let title = document.getElementById("title") as HTMLInputElement;
let phone = document.getElementById("phone") as HTMLInputElement;
let email = document.getElementById("email") as HTMLInputElement;
let add = document.getElementById("add") as HTMLInputElement;
let pic = document.getElementById("pic") as HTMLInputElement;

let pass1 = document.getElementById("pass1") as HTMLInputElement;
let deg1 = document.getElementById("deg1") as HTMLInputElement;
let uni1 = document.getElementById("uni1") as HTMLInputElement;

let pass2 = document.getElementById("pass2") as HTMLInputElement;
let deg2 = document.getElementById("deg2") as HTMLInputElement;
let uni2 = document.getElementById("uni2") as HTMLInputElement;

let skill1 = document.getElementById("skill1") as HTMLInputElement;
let skill2 = document.getElementById("skill2")as HTMLInputElement;
let skill3 = document.getElementById("skill3")as HTMLInputElement;
let skill4 = document.getElementById("skill4")as HTMLInputElement;
let skill5 = document.getElementById("skill5")as HTMLInputElement;


let lang = document.getElementById("lang") as HTMLInputElement;
let lang2 = document.getElementById("lang2") as HTMLInputElement;

let styear1 = document.getElementById("styear1") as HTMLInputElement;
let styear2 = document.getElementById("styear2") as HTMLInputElement;
let styear3 = document.getElementById("styear3") as HTMLInputElement;
let endyear1 = document.getElementById("endyear1") as HTMLInputElement;
let endyear2 = document.getElementById("endyear2") as HTMLInputElement;
let endyear3 = document.getElementById("endyear3") as HTMLInputElement;

let company1 = document.getElementById("company1") as HTMLInputElement;
let company2 = document.getElementById("company2") as HTMLInputElement;
let company3 = document.getElementById("company3") as HTMLInputElement;
let complocation1 = document.getElementById("complocation1") as HTMLInputElement;
let complocation2 = document.getElementById("complocation2") as HTMLInputElement;
let complocation3 = document.getElementById("complocation3") as HTMLInputElement;

let jobTitle1 = document.getElementById("jobTitle1") as HTMLInputElement;
let jobTitle2 = document.getElementById("jobTitle2") as HTMLInputElement;
let jobTitle3 = document.getElementById("jobTitle3") as HTMLInputElement;

let achv1 = document.getElementById("achv1") as HTMLInputElement;
let achv2 = document.getElementById("achv2") as HTMLInputElement;
let achv3 = document.getElementById("achv3") as HTMLInputElement;
let achv4 = document.getElementById("achv4") as HTMLInputElement;
let achv5 = document.getElementById("achv5") as HTMLInputElement;
let achv6 = document.getElementById("achv6") as HTMLInputElement;
let achv7 = document.getElementById("achv7") as HTMLInputElement;
let achv8 = document.getElementById("achv8") as HTMLInputElement;
let achv9 = document.getElementById("achv9") as HTMLInputElement;

let interest1 = document.getElementById("interest1") as HTMLInputElement;
let interest2 = document.getElementById("interest2") as HTMLInputElement;
let interest3 = document.getElementById("interest3") as HTMLInputElement;
let interest4 = document.getElementById("interest4") as HTMLInputElement;
let interest5 = document.getElementById("interest5") as HTMLInputElement;



let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");

form?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("name", my_Name.value);
    localStorage.setItem("title", title.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("add", add.value);
    localStorage.setItem("pass1", pass1.value);
    localStorage.setItem("deg1", deg1.value);
    localStorage.setItem("uni1", uni1.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("deg2", deg2.value);
    localStorage.setItem("uni2", uni2.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("skill4", skill4.value);
    localStorage.setItem("skill5", skill5.value);
    localStorage.setItem("lang", lang.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("styear1", styear1.value);
    localStorage.setItem("endyear1", endyear1.value);
    localStorage.setItem("company1", company1.value);
    localStorage.setItem("complocation1", complocation1.value);
    localStorage.setItem("jobTitle1", jobTitle1.value);
    localStorage.setItem("achv1", achv1.value);
    localStorage.setItem("achv2", achv2.value);
    localStorage.setItem("achv3", achv3.value);
    localStorage.setItem("styear3", styear3.value);
    localStorage.setItem("endyear3", endyear3.value);
    localStorage.setItem("company3", company3.value);
    localStorage.setItem("complocation3", complocation3.value);
    localStorage.setItem("jobTitle3", jobTitle3.value);
    localStorage.setItem("achv7", achv7.value);
    localStorage.setItem("achv8", achv8.value);
    localStorage.setItem("achv9", achv9.value);
    localStorage.setItem("interest1", interest1.value);
    localStorage.setItem("interest2", interest2.value);
    localStorage.setItem("interest3", interest3.value);
    localStorage.setItem("interest4", interest4.value);
    localStorage.setItem("interest5", interest5.value);
    
    if(pic.files && pic.files[0]){
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result as string;
            localStorage.setItem("profile_pic", textImg);
            console.log(textImg);
            
        })
        reader.readAsDataURL(pic.files[0])
    }
    
    window.location.href = "./resume/staticResume.html"
})