const listItems = document.querySelectorAll("#myList li");
let lastSelectedItem = null;

listItems.forEach(item => {
  item.addEventListener("mousedown", function(event) {
    event.preventDefault();
        
    if (event.ctrlKey || event.metaKey) {
      this.classList.toggle("selected");
    } else {

      listItems.forEach(other => {
        other.classList.remove("selected");
      });
            
      this.classList.add("selected");
      lastSelectedItem = this;
    }
  });
    
  item.addEventListener("mouseup", function(event) {

    if (!event.ctrlKey && !event.metaKey && lastSelectedItem && lastSelectedItem !== this) {
      lastSelectedItem.classList.remove("selected");
      lastSelectedItem = null;
    }
  });
});
