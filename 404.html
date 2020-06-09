README

included:
All source files (.cc, .hh, .cpp, .h)
this README
Makefile
Output dumped by gprof for 5 tests (see below on why I don't have profiling data for BST/words.txt test)

Homework #5

I'd like to first mention that the biggest problems I encountered during this project were really stupid and idiotic typos; simple things like accidentally putting a colon where a semicolon belong (for the last method of a class of all cases! Gave me weird errors about no constructor body) or dumb errors in my Makefile, which caused all sorts of weird compiling issues.

Anyway, my implementation of this homework is what I call the "lazy way".  In other words, I tried to make my life as easy as possible while still maintaining the guidelines.  When I say " as easy as possible," I'm actually only considering the present.  Because of this, my AVL and Splay trees are not templated (i.e. they inherit from BinarySearchTree< string, int >).  Also, I didn't want to worry about messy inheritance issues stemming from using an AVLNode that inheritsfrom a BSTNode, so in order to implement height, I altered BSTNode and its constructor.  No other reason than simplicity.  Height is initialized by default to 0, and is only updated during AVLTree inserts (and rotations, etc.).  Height is not updated (nor used) in any other case.

A lot of the code used in my AVL tree looks quite similar to the textbook's.  I tried my hardest not to copy, but I have this uncanny ability to memorize things really easily (really!), so it was hard not to implement the same way.  Rest assured though, I pretty much wrote AVLTree without consulting the text while I was coding.  SplayTree I completely wrote myself, since there is no sample code.  Just had to get that confession out of the way.

Also, for Splay trees, the tree is splayed during Inserts and Finds (even though Find is never used in my code, I still implemented it).  If a key can't be found, then it splays it's parent.  If there is a collision during Insert, the value is incremented and then that node is splayed.

In fact, for all inserts, if there is a collision, the value of that key is incremented by one.  I directly altered the BST code to do this for BST's.

For the HeapSort algorithm, I felt it'd be more efficient to not create an additional heap data structure.  Instead, I used an array, keeping in mind that children were in index 2i+1 and 2i+2.  In order to maintain key and value relationships, anytime a value changed position in the array, the key would also change position in the exact same way.  

One thing you may notice is that I migrated over to strings.  My previous assignments used char arrays, but for this assignment where lots of comparisons are needed, it made it easier to just use strings.

And finally... (drumroll please...)

Well first of all, comparing plays with stories is probably NOT the most effective way of looking for similarities.  For example, it is natural to assume that in plays, "I", "you", "me", etc. would be used far more often than in stories.  However, there are some interesting (and uninteresting) similarities.

Looking at the top 5 through 10 words used, they are quite similar to each other, which probably stems more from the fact that both authors used the English language than the possibility that they are the same author.  Looking at the next 10 most used words, differences are noticable.  Bacon uses the word "which" quite often, while Shakespeare rarely uses that word.  Also, for the similar word "that," Bacon also uses more often.  I think this is a key difference which is enough proof to show that they are not similar authors.  This conclusion comes from the assumption of the usage for "which" and "that".  Usually, these two words are used to extend the meaning of something (sorry, I'm not an English major).  Obviously, Bacon likes to use these words more often to link sentences.


Extra Credit:
Profiling

I used words.txt and the-new-atlantis.txt to profile my results.

In general, I expect a lot of bottlenecks to occur in the input parsing (i.e., get()'s), since we did learn that input takes a long time.

BSTrees:
For BSTrees, my expectations were that huge bottlenecks would occur in the Insert() method, and specifically, the FindNode() method called within Insert().  For atlantis, I got some pretty unexpected (but not surprising) results.  Since the data is "random" enough, I'm assuming the tree was probably somewhat balanced.  Because of this, most of the time was spent inputting and comparing strings.  Looking at my code, there are a lot of string comparisons, especially because of the HeapSort.  I should probably expect lots of comparisons in the other profiles.

Unfortunately, I was not able to profile the words.txt run.  I ran the program at around 8:30 pm, but at around 11:00 pm, it was still going, and I decided there wasn't enough time to wait for it.  However, my guess is that FindNode() took FOREVER, since the tree being created was very very VERY unbalanced.  Yech.

AVL Trees:
I got a somewhat surprising result for AVLTrees.  Out of all the methods I coded, I DID expect RecursiveInsert() to take the longest, but I did NOT expect it to take longer than input and all the other methods in the file that I cannot comprehend.  Now that I think about it, it STILL doesn't make much sense to me.  I mean, the average time it spent within itself (i.e. not including descendents) was 2.84 ms per call.  This I find surprising because RecursiveInsert() is basically a bunch of function calls.  It doesn't even have any loops!  I suppose the easy answer would be its recursive nature.  This was basically the same for words and atlantis.

Splay Trees:
Ah, good ol' Splay Trees.  I expected Splay to not have many bottlenecks, in terms of its own methods.  This was pretty much correct.  For words, most of the time was spent inputting and outputting (whatever ostream::flush() is...), which is expected since the input is large.  For atlantis, it spent the most time doing string comparisons, and also a lot of rotations, since HasParent() is high up in the rankings.  Insert's probably cost more for atlantis than for words, due to the nature of the input.  Something that really surprised me was that Splay took the longest time for the atlantis test.  I really don't have any ideas why, since I'd expect it to do really well.  Maybe if I used even larger input...


Overall, the biggest bottleneck in my program would be using BinarySearchTrees with ugly sorted input like words.txt.  The bottleneck is so huge, I didn't have enough time to profile it.  For "normal" input though, input and output are still the biggies, and there really isn't much you can do about it, unless you're an uber-hacker.
