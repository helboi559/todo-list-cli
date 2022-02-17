//input: str
//output:1.user able to add to-do items,(2displayed to user),
    //3.if no items indicate to user,4.tell user invalid actions
    //5.mark items as complete

//
//global-to-do list, add new items , set as complete
//local-add items

const prompt = require('prompt-sync')({sigint:true});
//create an array - log if empty/with items as complete/incomplete
let items = [];
let itemNum = 0
// console.log(typeof items)
while(items.length >= 0) {
    if(items.length === 0) {
        console.log('---Your list is empty---')
    } else {
        console.log(`You have ${items.length} to-do items`)
        console.log(`${items}`)
    }
    let question1 = Number(prompt('[1]Add or [2]Complete a task? '))
    let countItems = items.length ;
    
    if (question1 === 1) {
        console.log('Creating a new item...')
        let question2 = prompt('What is this task called?: ')
        itemNum ++
        // items.push(`[${itemNum}] ${question2}`)
        let itemDetail = [itemNum,question2,]
        items = items.concat(itemDetail)
    } else if (question1 === 2) {
        console.log('Completing current item..')
        console.log(items)
        let question3 = Number(prompt('What task do you want to complete? '))
        
    } else {
        console.log('Inputted Invalid Action')
    }
    // console.log(typeof items[itemNum])
}

//require actions (add/complete)
    //if add    
        //add to list
        //set to incomplete
    //else 
        //set to complete
    