({
    doInit: function (component, event, helper) {
        var dobBorrower = component.get('v.pl_Application.personalInformation.dob');
        var displayDt = dobBorrower;
        console.log('PreOffer Detail Coborrower First name: ' +component.get('v.pl_Application.coBorrower.personalInformation.firstName'));
        console.log('Preoffer Detail DOB BOrrower: ' +dobBorrower);
        if (dobBorrower != null) {
            console.log('dobBorrower is NOT NULL')
            component.set('v.pl_Application.personalInformation.dob', helper.formatDOB(dobBorrower));
        }
        var dobCoBorrower = component.get('v.pl_Application.coBorrower.personalInformation.dob');
        displayDt = dobCoBorrower;
        if (dobCoBorrower != null) {
            console.log('Dob Coborrower is: ' +helper.formatDOB(dobCoBorrower));
            component.set('v.pl_Application.coBorrower.personalInformation.dob', helper.formatDOB(dobCoBorrower));
        }
        var isMsr = component.get('v.isMsr');
         if(isMsr) {
            component.set('v.bannerMessage', "Please confirm the applicant's information below:");
            component.set('v.buttonLabel', 'VIEW LOAN OPTIONS'); 
            component.set('v.buttonTitle', 'View my loan options');
             
    }
      //Non-AutoStrata Changes
      helper.getProduct(component);
        
    },

    viewLoanOptions: function (component, event, helper) {
        component.set("v.Navigation_Route", "Micro Service GetOfferDetails");
        var navigate = component.get('v.navigateFlow');
        navigate("NEXT");
    },

    takeBackToPersonalInfo: function (component, event, helper) {
        component.set("v.Navigation_Route", "Entry Screen");
        var navigate = component.get('v.navigateFlow');
        navigate("NEXT");
    }
    
    

});
