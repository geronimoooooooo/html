
The best way to determine if there are any elements is to test the selection's .length property, which tells you how many elements were selected. If the answer is 0, the .length property will evaluate to false when used as a boolean value:
// Testing whether a selection contains elements.
if ( $( "div.foo" ).length ) {
    ...
}
