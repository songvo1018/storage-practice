// Auth
  // радио бтн определяющая права круд для юзера, записываются в localStorage (действуют 5 минут?)
// list categories 
  // отображение категорий, которые существуют хотя бы в 1 айтеме
    // категория при нажатии выводит в фрейм лист айтемов только те, что соответствуют категории
// list items
  // отображение айтемов из локалстордж



// localStorage
  // хранение айтемов
    // айтем
      // id, name, categories, description, price
  // хранение состояния Auth (?)
  // хранение категорий айтемов
    // 
// CRUD
  // func 
    // create
      // onclick по кнопке + на странице
        // open createItem modal
          // createItem modal = (inputs :id, name, categories, decription, price), create btn, close btn (close modal)
    // read
      // вывод всех айтемов массива в список айтемов
    // update
      // onclick по кнопке удаления на каждом айтеме 
        // save id, name, discription, price(currentItem)
        // localStorage.remove(currentItem)
        // open createItem modal
          // update old data
        // setItem(updatedItem with old id)
    // delete
      // onclick по кнопке удаления на каждом айтеме 
        // remove
// Validations