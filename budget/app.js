//BUDGET CONTROLLER
var budgetController = (function(){
    var Expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){ //we can call anything = cur
            sum += cur.value;
        });
        data.totals[type] = sum;
    };
    
    var data = {
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        },
        budget: 0,
        percentage: -1
    };
    
    
    return {
        addItem:function(type,desc,val){
            var newItem,ID;
            
            //create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                
            }else{
                ID = 0;
            }
            
            //Create new items based on 'inc' or 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID, desc,val);
            }else if(type ==='inc'){
                newItem = new Income(ID,desc,val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        
        calculateBudge:function(){
            //calculate total income & expenses
            calculateTotal('exp');
            calculateTotal('inc');
            //calculate the budget : income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            //calculate the percentage of income that we spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp/data.totals.inc)*100);
            }else{
                data.percentage = -1;
            }
            
        },
        getBudget:function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function(){
            console.log(data);
        }
        
        
    };
})();


//UI CONTROLLER
var UIController = (function(){
    var DOMStrings = {
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue: '.add__value',
        inputAddBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer:'.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLable: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    }
    return{
        getinput:function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value,// income or expense
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
            
        },
        addListItem:function(obj,type){
            var html,newHtml,element;
            //Create HTML string with placeholder text
            if(type ==='inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if(type === 'exp'){
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            //Replace the placeholder text with acutal data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);
            //Insert the HTML into to DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
        },
        clearFields:function(){
            var fields,fieldsArr;
            fields = document.querySelectorAll(DOMStrings.inputDescription+','+DOMStrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current,index,array){
                current.value = "";
            });
            
            fieldsArr[0].focus();
        },
        displayBudget:function(obj){
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLable).textContent = obj.totalExp;
            
            if(obj.percentage > 0){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
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

        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);
    };
    
    var updateBudget = function(){
        // 1. Calculate the budget
        budgetCtrl.calculateBudge();
        // 2. return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
        
        
    }
    var ctrlAddItem = function(){
        var input , newItem;
        // 1. Get the field input data
        input = UICtrl.getinput();
        
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type,input.description,input.value);
            
            // 3. Add the item to the UI 
            UICtrl.addListItem(newItem,input.type);
            
            // 4. Clear the fileds
            UICtrl.clearFields();
            
            // 5. Calculate and update budget
            updateBudget();
        }
        
    };
    
    var ctrlDeleteItem = function(event){
        var itemID,splitID,type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; //target = where the event actually triggered
        if(itemID){
            //inc-1 or exp-0
            splitID = itemID.split('-');
            type = splitID[0];
            ID = splitID[1];

            // 1. delete the item from the data structure

            // 2. delete the item from UI

            // 3. Update and show the new budget

        }
    };
    return{
        init: function(){
            console.log('Application started');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };
    
})(budgetController,UIController);

controller.init();