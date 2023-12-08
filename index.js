/** @format */

const wishlist = [
    'Self-tying bow ties',
    'Invisible snowman kit',
    'Eggnog fountain',
    'Reindeer games rulebook',
    "Santa's sleigh GPS",
    'Cookie-flavored toothpaste',
    'Unmeltable snowballs',
    'Holiday jingle doorbell',
    'Mistletoe drone',
    'Gingerbread house blueprint',
]

const wishlistEl = document.querySelector('.wishlist')

wishlist.map(item => {
    const li = document.createElement('li')
    li.textContent = item
    wishlistEl.appendChild(li)
})



/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/

