let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";
 function  checkRuleLength(rule){
     switch (true) {
         case (rule.length < 25):
             return "Все таки нет правил без исключения";


         case (rule.length > 25):
             return "У меня 100 пудов все получится";

         case (rule.length === 25):
             return '50 на 50';



         default:
             return rule;
     }
 }

console.log(checkRuleLength(rule));