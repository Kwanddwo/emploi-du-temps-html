const supports = {
  admin_info: ["admin_infra_seance1.pdf", "admin_infra_seance2.pdf"],
  anglais: ["2BRO2B Analysis Mr Boukhlet.pptx"],
  francais: [],
  graphes: ["TG_CH_1_partie_1.pdf"],
  java: ["JAVA_Cours_SaraBaghdadi - Part 1.pdf"],
  unix: ["chap1.pdf", "chap2.pdf"],
  web: ["chap1.pdf", "chap2.pdf", "chap3.pdf"],
};

document.addEventListener("DOMContentLoaded", () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const nom = urlParams.get("nom");
  const supportList = document.getElementById("support-list");
  const title = document.getElementById("title");
  title.textContent += " " + nom;

  supports[nom].forEach((cours) => {
    const li = document.createElement("li");

    const anchor = document.createElement("a");
    anchor.className = "download";
    anchor.setAttribute("download", cours);
    anchor.href = "\\supports\\" + nom + "\\" + cours;
    anchor.textContent = cours;

    li.appendChild(anchor);
    supportList.appendChild(li);
  });
});
