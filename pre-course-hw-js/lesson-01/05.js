let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

function  checkRuleLength(rule){
     switch (true) {
         case (rule.length < 25):
             console.log("Все таки нет правил без исключения");
break;

         case (rule.length > 25):
             console.log("У меня 100 пудов все получится");
             break;
         case (rule.length === 25):
             console.log('50 на 50');

             break;

         default:
             console.log("А что так можно было?");
     }
 }

checkRuleLength(rule);