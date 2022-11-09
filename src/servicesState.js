//Import Images
import urbain1 from "./img/urbain1.jpg";
import paysage1 from "./img/paysage1.jpg";
import portrait1 from "./img/portrait1.png";
import objet1 from "./img/objet1.jpg";

export const ServicesState = () => {
  return [
    // Photographie urbaine
    {
      title: "Photographie urbaine",
      mainImg: urbain1,
      secondaryImg: urbain1,
      url: "/services/urbain",
      details: [
        {
          title: "Description",
          description:
            "La photographie urbaine consiste à photographier des édifices et autres constructions architecturales, généralement dans des villes.",
        },
        {
          title: "Prix",
          description:
            "Pour avoir milieu urbain ou un immeuble photographié, nous chargeons 40$ par heure, transport compris.",
        },
        {
          title: "Portfolio",
          description:
            "Curieux(se) à en voir plus? Rendez-vous sur notre Pinterest dans notre collection Urbain pour voir notre portfolio de photographie urbaine",
        },
      ],
    },
    // Photographie de paysage
    {
      title: "Photographie de paysage",
      mainImg: paysage1,
      url: "/services/paysage",
      secondaryImg: paysage1,
      details: [
        {
          title: "Description",
          description:
            "La photographie de paysage consiste photographier des scènes naturelles, que ce soit des vastes champs ou de grandes montagnes.",
        },
        {
          title: "Prix",
          description:
            "Pour avoir lieu naturel photographié, nous chargeons 30$ par heure, transport compris.",
        },
        {
          title: "Portfolio",
          description:
            "Curieux(se) à en voir plus? Rendez-vous sur notre Pinterest dans notre collection Paysage pour voir notre portfolio de photographie de paysages.",
        },
      ],
    },
    // Photographie de portrait
    {
      title: "Photographie de portrait",
      mainImg: portrait1,
      url: "/services/portrait",
      secondaryImg: portrait1,
      details: [
        {
          title: "Description",
          description:
            "La photographie de portrait consiste à poser et photographier des personnes, que ce soit individuelle ou en groupe.",
        },
        {
          title: "Prix",
          description:
            "Pour être photographié, nous chargeons 40$ par heure, transport compris.",
        },
        {
          title: "Portfolio",
          description:
            "Curieux(se) à en voir plus? Rendez-vous sur notre Pinterest dans notre collection Portrait pour voir notre portfolio de photographie de portraits.",
        },
      ],
    },
    // Photographie d'objet
    {
      title: "Photographie d'objet",
      mainImg: objet1,
      url: "/services/objet",
      secondaryImg: objet1,
      details: [
        {
          title: "Description",
          description:
            "La photographie d'objets consiste à photographier des sujets matériaux, notamment des produits de compagnie.",
        },
        {
          title: "Prix",
          description:
            "Pour avoir un objet quelconque photographié, nous chargeons 30$ par heure, transport compris.",
        },
        {
          title: "Portfolio",
          description:
            "Curieux(se) à en voir plus? Rendez-vous sur notre Pinterest dans notre collection Objet pour voir notre portfolio de photographie d'objets.",
        },
      ],
    },
  ];
};
