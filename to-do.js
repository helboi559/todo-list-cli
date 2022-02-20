//input: str
//output:1.user able to add to-do items,(2displayed to user),
    //3.if no items indicate to user,4.tell user invalid actions
    //5.mark items as complete

//
const prompt = require('prompt-sync')({sigint:true});
//create an array - log if empty/with items as complete/incomplete
let items = [];
let complete = [];
let itemNums = [];
let itemNum = 1
// console.log(typeof items)
// console.log(lineGenerator(items,complete,itemNums))
while(items.length >= 0) {
    //cond statement to log list
    if (items.length === 0) {
            console.log('---Your list is empty---')
    } else {
        //log running list
        console.log(`You have ${items.length} to-do's`) 
        //iterate to log by line
        for(let j = 0 ; j < items.length ;j++) {
            if (complete[j] === false) {
                let line = `${itemNums[j]} [Incomplete] ${items[j]}`
                console.log(line)
            } else {
                let line2 = `${itemNums[j]} [Complete] ${items[j]}`
                console.log(line2)
            }
            
        }
    
    }
    //ask for add ir complete task
    let question1 = Number(prompt('[1]Add or [2]Complete a task? '))
    //if ADD
    if (question1 === 1) {
        console.log('Creating a new item...')
        //prompt for task
        let question2 = prompt('What is this task called?: ')
        //add items to individual arrays
        items.push(question2)
        complete.push(false)
        itemNums.push(itemNum)
        //increase counter by one
        itemNum ++ ;
    } else if (question1 === 2) {
        console.log('Completing current item..')
        //if we want to complete an item...
        // log current status of list by looping
        for(let k = 0 ; k < items.length ;k++) {
            if (complete[k] === false) {
                let line = `${itemNums[k]} [Incomplete] ${items[k]}`
                console.log(line)
            } else {
                let line2 = `${itemNums[k]} [Complete] ${items[k]}`
                console.log(line2)
            }
            
        }
        //user input by num
        let toDo = Number(prompt('What task do you want to complete? '))
        //loop through all arrays and set as complete
         for(let i = 0 ; i < items.length ; i++) {
            //if num matches number in array
            if (toDo === itemNums[i]) {
                //change value to true in another array at same index
                complete[i] = true
            }
            
        }
    } else {
        console.log('Inputted Invalid Action')
    }
}


    