{
    let button = document.getElementById("clickme");

    button.onclick = function() {
        let addtoList = document.createElement("li");
        console.log(addtoList);

        addtoList.appendChild(document.createTextNode(
            document.getElementById("input").value
        ));

        let list = document.getElementById("mylist");
        list.appendChild(addtoList);
        
    };
}
