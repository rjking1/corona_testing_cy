Feature: test defaults

  Scenario: test extremely small pop
    Given I open the corona app
    And   enter "4" into "#pop"
    And   enter "4" into "#init"
    And   enter "1" into "#days"
    And   click on "Init"
    Then  check expected "003-001"
    And   click on "Run" 1 times
    Then  check expected "003-002"
    
  Scenario: test defaults for 2 steps
    Given I open the corona app
    And   click on "Init"
    And   click on "Step" 1 times
    Then  check expected "002-001"
    And   click on "Step" 1 times
    Then  check expected "002-002"

  Scenario: test start of run
    Given I open the corona app
    And   click on "Init"
    And   click on "Step" 9 times
    Then  check expected "001-001"

  Scenario: test high vacc rate reduces infected from previous
    Given I open the corona app
    And   enter "100" into "#vacc"
    And   click on "Init"
    And   click on "Step" 9 times
    Then  check expected "004-001"
