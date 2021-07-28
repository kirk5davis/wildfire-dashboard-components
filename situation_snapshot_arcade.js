// arcade_expressions_for_dashboard.js
// Description: Various arcade expression for ArcGIS Dashboard
// Name: Kirk Davis
// Date: 07/27/2021

// national national_preparedness_level
When([$datapoint["national_preparedness_level"] == 1, '#218c71', 
    ($datapoint["national_preparedness_level"] > 1 && $datapoint["national_preparedness_level"] <= 3), '#F1B34D',
    $datapoint["national_preparedness_level"] > 3, '#CA304B'], '#dee2e6')

return {
    textColor:'white',
    backgroundColor: When($datapoint["national_preparedness_level"] == 1, '#218c71',($datapoint["national_preparedness_level"] > 1 && $datapoint["national_preparedness_level"] <= 3), '#F1B34D', $datapoint["national_preparedness_level"] > 3, '#CA304B', '#dee2e6'), 
    //topText: '',
    //topTextColor: '',
    //topTextOutlineColor: '',
    //topTextMaxSize: 'medium',
    middleText:$datapoint["national_preparedness_level"],
    //middleTextColor: 'white',
    middleTextOutlineColor: '',
    middleTextMaxSize: 'large',
    bottomText: 'National',
    //bottomTextColor: 'white',
    //bottomTextOutlineColor: '',
    bottomTextMaxSize: 'small',
    //iconName:'',
    //iconAlign:'left',
    //iconColor:'',
    //iconOutlineColor:'',
    //noValue:false,
    //attributes: {
      // attribute1: '',
      // attribute2: ''
    // }
  }

When(Number($datapoint["type_1_teams_assigned"]) == 0, '#218c71',Number($datapoint["type_1_teams_assigned"]) == 1, '#F1B34D', Number($datapoint["type_1_teams_assigned"]) > 1, '#CA304B', '#dee2e6'), 

// fire counts
return {
    textColor:'white',
    backgroundColor: When($datapoint["dnr_fires_count_in_last_24hrs"] <= 4, '#218c71',($datapoint["dnr_fires_count_in_last_24hrs"] <=5 && $datapoint["dnr_fires_count_in_last_24hrs"] <= 10), '#F1B34D', $datapoint["dnr_fires_count_in_last_24hrs"] > 10, '#CA304B', '#dee2e6'), 
    //topText: '',
    //topTextColor: '',
    //topTextOutlineColor: '',
    //topTextMaxSize: 'medium',
    middleText:$datapoint["dnr_fires_count_in_last_24hrs"],
    //middleTextColor: 'white',
    middleTextOutlineColor: '',
    middleTextMaxSize: 'large',
    bottomText: 'Northwest',
    //bottomTextColor: 'white',
    //bottomTextOutlineColor: '',
    bottomTextMaxSize: 'small',
    //iconName:'',
    //iconAlign:'left',
    //iconColor:'',
    //iconOutlineColor:'',
    //noValue:false,
    //attributes: {
      // attribute1: '',
      // attribute2: ''
    // }
  }