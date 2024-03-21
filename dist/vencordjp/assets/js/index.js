/*
    ©2023 UpLauncher, Website Main JS.
    Developed by Rai❤

    Don't use this javascript file for your project!!!!
*/

//Page loaded event
document.addEventListener("DOMContentLoaded", () => {
  //Include Header and Footer
  //includeHeader
  const includer = new XMLHttpRequest();
  const includer2 = new XMLHttpRequest();
  /* Open File */ includer.open("GET", "./assets/base/header.html", true);
  includer.onreadystatechange = function () {
    if (includer.readyState === 4 && includer.status === 200) {
      const headerHTML = includer.responseText;
      const header = document.querySelector("header");
      /* Insert Footer */ header.insertAdjacentHTML("afterbegin", headerHTML);
    }
  };
  includer.send();

  //includeFooter
  /* Open File */ includer2.open("GET", "./assets/base/footer.html", true);
  includer2.onreadystatechange = function () {
    if (includer2.readyState === 4 && includer2.status === 200) {
      const footerHTML = includer2.responseText;
      const footer = document.querySelector("footer");
      /* Insert Footer */ footer.insertAdjacentHTML("afterbegin", footerHTML);
    }
  };
  includer2.send();

  //VS Code Extension Tab
  const vsceTabContent = document.querySelector("#-panel-vsc-extension");
  //Program Tab
  const programTabContent = document.querySelector("#-panel-program");
  //TabControl
  const tabControl = document.querySelector("md-tabs");

  try {
    //Hidden Program Tab
    programTabContent.style.display = "none";
  } catch (e) {
    return;
  }

  //Tab Page Changed
  tabControl.addEventListener("change", (event) => {
    //Change Tab
    if (/* VS Code Extension Tab */ event.target.activeTabIndex === 0) {
      //Display VS Code Extension Tab
      vsceTabContent.style.display = "";
      //Hide Program Tab
      programTabContent.style.display = "none";
    } /* Program Tab */ else if (event.target.activeTabIndex === 1) {
      //Display Program Tab
      programTabContent.style.display = "";
      //Hide VS Code Extension Tab
      vsceTabContent.style.display = "none";
    }
  });

  //Feedback Button
  const feedback = document.querySelector("md-fab");
  //Dialog
  const dialog = document.querySelector("md-dialog");
  feedback.addEventListener("click", () => {
    dialog.open = true;
  });
});
