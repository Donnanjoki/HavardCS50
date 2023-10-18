/*

*************************************** Week 8 - Javascript ********************************************


            ### Routers ###

>. TCP/IP are two protocols that allow computers to transfer data between them over the internet.
>. IP or internet protocol is a way by which computers can identify one another across the internet.
Every computer has a unique address in the world. E.g: #.#.#.#.

>. Ip addresses are 32-bit, meaning that these addresses could accommodate over 4 billion addresses, however newer version of IP 
addresses can accommodate more computers.

>.In real life servers do a lot of work for us.

>. TCP or transmission control protocol, is used to distinguish web services from one another. Example 80 denotes HTTP and 443 denotes HTTPS.
These numbers are port numbers. 

>. When information is passed from one location to another, an IP address and TCP port number are sent.
>. These protocols are used to fragment large files into multiple parts called packets. When a packet is lost TCP/IP can request missing packets again from the origin server.


      ### DNS ###
 
>. Domain Name Systems, is a collection of servers on the internet that are used to route website addresses like havard.edu to a specific IP address.


       ### HTTP ###

>.Hypertext transfer protocol is an application-level protocol that developers use to build powerful and useful things.

>. Example: https://www.example.com/folder/file.html - in this address https is the protocol used to connect to the web address.
>. This means that it utilizes GET and POST requests to ask for information from the server.

>. Example of response codes after making a request to a server:
       200 - ok
       301 - Moved Permanently
       302 - Found
       304 - Not Modified
       304 - Temporary Redirect
       401 - Unauthorized
       403 - Forbidden
       404 - Not Found
       500 - Internal Server Error
       503 - Service Unavailable



       #### Javascript ####

>. JavaScript allows you to dynamically read and modify the html document loaded into memory such that the user need not reload to see changes.
>. Example we can geo-locate using Javascript;

    // navigator.geolocation.getCurrentPosition(function(position) {
        document.write(position.coords.latitude + "," + position.coords.longitude);
    })


      ### Document Object Model ###

>.By utilizing the DOM we are able to reset its properties or call certain methods, hence our page content can change 
without us needing to refresh the page.

  >>>. The DOM Properties
       A]] innerHTML - this holds the HTML inside a set of HTML tags
       B]] nodeName - the name of an HTML element or element attribute
       C]] id - the "id" attribute of an HTML element
       D]] parentNode - a reference to the node one level up in the DOM
       E]] childNodes - An array of references to the nodes one level down in the DOM
       F]] attributes - An array of attributes of an HTML element
       G]] style - An object encapsulating the CSS/HTML styling of an element.

>>>>. DOM Methods
       A]] getElementById(id) - Get the element with a given ID below this point in the DOM.
       B]] getElementByTagName(tag) - Gets all the elements with the given tag below this point in the DOM.
       C]] appendChild(node) - Adds the given node to the DOM below this point.
       D]] removeChild(node) - Removes the specified child node from the DOM




*/
