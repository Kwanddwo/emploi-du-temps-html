const JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];
const cours = {
  lundi: [
    {
      titre: "ADMINISTRATION DE L'INFRASTRUCTURE INFORMATIQUE",
      classe: "C2",
      professeur: "Tissir",
      support: "admin_info",
    },
    {
      titre: "ADMINISTRATION DE L'INFRASTRUCTURE INFORMATIQUE",
      classe: "C2",
      support: "admin_info",
      professeur: "Tissir",
    },
    {
      titre: "Travaux Pratiques",
    },
    {
      titre: "Travaux Pratiques",
    },
  ],
  mardi: [
    {
      titre: "THEORIE DES GRAPHES ET OPTIMISATION COMBINATOIRE",
      classe: "C2",
      support: "graphes",
      professeur: "Dargham",
    },
    {
      titre: "THEORIE DES GRAPHES ET OPTIMISATION COMBINATOIRE",
      classe: "C2",
      professeur: "Dargham",
      support: "graphes",
    },
    {
      titre: "ART DIGITAL",
      classe: "F11",
      professeur: "Ghazdali",
    },
    {
      titre: "ART DIGITAL",
      classe: "F11",
      professeur: "Ghazdali",
    },
  ],
  mercredi: [
    {
      titre: "JAVA",
      classe: "C2",
      support: "java",
      professeur: "Baghdadi S.",
    },
    {
      titre: "JAVA",
      classe: "C2",
      support: "java",
      professeur: "Baghdadi S.",
    },
    {
      titre: "SYSTEMES D'EXPLOITATION & UNIX",
      classe: "C1",
      support: "unix",
      professeur: "Omari",
    },
    {
      titre: "SYSTEMES D'EXPLOITATION & UNIX",
      classe: "C1",
      support: "unix",
      professeur: "Omari",
    },
  ],
  jeudi: [
    {
      titre: "Travaux Pratiques",
    },
    {
      titre: "Travaux Pratiques",
    },
    {
      titre: "ANGLAIS",
      classe: "C2",
      support: "anglais",
      professeur: "Boukhlet",
    },
    {
      titre: "Travaux Pratiques",
    },
  ],
  vendredi: [
    {
      titre: "PROGRAMMATION WEB",
      classe: "C2",
      support: "web",
      professeur: "Omari",
    },
    {
      titre: "PROGRAMMATION WEB",
      classe: "C2",
      support: "web",
      professeur: "Omari",
    },
    {
      titre: "FRANCAIS",
      classe: "F24",
      support: "francais",
      professeur: "Hamza",
    },
    {
      titre: "Travaux Pratiques",
    },
  ],
};

function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

document.addEventListener("DOMContentLoaded", async () => {
  const coursJson = cours;
  const coursBody = document.getElementById("cours-body");
  console.log(coursBody);
  JOURS.forEach((jour) => {
    const row = document.createElement("tr");
    const header = document.createElement("th");
    header.textContent = titleCase(jour);
    row.appendChild(header);

    coursJson[jour].forEach((cell, i) => {
      if (jour === "lundi" && i === 2) {
        const tempsVendredi = document.createElement("td");
        tempsVendredi.setAttribute("rowspan", "5");
        tempsVendredi.className = "white-bg";
        tempsVendredi.innerHTML = `<p class="vendredi-temps">14H30</p>`;
        row.appendChild(tempsVendredi);
      }

      const cellTitle = document.createElement("td");

      cellTitle.innerHTML = cell.support
        ? `<a href="supports.html?nom=${cell.support}">${cell.titre}</a>`
        : cell.titre;

      if (cell.titre === "Travaux Pratiques") {
        cellTitle.className = "tp";
      }

      const cellInfo = document.createElement("td");
      cellInfo.className = "cours-info";
      const classe = document.createElement("p");
      classe.textContent = cell.classe;
      const prof = document.createElement("p");
      prof.innerHTML = cell.professeur
        ? "<a href='./contact.html?prof=" +
          cell.professeur +
          "' >" +
          "Pr. " +
          cell.professeur +
          "</a>"
        : "";

      cellInfo.appendChild(classe);
      cellInfo.appendChild(prof);

      row.appendChild(cellTitle);
      row.appendChild(cellInfo);
    });

    coursBody.appendChild(row);
  });
});
