Day One: 

 	I face constant frustration as I like to scaffold out the framework of a project before filing out any single page.  I know that the point of this assignment is to work on TDD but as I am adding React to the project there are a few things that I feel need to be in place before I can even start with the ship constructor.  However, I am also using eslint which is constantly yelling at me for unused variables.  I want to set up the content function so that the body will actually load something but if I leave any variables unused the linter blocks the app from rendering anything.

	I have to take the frustration in stride and turn it into a lesson to focus on one object & test at a time.  However, this runs contrary to my normal coding style leaving me a little on edge and afraid to put anything down that I’m not going to immediately use.

I passed my first Ship test.  It required that I look back at past projects to realize that I need to import the functions independently of the app as a whole.

End of the Day lesson: don’t use .toBe() tests unless you are only testing identity.  If you can use the .toEqual()test use that instead.


Day Two:
	
	I learned today that you can’t use array.fill() to create spaces in an array. I hoped that array.fill(‘undamaged’, 0, 3) would turn an empty array into one with a length of 3 with ‘undamaged’ at every index.  Thank you MDN for wonderful sandboxes in your docs.

	Relearned, painfully, the difference between private, public, & privileged functions.  I remembered using them in Ruby 10 years ago, but this is the first occasion I’ve had to run into problems with Javascript.

	
Day Four:
	As I build out the app in React I’ve become stumped on what to test and how to test it.  I’ve never had a good tutorial for React.  The only one I’ve had was the equivalent of reading The Cat in the Hat to a child, making them copy the text in the book and then telling them they know how to read.
	My plan is a simple layout with a nav bar and 3 tabs: “PlayerOne”, “Waiting”, “PlayerTwo”.  Later I’ll remove the functionality of the tabs, as to use them for notification of the app state, but prevent the manual changing of the state except by the buttons ending your turn or the button on the waiting screen to allow the players to pass the ‘hot seat’.

	Today I’m attempting to build out the waiting page so I can navigate between the two players.

Day Five:
	I now understand why they talk about converting old code into React piece by piece.  I just took the board apart making Cell components, and then Button components in the cells.  Then then continued to break down the Button further by passing in the onClick function so that I could use the Button component outside of the cells.  
	It was fun and interesting to do, however I worry that it makes my code harder to follow. As now all of the css for the buttons will be in one file and I now have to set useStates for the buttons.

Day Six: 
	I am a little in the weeds.  Due to the connectivity of React and the need to make sure the individual components update if I want to change something, it is often across several files of code.  Additionally, I have all of these options that I can get distracted while trying to get button A to work. I see opportunities in the code to update or refine another part of the code and if I’m not certain on how to get my original task done I’ll get side tracked.  That normally isn’t a problem for me. I normally build things one task at a time, but React leaves me befuddled in this way.

Day Eight:
	I need to know when I am done for the day.  I wrote a new test today and in getting that test green I wrote a lot of new code and interactions.  I was having fun hacking away.  I was one step from making it green when I saw that it wasn’t working due to a mistake in the ship orientation.  The ship was positioned horizontally across the board and I was testing for a vertical test.  Being in the last ½ hour of my day, my brain jumped at it and said “oh no, I wrote my code and tests wrong. The original code and tests to track position are backwards.  I need to reverse them because I made a dumb mistake.  
I went into the code, made the swap of COL & ROW. Then I returned to the test, ran them and corrected the tests so they now passed so that I properly reflected the Column and Row. … I then went back to working on the new test.  I then Picard Facepalm as it was THAT test that reversed Column & Row not my original programming.
	So how do I stop this from ever happening again? Do I:
	A) Double check all my code when I think I have made a mistake? Yes, but that can be really time consuming when I am working on new code.
	B) Write better tests? Yes, but that could lead to overtesting and additional wasting of time.
C) NAME THINGS MORE ACCURATELY!  Yes, that is the solution that doesn’t use any additional resources and prevents additional mistakes.  Instead of just ROW & COL I could have named them ABCROW & COL123 that way I know the axis I’m moving across when there is no hard or fast logic as to which should be which. I will now make a CostCo run and come back to this tomorrow for the corrections when I’m less distracted.

Day Nine:
	This resulted in a philosophical talk about the nature of testing. Do you test everything because everything is important and anything can break or do you only test what gives you the highest ROI thus maximizing the effectiveness of your time.  I have reached that point in my code.
	I wanted to test my ability to remove a sunken ship from a fleet.  This is a function that is in the Content section of my code which uses private functions and is in the base layer of my code.  It isn’t exported anywhere and it isn’t called in any other file.  So do I make a lot of changes so that I can call it from my testing suite or do I just copy the function into the testing suite and call it there to test it.
	I started with the latter to get it to work.  I wanted to know if the function worked before I tried to access it in my actual app.  Once it did I tried to access it through the Content section, and the house of cards collapsed.  Importing the Content section required importing every variable used in creating the Content section which would require more imports spiraling outward. I have decided that at least for the moment the ROI is way too low for all of that work.
	So I will just keep the function in my testing suite, occasionally updating it when something breaks amongst the test with the tried and true copy / paste to ensure fidelity between the two versions of the function.

