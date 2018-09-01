//BUDGET CONTROLLER
var budgetController = (function(){
    
})();


//UI CONTROLLER
var UIController = (function(){
    var DOMStrings = {
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue: '.add__value',
        inputAddBtn: '.add__btn'
    }
    return{
        getinput:function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value,// income or expense
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
            
        },
        getDOMStrings: function(){
            return DOMStrings;
        }
    };
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){
    
    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputAddBtn).addEventListener('click',ctrlAddItem);
        
        document.addEventListener('keypress',function(event){
            if(event.keyCode===13 || event.which === 13){
                ctrlAddItem();            
            }
        });
    };


    var ctrlAddItem = function(){
        //TODO
        // 1. Get the field input data
        var input = UICtrl.getinput();
     
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI 
        // 4. Calculate the budget
        // 5. Display the budget on the UI
        
        
    };
    
    return{
        init: function(){
            console.log('Application started');
            setupEventListeners();
        }
    };
    
})(budgetController,UIController);

controller.init();