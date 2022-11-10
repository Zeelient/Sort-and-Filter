$(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people = [
    {                                              // Each person is an object
      name: 'Jim',                               // It holds name and rate
      rate: 18
    },
    {                                              // Each person is an object
      name: 'Jenny',                               // It holds name and rate
      rate: 24
    },
    {                                              // Each person is an object
      name: 'Russell',                               // It holds name and rate
      rate: 32
    },
    {                                              // Each person is an object
      name: 'Carey',                               // It holds name and rate
      rate: 41
    },
    {                                              // Each person is an object
      name: 'Kim',                               // It holds name and rate
      rate: 59
    },
    {                                              // Each person is an object
      name: 'Carel',                               // It holds name and rate
      rate: 65
    },
    {
      name: 'Carl',                               // Each person is an object
      rate: 88                                    // It holds name and rate
    },
    {
      name: 'Jerry',                              // Each person is an object
      rate: 73                                    // It holds name and rate
    },
    {
      name: 'Norman',                             // Each person is an object
      rate: 127                                   // It holds name and rate
    }
  ];


  // THE FUNCTION ACTS AS A FILTER
  function priceRange(person) {                        // Declare priceRange()
    return (person.rate >= 49) && (person.rate <= 90); // In range returns true, changed range numbers
  };

  // FILTER THE PEOPLE ARRAY & ADD MATCHES TO THE RESULTS ARRAY
  var results = [];                              // Array for matching people
  results = people.filter(priceRange);           // filter() calls priceRange()


  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  var $tableBody = $('<tbody></tbody>');           // New table body
  for (var i = 0; i < results.length; i++) {       // Loop through matches
    var person = results[i];                       // Store current person
    var $row = $('<tr></tr>');                     // Create a row for them
    $row.append($('<td></td>').text(person.name)); // Add their name
    $row.append($('<td></td>').text(person.rate)); // Add their rate
    $tableBody.append( $row );                     // Add row to new content
  }

  $('thead').after($tableBody);                    // Add tbody after thead
});