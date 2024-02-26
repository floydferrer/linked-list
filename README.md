# Arrays/Linked Lists

[Download our starter code](https://curric.springboard.com/software-engineering-career-track/default/exercises/dsa-arrays-linked-lists.zip).

We’ve supplied you with a ***Node*** class and a constructor for the ***LinkedList*** class. Here are descriptions of the methods you should write for instances of ***LinkedList***:

***push(val) :*** Appends a new node with value ***val*** to the tail. Returns undefined.

***unshift(val) :*** Add a new node with value ***val*** to the head. Returns undefined.

***pop() :*** Remove & return tail value. Throws error if list is empty.

***shift() :*** Remove & return head value. Throws error if list is empty.

***getAt(idx) :*** Retrieve value at index position ***idx***. Throws error if index is invalid.

***setAt(idx, val) :*** Set value of node at index position ***idx*** to ***val***. Throws error if index is invalid.

***insertAt(idx, val) :*** Insert a new node at position ***idx*** with value ***val***. Throws error if index is invalid. Returns undefined.

***removeAt(idx) :*** Remove & return value at position ***idx***. Throws error if index is invalid.

<aside>
💡 **Warning: Go Slow & Check Your Code!** It’s very easy to make methods that don’t work for every case — make sure you properly handle cases of items being at the start, middle, or end of the list, as well as handling empty lists.

</aside>

## **Average Of List**

Given a linked list containing numbers, return the average of those numbers.

For example:

![Screen Shot 2023-05-08 at 3.53.32 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/445a55ea-763c-4854-a7b7-b629884c9ae6/Screen_Shot_2023-05-08_at_3.53.32_PM.png)

would return 4.142857142857143.
