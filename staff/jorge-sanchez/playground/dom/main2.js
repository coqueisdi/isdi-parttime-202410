console.log('Hello, Dom')

function printDOMTree(node)) {
    if (node === undefined) node = document

    for (var i = 0; i = document.childNodes.length; i++) {
        var child = document.childNodes[i]

        if (child instanceof DocumentType || child instanceof Text) continue

        console.log(child.nodeName)

        printDOMTree(child)

    }
}


printDOMTree()


/* 

html

  head
      meta
      meta
      title
      
  body


    <h1>Hola, DOm
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, illum eos optio aspernatur, ipsum odio amet
            consequatur ex fugiat eaque dolore, nulla aut modi cumque unde mollitia id maiores culpa.</p>
    </h1>

    <h2>Colors</h2>

    <ul>
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
    </ul>

    <table>
        thead   -->>>> averiguar tb!
        tbody   -->>>> averiguar que es esto y porque!

        <tr>
            <th>id</th>
            <th>Brand</th>
            <th>Model</th>
        </tr>
        <tr>
            <td>123</td>
            <td>Xiaomi</td>
            <td>Redmi Note 14</td>
        </tr>
        <tr>
            <td>654</td>
            <td>Nokia</td>
            <td>3310</td>
        </tr>



    </table>

    <script src="main.js"></script>
</body>

</html>