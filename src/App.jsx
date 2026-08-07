import { Routes, Route, Link } from 'react-router-dom';
import CounterApp from './components/CounterApp';
import TodoApp from './components/TodoApp';
import AutoFocusInput from './components/AutoFocusInput';
import UserDirectory from './components/UserDirectory';
import ReducerCounter from './components/ReducerCounter';
import ThemeSwitcher from './components/ThemeSwitcher';
import FAQAccordion from './components/FAQAccordion';

const questions = [
  { id: 1, title: 'Counter App', path: '/q1', component: CounterApp },
  { id: 2, title: 'Dynamic To-Do List', path: '/q2', component: TodoApp },
  { id: 3, title: 'Auto-Focus Input', path: '/q3', component: AutoFocusInput },
  { id: 4, title: 'Fetch Users API', path: '/q4', component: UserDirectory },
  { id: 5, title: 'Reducer Counter', path: '/q5', component: ReducerCounter },
  { id: 6, title: 'Theme Switcher', path: '/q6', component: ThemeSwitcher },
  { id: 7, title: 'FAQ Accordion', path: '/q7', component: FAQAccordion },
];

function HomePage() {
  return (
    <div className="app-shell">
      <div className="hero">
        <h1>React Coding Drive — Mock Test Batch 1</h1>
        <p>Choose a question below to open its exercise workspace. Each page includes a starter component where students can implement the logic.</p>
        <div className="grid">
          {questions.map((q) => (
            <Link key={q.id} to={q.path}>
              <button className="nav-btn">Q{q.id}. {q.title}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {questions.map((q) => (
        <Route key={q.id} path={q.path} element={<q.component />} />
      ))}
    </Routes>
  );
}

export default App;
