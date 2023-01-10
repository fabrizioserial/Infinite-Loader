# ♾️ Infinite Loader Example ♾

This project is an example of how an infinite loader can be implemented in a React application.

![Alt Text](./public/example_gif.gif)

### 🤔 What is an infinite loader? 

An Infinite Loader is a frontend technique that allows to load more content when the user scrolls to the bottom of the page.

### 🛠️ How does it work? 

To accomplish this technique, we have to have 2 main components:
* List query with pagination 
* A component to display the list of items

The list query is a query that returns a list of items and a pagination object.
The pagination object contains the information of the current page, the total number of pages and the total number of items.

The component to display the list of items is a component that receives the list of items and the pagination object and displays the list of items.
The last item has a reference that when is display in the screen, it triggers a function to load more items.

### 📚 How to run the project?

1. Clone the project
2. run `npm install`
3. run `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
5. Enjoy!

### Future Improvements

* When the items are not displayed in the screen, they should be removed from the DOM to avoid memory leaks.

An important advantage of this approach is that the DOM will not contain elements that are not displayed. This will allow us to have a better performance in the application.


