/**

 # JavaScript DOM
  - Dom Stands for document object model 
  - Html Dom is a standard object model and programming interface for HTML
  - HTML DOM methods are actions you can perform (on HTML Elements).
  - HTML DOM properties are values (of HTML Elements) that you can set or change.
  - It can be accessed with javascript.

 # document.getElementById()
  - we can access the particular element by passing the id inside ()

 # Finding HTML Element
  - document.getElementById(id)                   -          Find an element by element id
  - document.getElementsByTagName(name)           -          Find elements by tag name
  - document.getElementsByClassName(name)         -          Find elements by class name

 # Changing html Element
  - element.innerHTML =  new html content	      -          Change the inner HTML of an element
  - element.attribute = new value	              -          Change the attribute value of an HTML element
  - element.style.property = new style	          -          Change the style of an HTML element
  - element.setAttribute(attribute, value)	      -          Change the attribute value of an HTML element

 # Adding and deleting HTML element
  - document.createElement(element)               -   	     Create an HTML element
  - document.removeChild(element)	              -          Remove an HTML element
  - document.appendChild(element)	              -          Add an HTML element
  - document.replaceChild(new, old)	              -          Replace an HTML element
  - document.write(text)	                      -          Write into the HTML output stream

 # Adding Event Listner
  - document.getElementById(id).onclick = function(){code}  -  Adding event handler code to an onclick event

 # Accessing properties of DOM
  - ocument.anchors	             -    Returns all <a> elements that have a name attribute
  - document.applets	         -    Deprecated	
  - document.baseURI	         -    Returns the absolute base URI of the document	
  - document.body		         -    Returns the <body> element	
  - document.cookie		         -    Returns the document's cookie	
  - document.doctype	         -    Returns the document's doctype	
  - document.documentElement     -    Returns the <html> element	
  - document.documentMode	     -    Returns the mode used by the browser
  - document.documentURI	     -    Returns the URI of the document	
  - document.domain		         -    Returns the domain name of the document server	
  - document.domConfig		     -    Obsolete.	
  - document.embeds		         -    Returns all <embed> elements	
  - document.forms	             -    Returns all <form> elements	
  - document.head	             -    Returns the <head> element	
  - document.images		         -    Returns all <img> elements	
  - document.implementation	     -    Returns the DOM implementation	
  - document.inputEncoding	     -    Returns the document's encoding (character set)	
  - document.lastModified	     -    Returns the date and time the document was updated	
  - document.links		         -    Returns all <area> and <a> elements that have a href attribute	1
  - document.readyState		     -    Returns the (loading) status of the document	
  - document.referrer	         -    Returns the URI of the referrer (the linking document)	
  - document.scripts	         -    Returns all <script> elements	
  - document.strictErrorChecking -    Returns if error checking is enforced	
  - document.title	             -    Returns the <title> element	
  - document.URL		         -    Returns the complete URL of the document

 # DOM Element
  - const element = document.getElementById("intro");     - getting element by passing id
  - const element = document.getElementsByTagName("p");   - getting element by passing a tag name
  - const x = document.getElementById("main");
     |_ const y = x.getElementsByTagName("p");    // getting the particular tag from main p
  - const x = document.getElementsByClassName("intro");   - getting element by their class name
  - const x = document.querySelectorAll("p.intro");       - getting element by css selectors
  - const x = document.forms["frm1"];                     - getting element by object collections

 # DOM HTML
  - document.getElementById(id).innerHTML = new HTML      - changing direct value with assigment
  - document.getElementById(id).attribute = new value     - changing html attribute value example image
  - document.getElementById("myImage").src = "landscape.jpg";  - example of image changing
  - document.getElementById("demo").innerHTML = "Date : " + Date(); - changing dynamic content
  - document.write(Date());                               - This is used to write the content

 # DOM FORMS
  - Check on w3 school about that.

 # DOM CSS
  - document.getElementById(id).style.property = new style  - Putting css in particular dom element
  - document.getElementById("p2").style.color = "blue";     - Example of DOM CSS

 # DOM Element
  - Check on w3 school about that.

 # DOM Event
  - onclick - <h2 onclick="this.innerHTML='Ooops!'">Click on this text!</h2>
  - document.getElementById("myBtn").onclick = displayDate;  - Also used on click of a button
  - onload - work when the page is loading
  - onchange - works when anything changes
  - onmouseover - works when mouse moves to particular position
  - onmouseout - workd when mouse moves out to particular position

 # DOM Event listner
  - 






















 */