// Immediately Invoked Function Expression (IIFE)

// ()()  -> ye iife ka syntex hwi 
// iife ka use globle polusion ko hatne ke kliye jta hei ye immediately execute ho jat hei 

(function chai(params) {
    console.log('hello word');
    
})
();
(
    ()=>{
        console.log('DB Connected');
        
    }
)();
// first code end karne ke liye ; ka use karte hei 
(
    function code(name1,name2){
        console.log(`DB Connected two,${name1},${name2}`);
        
    }
)('priya','priti');

( 
    (name)=>{
        console.log(`this is my ${name}`);
        
    }
)('bhavesh')


// code kese execute hota hei 
