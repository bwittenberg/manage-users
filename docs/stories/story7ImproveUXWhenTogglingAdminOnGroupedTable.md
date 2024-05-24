# AC

- When rows are sorted, and a data cell is changed, the row should not jump to the new position

# Implementation Notes

- Sorting could change the underlying data in the store, it could be a newly cached field in Apollo cache like users({ sortBy }), so that when values are changed, the sorted array does not
- Could store pending changes in a form, and then user can submit all changes at once (use React form library)
- Could refactor so that cells are subscribed to fields
- Could add an undo option
- Could add another field to user called "pendingChanges" (tried, it's somewhat complex)
- Could add a small delay
- Could flash row on change

## What is optimal UX?

- It's jarring when clicking a toggle and the row jumps out from under the cursor. It's also so fast, that it's hard to know if the click registered since the data is replace with an uncheck cell immediately. Decision: Use a combination of accent color and delay to indicate to the user what is changing.
