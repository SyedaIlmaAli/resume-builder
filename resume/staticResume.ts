let myName = localStorage.getItem("name");
window.addEventListener("load", () => {
  let title = localStorage.getItem("title");
  let phone = localStorage.getItem("phone");
  let email = localStorage.getItem("email");
  let add = localStorage.getItem("add");
  let pass1 = localStorage.getItem("pass1");
  let deg1 = localStorage.getItem("deg1");
  let uni1 = localStorage.getItem("uni1");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let uni2 = localStorage.getItem("uni2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let skill4 = localStorage.getItem("skill4");
  let skill5 = localStorage.getItem("skill5");
  let lang = localStorage.getItem("lang");
  let lang2 = localStorage.getItem("lang2");
  let styear1 = localStorage.getItem("styear1");
  let endyear1 = localStorage.getItem("endyear1");
  let company1 = localStorage.getItem("company1");
  let complocation1 = localStorage.getItem("complocation1");
  let jobTitle1 = localStorage.getItem("jobTitle1");
  let achv1 = localStorage.getItem("achv1");
  let achv2 = localStorage.getItem("achv2");
  let achv3 = localStorage.getItem("achv3");
  let styear3 = localStorage.getItem("styear3");
  let endyear3 = localStorage.getItem("endyear3");
  let company3 = localStorage.getItem("company3");
  let complocation3 = localStorage.getItem("complocation3");
  let jobTitle3 = localStorage.getItem("jobTitle3");
  let picture = localStorage.getItem("profile_pic") as string;
  let achv7 = localStorage.getItem("achv7");
  let achv8 = localStorage.getItem("achv8");
  let achv9 = localStorage.getItem("achv9");
  let interest1 =  localStorage.getItem("interest1");
  let interest2 =  localStorage.getItem("interest2");
  let interest3 =  localStorage.getItem("interest3");
  let interest4 =  localStorage.getItem("interest4");
  let interest5 =  localStorage.getItem("interest5");

  let resName = document.getElementById("resName") as HTMLElement;
  resName.textContent = myName;

  let resTitle = document.getElementById("resTitle") as HTMLElement;
  resTitle.textContent = title;

  let resPhone = document.getElementById("resPhone") as HTMLElement;
  resPhone.textContent = phone;

  let resEmail = document.getElementById("resEmail") as HTMLElement;
  resEmail.textContent = email;

  let resAdd = document.getElementById("resAdd") as HTMLElement;
  resAdd.textContent = add;

  let resPassYear = document.getElementById("resPassYear") as HTMLElement;
  resPassYear.textContent = pass1;

  let resEduSubject = document.getElementById("resEduSubject") as HTMLElement;
  resEduSubject.textContent = deg1;

  let resEduInstitute = document.getElementById(
    "resEduInstitute"
  ) as HTMLElement;
  resEduInstitute.textContent = uni1;

  let resPassYear1 = document.getElementById("resPassYear1") as HTMLElement;
  resPassYear1.textContent = pass2;

  let resEduSubject1 = document.getElementById("resEduSubject1") as HTMLElement;
  resEduSubject1.textContent = deg2;

  let resEduInstitute1 = document.getElementById(
    "resEduInstitute1"
  ) as HTMLElement;
  resEduInstitute1.textContent = uni2;

  let resSkill1 = document.getElementById("resSkill1") as HTMLElement;
  resSkill1.textContent = skill1;

  let resSkill2 = document.getElementById("resSkill2") as HTMLElement;
  resSkill2.textContent = skill2;

  let resSkill3 = document.getElementById("resSkill3") as HTMLElement;
  resSkill3.textContent = skill3;

  let resSkill4 = document.getElementById("resSkill4") as HTMLElement;
  resSkill4.textContent = skill4;

  let resSkill5 = document.getElementById("resSkill5") as HTMLElement;
  resSkill5.textContent = skill5;

  let resLang1 = document.getElementById("resLang1") as HTMLElement;
  resLang1.textContent = lang;

  let resLang2 = document.getElementById("resLang2") as HTMLElement;
  resLang2.textContent = lang2;

  let resStartExpYear = document.getElementById(
    "resStartExpYear"
  ) as HTMLElement;
  resStartExpYear.textContent = styear1;

  let resEndExpYear = document.getElementById("resEndExpYear") as HTMLElement;
  resEndExpYear.textContent = endyear1;

  let resExpCompany = document.getElementById("resExpCompany") as HTMLElement;
  resExpCompany.textContent = company1;

  let resExpCompanyLocation = document.getElementById(
    "resExpCompanyLocation"
  ) as HTMLElement;
  resExpCompanyLocation.textContent = complocation1;

  let resExpRole = document.getElementById("resExpRole") as HTMLElement;
  resExpRole.textContent = jobTitle1;

  let resAchv1 = document.getElementById("resAchv1") as HTMLElement;
  resAchv1.textContent = achv1;

  let resAchv2 = document.getElementById("resAchv2") as HTMLElement;
  resAchv2.textContent = achv2;

  let resAchv3 = document.getElementById("resAchv3") as HTMLElement;
  resAchv3.textContent = achv3;

  let resStartExpYear3 = document.getElementById(
    "resStartExpYear3"
  ) as HTMLElement;
  resStartExpYear3.textContent = styear3;

  let resEndExpYear3 = document.getElementById("resEndExpYear3") as HTMLElement;
  resEndExpYear3.textContent = endyear3;

  let resExpCompany3 = document.getElementById("resExpCompany3") as HTMLElement;
  resExpCompany3.textContent = company3;

  let resExpCompanyLocation3 = document.getElementById(
    "resExpCompanyLocation3"
  ) as HTMLElement;
  resExpCompanyLocation3.textContent = complocation3;

  let resExpRole3 = document.getElementById("resExpRole3") as HTMLElement;
  resExpRole3.textContent = jobTitle3;

  let resAchv7 = document.getElementById("resAchv7") as HTMLElement;
  resAchv7.textContent = achv7;

  let resAchv8 = document.getElementById("resAchv8") as HTMLElement;
  resAchv8.textContent = achv8;

  let resAchv9 = document.getElementById("resAchv9") as HTMLElement;
  resAchv9.textContent = achv9;

  let resInterest1 = document.getElementById("resInterest1") as HTMLElement;
  resInterest1.textContent = interest1;

  let resInterest2 = document.getElementById("resInterest2") as HTMLElement;
  resInterest2.textContent = interest2;

  let resInterest3 = document.getElementById("resInterest3") as HTMLElement;
  resInterest3.textContent = interest3;

  let resInterest4 = document.getElementById("resInterest4") as HTMLElement;
  resInterest4.textContent = interest4;

  let resInterest5 = document.getElementById("resInterest5") as HTMLElement;
  resInterest5.textContent = interest5;

  let resImg = document.getElementById("resImg") as HTMLImageElement;
  resImg.src = picture;
});

let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});

let edit_btn = document.getElementById("edit_btn");

edit_btn?.addEventListener("click", () => {
  window.history.back();
});

let share_btn = document.getElementById("share_btn");
let anc = document.getElementById("anc");
let userName;

if (myName) {
  userName = myName.toLowerCase().replace(/\s+/g, "-");
} else {
  userName = "user";
}

let baseURL = "http://127.0.0.1:5500/resume/staticResume.html";
let uniqueURL = `${baseURL}?/${myName}`;

share_btn?.addEventListener("click", () => {
  anc?.setAttribute("href", uniqueURL);
});

let copy_btn = document.getElementById("copy_btn");

copy_btn?.addEventListener("click", () => {
  window.navigator.clipboard.writeText(uniqueURL).then(() => {
    alert("Copied successfully!!");
  });
});
