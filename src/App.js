import "./App.css";
import ClickCounter from "./components/ClickCounter";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import FocusInput from "./components/FocusInput";
import FocusInputFuncComp from "./components/FocusInputFuncComp";
import FragmentDemo from "./components/FragmentDemo";
import HoverCounter from "./components/HoverCounter";
import MemoComponent from "./components/MemoComponent";
import PostForm from "./components/PostForm";
import RefsDemo from "./components/RefsDemo";
import Table from "./components/Table";
import User from "./components/User";
import CompC from "./context/CompC";
import { UserProvider } from "./context/userContext";
import CounterOne from "./customHooks/CounterOne";
import CounterTwo from "./customHooks/CounterTwo";
import CounterUseEffect from "./hooks/CounterUseEffect";
import CounterUseReducer from "./hooks/CounterUseReducer";
import HookCounter from "./hooks/HookCounter";
import HookCounterTwo from "./hooks/HookCounterTwo";
import HookMouse from "./hooks/HookMouse";
import IntervalHookCounter from "./hooks/IntervalHookCounter";
import MouseContainer from "./hooks/MouseContainer";
import UserForm from "./hooks/useInputCustomHook/UserForm";
import ParentComponent from "./useCallbackHook/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo />
      <Table />

      <MemoComponent/>
      <RefsDemo/> */}

      {/* <FocusInput /> */}

      {/* <ClickCounter name="  muslum" />
      <HoverCounter />
      <User name={(isLogedIn) => isLogedIn? 'Welcome' : 'please try again'} /> */}
      <UserProvider value="context provider">
        <CompC />
      </UserProvider>

      <PostForm />

      {/* <HookCounter /> */}

      {/* <HookCounterTwo /> */}
      {/* <CounterUseEffect /> */}

      {/* <HookMouse /> */}

      {/* <MouseContainer /> */}

      {/* <IntervalHookCounter /> */}

      {/* <CounterUseReducer /> */}

      {/* <ParentComponent/> */}

      {/* <FocusInputFuncComp/> */}

      {/* <DocTitleOne />
      <DocTitleTwo /> */}

      <CounterOne />
      <CounterTwo />

      <UserForm />
    </div>
  );
}

export default App;
