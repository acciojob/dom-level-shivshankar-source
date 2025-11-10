//your JS code here. If required.
let ul=document.querySelector("ul")
let children=ul.children
let count=0
for(let t of children){
		
	if(t.id=="level"){

		prompt(`The level of the element is: ${count}`)
			
	}
	count++
}