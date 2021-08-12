# todo-list

Thinking of a new 'convention' of mine. All my variable names being first 3 letters of key words. ie proDes will be 'project description'. Two current exceptions will be 'list' and 'lis'. 'lis' will be for listener.. 'list' will signify a list. And, 'cont' will be container.

form will still be 'form'.

^^ Further on this, maybe anything that's 4 letters can stay 4 letters as it's normally important... but everything else becomes 3!

Content Editable: My assumption, without looking it up too much, is that there is security concerns using this, to directly store data.. alas, just having fun.


Final thoughts: Still need to find a way to organise my code better.. At the moment, I import everything into the index, and I then have to pass everything through to the first few functions, which can then be passed on to functions down the line.. Ie. todoDomBuilder is adding an argument to nearly every bl**dy function as it's normally needed at the end of them running, to rebuild the dom.. But then it's such a hassel, if I want to change code, I then  have to go back and re work all the pass throughing of this function in all the parameters... Brittle.. Thought I was doing the right thing by passing modules down through the function calls, but maybe I'm just better off directly importing them into the needed module..?

