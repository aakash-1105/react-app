import './App.css';
import ClickCounter from './component/HOC/ClickCounter';
import HoverCounter from './component/HOC/HoverCounter';
import FRParent from './component/Hooks/ForwarRef/FRParent';
import MemoCounter from './component/Hooks/MemoCounter';
import StateAndEffectHook from './component/Hooks/StateAndEffectHook';
import ParentComponet from './component/Hooks/UseCallbackCounter/ParentComponet';
import TopLevel from './component/Hooks/UseContextHook.js/TopLevel';
import UseReducerHook from './component/Hooks/UseReducerHook';
import UseRefHook from './component/Hooks/UseRefHook';
import Parent from './component/LazyLoading/Parent';
import RouterDom from './component/ReactRouterDomV6/RouterDOm';
import ReduxRootComponent from './component/Redux/ReduxRootComponent';

function App() {
  return (
    <div className="App">
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ParentComponet /> */}
      <StateAndEffectHook />
      {/* <MemoCounter /> */}
      {/* <UseReducerHook /> */}
      {/* <UseRefHook /> */}
      {/* <FRParent /> */}
      {/* <TopLevel /> */}
      {/* <ReduxRootComponent /> */}
      {/* <RouterDom /> */}
      {/* <Parent /> */}
    </div>
  );
}

export default App;
