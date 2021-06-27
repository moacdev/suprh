import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavItemService {

  iconsArray = []

  data = [

    {
      icon: 0,
      label: "Codification",
      href: "/paie/codification",
      dropdown: [
        {
          label: "Grades",
          href: "/paie/codification/grades",
        },
        {
          label: "Fonctions",
          href: "/paie/codification/fonctions",
        },
        {
          label: "Primes",
          href: "/paie/codification/primes",
        },
        {
          label: "Echelon",
          href: "/paie/codification/echelon",
        },
        {
          label: "Indemnités",
          href: "/paie/codification/indemnités",
        },
        {
          label: "Direction",
          href: "/paie/codification/direction",
        },
        {
          label: "Departement",
          href: "/paie/codification/departement",
        },
      ],
    },
    {
      icon: 1,
      label: "Congés/Absences",
      href: "/paie/conges-absences",
      dropdown: [],
    },
    {
      icon: 2,
      label: "Employés",
      href: "/paie/employes",
      dropdown: [],
    },
    {
      icon: 3,
      label: "Paie",
      href: "/paie/paie",
      dropdown: [],
    },
    {
      icon: 4,
      label: "Retenu",
      href: "/retenu/paie",
      dropdown: [
        {
          label: "Avances",
          href: ""
        },
        {
          label: "Acomptes",
          href: ""
        }
      ],
    },
    {
      icon: 5,
      label: "Administration",
      href: "/paie/administration",
      dropdown: [
        {
          label: "Gestion des utilisateurs",
          href: ""
        },
        {
          label: "Profils",
          href: ""
        },
        {
          label: "Permissions",
          href: ""
        }
      ],
    },
    {
      icon: 6,
      label: "Paramètres",
      href: "/paie/parametres",
      dropdown: [],
    },

  ]

  constructor() { }

  getData(){
    return this.data;
  }
  getIcons(){
    return this.iconsArray;
  }
}
