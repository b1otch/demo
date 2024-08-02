sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'handoverfrontend/test/integration/FirstJourney',
		'handoverfrontend/test/integration/pages/CustomerList',
		'handoverfrontend/test/integration/pages/CustomerObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerList, CustomerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('handoverfrontend') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerList: CustomerList,
					onTheCustomerObjectPage: CustomerObjectPage
                }
            },
            opaJourney.run
        );
    }
);