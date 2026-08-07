# React Coding Drive — Mock Test Batch 1
**Duration:** 90 minutes | **Questions:** 7 | **Topics:** useState, useRef, useEffect, useReducer, Context API

> Instructions: Create a single React app (CRA / Vite). Build each question as a separate component and route/render them from `App.js`. Do not use external state libraries — only React hooks.

---

## Q1. Counter App (Increment / Decrement / Reset)
**Topic:** useState

**Project Description:**
Build a simple counter widget like the ones used in quantity selectors on e-commerce sites (e.g., "Add to Cart" quantity picker). It should have three buttons: `+`, `-`, and `Reset`.

**Hint:** Store the number in a single state variable using `useState(0)`.

**Implementation Logic:**
1. Declare `const [count, setCount] = useState(0);`
2. `+` button → `setCount(count + 1)`
3. `-` button → `setCount(count - 1)` (optionally prevent going below 0)
4. `Reset` button → `setCount(0)`
5. Display `count` in an `<h1>` or `<span>`

**Demo Input:** Click `+` 3 times, then `-` once, then `Reset`.
**Expected Output:** Display sequence → `1 → 2 → 3 → 2 → 0`

---

## Q2. Dynamic To-Do List (Add Item)
**Topic:** useState (array state)

**Project Description:**
Build a mini task-entry widget similar to a "Add Task" bar in a project management tool. User types a task into an input box, clicks "Add", and it appears as a list item below.

**Hint:** Use two states — one for the input text, one for the array of items.

**Implementation Logic:**
1. `const [text, setText] = useState("");`
2. `const [items, setItems] = useState([]);`
3. On input change → `setText(e.target.value)`
4. On "Add" click → `setItems([...items, text]); setText("");`
5. Render `items.map((item, i) => <li key={i}>{item}</li>)`

**Demo Input:** Type "Buy groceries" → Add → Type "Call client" → Add
**Expected Output:**
```
- Buy groceries
- Call client
```

---

## Q3. Auto-Focus Input Field
**Topic:** useRef + useEffect

**Project Description:**
Simulate a login page where the username field is automatically focused as soon as the page loads (no manual click needed) — a common UX pattern.

**Hint:** Refs hold direct DOM node references; combine with `useEffect` for "on mount" behavior.

**Implementation Logic:**
1. `const inputRef = useRef(null);`
2. Attach `ref={inputRef}` to the `<input>`
3. `useEffect(() => { inputRef.current.focus(); }, []);`

**Demo Input:** Load the page.
**Expected Output:** Cursor blinks inside the input box immediately without any click.

---

## Q4. Fetch and Display Users from API
**Topic:** useEffect

**Project Description:**
Build a "Team Directory" screen that fetches employee data from a public API (`https://jsonplaceholder.typicode.com/users`) and displays each person's name and email in a card layout.

**Hint:** Fetch inside `useEffect` with an empty dependency array so it only runs once on mount.

**Implementation Logic:**
1. `const [users, setUsers] = useState([]);`
2. `useEffect(() => { fetch(url).then(res => res.json()).then(data => setUsers(data)); }, []);`
3. Render `users.map(u => <div key={u.id}><h3>{u.name}</h3><p>{u.email}</p></div>)`

**Demo Input:** Page load (no user action needed).
**Expected Output:** A list of 10 cards, each showing a name and email fetched from the API.

---

## Q5. Counter with Step Values (useReducer)
**Topic:** useReducer

**Project Description:**
Build an advanced counter used in a "stock quantity" or "bidding" system where users can increment by 1, increment by 5, decrement by 1, or reset — all managed through a single reducer instead of multiple `useState` calls.

**Hint:** Define action types as strings and handle each in a `switch` statement.

**Implementation Logic:**
1. `const initialState = { count: 0 };`
2. ```js
   function reducer(state, action) {
     switch (action.type) {
       case "INC_ONE": return { count: state.count + 1 };
       case "INC_FIVE": return { count: state.count + 5 };
       case "DEC_ONE": return { count: state.count - 1 };
       case "RESET": return { count: 0 };
       default: return state;
     }
   }
   ```
3. `const [state, dispatch] = useReducer(reducer, initialState);`
4. Buttons call `dispatch({ type: "INC_FIVE" })` etc.

**Demo Input:** Click "+1" twice, then "+5" once, then "Reset".
**Expected Output:** Display sequence → `1 → 2 → 7 → 0`

---

## Q6. Global Theme Switcher (Context API)
**Topic:** Context API

**Project Description:**
Build a Light/Dark mode toggle (like on GitHub or VS Code) where the theme choice made in the `Header` component reflects instantly in the `Dashboard` component — without passing props manually.

**Hint:** Create a `ThemeContext`, provide it at the top of the app, and consume it wherever needed.

**Implementation Logic:**
1. `const ThemeContext = createContext();`
2. In `App.js`: wrap children with `<ThemeContext.Provider value={{ theme, toggleTheme }}>`
3. In `Header.js` and `Dashboard.js`: `const { theme, toggleTheme } = useContext(ThemeContext);`
4. Apply conditional CSS classes based on `theme`.

**Demo Input:** Click "Toggle Theme" button in `Header`.
**Expected Output:** Both `Header` and `Dashboard` backgrounds switch from white to black (and text color inverts) simultaneously.

---

## Q7. FAQ Accordion
**Topic:** useState

**Project Description:**
Build an FAQ section (like on a pricing page) where clicking a question expands its answer, and clicking another question closes the previous one and opens the new one.

**Hint:** Track only the *index* of the currently open question, not a boolean per item.

**Implementation Logic:**
1. `const [openIndex, setOpenIndex] = useState(null);`
2. On question click: `setOpenIndex(openIndex === index ? null : index);`
3. Render answer only `{openIndex === index && <p>{faq.answer}</p>}`

**Demo Input:** Click Q1 → click Q2 → click Q2 again
**Expected Output:** Q1 opens → Q1 closes & Q2 opens → Q2 closes (all collapsed)

---
### Submission Checklist
- [ ] All 7 components working independently
- [ ] No console errors/warnings
- [ ] Push code to GitHub with this README as `README.md`
- [ ] Share repo link in the submission form
