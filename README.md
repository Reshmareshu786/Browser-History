In this project, let's build a **Browser History** 

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/browser-history-output.gif" alt="browser history output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files



- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/browser-history-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Browser History](https://assets.ccbp.in/frontend/content/react-js/browser-history-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Empty History View](https://assets.ccbp.in/frontend/content/react-js/browser-history-empty-view-lg-output.png)

</details>



- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>


The app must have the following functionalities

- Initially, the list of given history items should be displayed with a delete button for each history item.
- When a non-empty value is provided in the search input, then display the history items which includes the search input irrespective of case
- When the delete button of a history item is clicked, then the respective history item should be deleted from the list of history items
- When a non-empty value is provided in the search input element, and no history item includes the value given in the search input, then [Empty History View](https://assets.ccbp.in/frontend/content/react-js/browser-history-empty-view-lg-output.png) should be displayed
- When all the history items are deleted, then [Empty History View](https://assets.ccbp.in/frontend/content/react-js/browser-history-empty-view-lg-output.png) should be displayed

- The App is provided with `historyList`. It consists of a list of historyItem objects with the following properties in each historyItem object

  |     Key      | Data Type |
  | :----------: | :-------: |
  |      id      |  Number   |
  | timeAccessed |  String   |
  |   logoUrl    |  String   |
  |    title     |  String   |
  |  domainUrl   |  String   |

</details>

### Important Note


### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png](https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png) alt should be **app logo**
- [https://assets.ccbp.in/frontend/react-js/search-img.png](https://assets.ccbp.in/frontend/react-js/search-img.png) alt should be **search**
- [https://assets.ccbp.in/frontend/react-js/delete-img.png](https://assets.ccbp.in/frontend/react-js/delete-img.png) alt should be **delete**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #3367d6; width: 150px; padding: 10px; color: white">Hex: #3367d6</div>
<div style="background-color: #2850a7; width: 150px; padding: 10px; color: white">Hex: #2850a7</div>
<div style="background-color: #ececec; width: 150px; padding: 10px; color: black">Hex: #ececec</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #6697ff; width: 150px; padding: 10px; color: black">Hex: #6697ff</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<br/>


