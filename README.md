# Development

### Link to Deployed Website
[If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`](https://sleepypenguin111.github.io/development/)

### Goal and Value of the Application
The goal of this application is to provide users to interact with 12 cards with sorting and filtering features. This app also enables users to effectively and efficiently find a dog of their preference.

### Usability Principles Considered
The most significant usability consideration is the location of the cart. From a user's point of view, what he/she is looking for is most likely be the current items and total price. Therefore, I decided to place those information at top-left corner so that it is easier for the user to see. Anotehr thing that I considered is the size of the buttons. Although large buttons may not necessarily result in the most aesthetic web design, I thought it is important for the website to be accessible by as many people as possible. So I intentionally made the buttons larger for better usability. Finally, I used larger fonts for most part of the website so even the people who have difficulty recognizing screen texts can easily navigate the app.

### Organization of Components
In terms of the organization of react components, I have index.js as the root component, and I wrote App.js component under it as a subroot. In App.js, I used Cart and Dog components from Cart.js and Dog.js from "components" folder accordingly. 

### How Data is Passed Down Through Components
When I used Dog component in App.js, I passed dog, onAdd, onRemove as props. I passed dog because the each Dog component needed to have distinct information about different dog to display different dog and its data. I also needed to pass onAdd and onRemove to the Dog component because each Dog component should allow user to add or remove each dog to/from the cart. When I used Cart component in App.js, I passed cartItems, total, onAdd and onRemove. I passed cartItems so that the Cart component can display the items in the cart and total so that it can also display the total price of the dogs in the cart. I also passed onAdd and onRemove because I wanted users to be able to change the items in the cart in the cart component section on screen.

### How the User Triggers State Changes
The main ways users can trigger state changes is to first click buttons to invoke onAdd() and onRemove() functions. These fucntions are used as callback functions in each button's onClick prop. Then, onAdd() and onRemove() will update the states accordingly. Users can also trigger state changes by selecting sorting options or click reset button. Selecting filters or sorting options will invoke callback functions to keep track of whether each selection is made, further invoking the useEffect() function to change the displayed items and its sort.
