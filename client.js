var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

function bonusCalculator (person) {
    var employeeBonus = {name: person.name, bonusPercentage: null , totalCompensation: null, totalBonus: null}

    if (person.reviewRating <3) {
        employeeBonus.bonusPercentage = 1 ;
    }
    else if (person.reviewRating == 3) {
        employeeBonus.bonusPercentage = 1.04;
    }
    else if (person.reviewRating == 4) {
        employeeBonus.bonusPercentage = 1.06;
    }
    else  {
        employeeBonus.bonusPercentage = 1.1
    }
    //End basic rating
    if (person.employeeNumber.length == 4) {
        employeeBonus.bonusPercentage += .05;
    }
    if (person.annualSalary > 65000) {
        employeeBonus.bonusPercentage -= .01
    }
    if (employeeBonus.bonusPercentage> 1.13) {
        employeeBonus.bonusPercentage = 1.13
    }
    if (employeeBonus.bonusPercentage<1) {
        employeeBonus.bonusPercentage = 1
    }
    //Bonus Percentage is complete
    employeeBonus.totalCompensation = parseInt(person.annualSalary * employeeBonus.bonusPercentage);
    //Total Compensation set
    employeeBonus.totalBonus = parseInt(employeeBonus.totalCompensation - person.annualSalary);
   
    return employeeBonus
};

var employeesWithBonus = []
;

for (var i = 0; i < employees.length; i++) {
    var currentEmployee =employees[i]; 
    // console.log(currentEmployee)
    employeesWithBonus.push(bonusCalculator(currentEmployee))
   }

   console.log(employeesWithBonus);


   function displayList(){
    $( "#emp0" ).append(employeesWithBonus[0].name+ ' will get a raise of '+ parseInt(employeesWithBonus[0].bonusPercentage*100-100)+ 
    '%.  Their annual adjusted salary is $' +employeesWithBonus[0].totalCompensation + ' after an increase of $' + employeesWithBonus[0].totalBonus+'.');
   
   $( "#emp1" ).append(employeesWithBonus[1].name+ ' will get a raise of '+ parseInt(employeesWithBonus[1].bonusPercentage*100-100)+ 
   '%.  Their annual adjusted salary is $' +employeesWithBonus[1].totalCompensation + ' after an increase of $' + employeesWithBonus[1].totalBonus+'.');
   $( "#emp2" ).append(employeesWithBonus[2].name+ ' will get a raise of '+ parseInt(employeesWithBonus[2].bonusPercentage*100-100)+ 
   '%.  Their annual adjusted salary is $' +employeesWithBonus[2].totalCompensation + ' after an increase of $' + employeesWithBonus[2].totalBonus+'.');
   $( "#emp3" ).append(employeesWithBonus[3].name+ ' will get a raise of '+ parseInt(employeesWithBonus[3].bonusPercentage*100-100)+ 
   '%.  Their annual adjusted salary is $' +employeesWithBonus[3].totalCompensation + ' after an increase of $' + employeesWithBonus[3].totalBonus+'.');
   $( "#emp4" ).append(employeesWithBonus[4].name+ ' will get a raise of '+ parseInt(employeesWithBonus[4].bonusPercentage*100-100)+ 
   '%.  Their annual adjusted salary is $' +employeesWithBonus[4].totalCompensation + ' after an increase of $' + employeesWithBonus[4].totalBonus+'.');
   $( "#emp5" ).append(employeesWithBonus[5].name+ ' will get a raise of '+ parseInt(employeesWithBonus[5].bonusPercentage*100-100)+ 
   '%.  Their annual adjusted salary is $' +employeesWithBonus[5].totalCompensation + ' after an increase of $' + employeesWithBonus[5].totalBonus+'.');
}

   //displayList();

   $(document).ready(onReady);

   function onReady(){
        $('#button').on('click', displayList);
   }

