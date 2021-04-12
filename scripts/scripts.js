/** On associe chaque photographe à leur ID */
const mimi = 243
const ellie = 930
const tracy = 82
const nabeel = 527
const rhode = 925
const marcel = 195

/** On initialise des tableaux qu'on rempliera avec les différentes datas */
const datas = []
const photographers = []
const medias = []

// On stock nos URL d'index et de base de données
const url = 'http://127.0.0.1:5501/'
const urlDatas = new URL('/datas.json', url)

/** une fonction qui recupère les datas du fichier JSON et quand la promesse est résolu appel différentes fonctions pour faire fonctionner l'application */
function renderData () {
  fetch(urlDatas).then(res => {
    if (!res.ok) {
      throw new Error('HTTP error' + Response.status)
    } else {
      res.json().then(data => {
        getDatas(data)
        photographer()
        media()
        homePagebuilder()
        photoPagebuilder()
      })
    }
  })
}
renderData()

/**
 * Recupère les datas et les injecte dans le tableau initialisé précédement
 * @param {Object} data les datas du fichier JSON
 */
function getDatas (data) {
  datas.push(data)
}

// TODO Faire le trie par titre

// TODO class static init()

// TODO Dropdown menu a faire
//      - css a faire

// TODO VERSION MOBILE
//  - Page photographe
//  - page contact + btn contactez moi sur la page modal contactr
//  - btn contactez moi bug

// TODO mise en page
//    Thumbnails
//    contactez moi modal mise en page a faire
//    photo gallery bug
//    photo gallery espacement like et prix

// TODO inclusvité ARIA
//          Invisible sauf si interaction. Apparait quand l’utilisateur descend sur la page. Redirige vers le contenu de main.
//          “Tag” (span uniquement pour screen readers pour chaque tag) ???
//          

// TODO MENTORAT : Check code propre