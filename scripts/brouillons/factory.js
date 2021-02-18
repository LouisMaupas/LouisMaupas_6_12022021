// Usine generale
class Factory {
  constructor (id, type) {
    this.createObject = function (id) {
      let object
      if (type === 'media') {
        object = new Media(id)
      } else if (type === 'photographers') {
        object = new Photographers(id)
      } else {
        console.log('erreur lors de la création de l\'objet')
      }
      return object
    }
  }
}

// stock de photographes et des photos
let tableauPhotographes = []
let tableauMedia = []


