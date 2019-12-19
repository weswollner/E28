## P3 Peer Review

+ Reviewer's name: Wes Wollner
+ Reviwee's name: Gerald Walden
+ URL to reviewee's Github repo: *https://github.com/bibliodrone/e28*

### Are you able to produce any errors or unexpected results?
- Visiting any route outside of the main page and re-loading creates a 500 error.

### Were there any parts of the interface that you found confusing or unclear?
- No, very simple easy to understand interface.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
- No, components were commented well.

### Are there any parts of the code that you found interesting or taught you something new?
- I have never seen content used in a style to display a emoji! Very neat!

### Are there any best practices discussed in course material that you feel were not addressed in the code?
- Variable names should be explicit when possible. Example: p3/src/components/BlogPage.vue:
```js
     <ul id="categories">
         <li v-for='cat in post.categories' :key='cat'>
             {{ cat }}
         </li>
     </ul>
```
- I was surprised to see your axios requests in multiple components. I would expect any api calls to defined in a separate js file.
- All .js files listed under your components directory should be moved to your source directory.
- Clean up any commented out code or add todos.
- Replace or remove default logo.

### Do you have any additional comments not covered in the above questions?
- Great project! I like how you are playing with different styles.
