This is a sample repository to reproduce an issue in karma-browserify (https://github.com/nikku/karma-browserify/issues/113)

To reproduce:

* Open two terminal windows on the root of the repo
* Terminal 1: Launch Karma: ./jake.sh karma
  * attach browser: http://localhost:9876
* Terminal 2: run the tests: ./jake.sh testClient
  * the test should pass
* modify tests/client/example_test.js so that a test fails
* run the tests again 
  * tests will still pass
* run the tests again
  * tests will now fail (and keep failing if run again)
* fix the test and re-run
  * tests will fail the first time, but pass the second


----

Based on James Shore's "Automatopia" seed repository (https://github.com/jamesshore/automatopia)
