import './App.css';
import ParentCallBack from './component/CallBackToParent/ParentCallBack';
import DynamicForm from './component/Dynamicforn/DynamicForm';
import GenproUi from './component/GenproUi/GenproUi';
import ClickCounter from './component/HOC/ClickCounter';
import HoverCounter from './component/HOC/HoverCounter';
import FRParent from './component/Hooks/ForwarRef/FRParent';
import MemoCounter from './component/Hooks/MemoCounter';
import StateAndEffectHook from './component/Hooks/StateAndEffectHook';
import ParentComponet from './component/Hooks/UseCallbackCounter/ParentComponet';
import TopLevel from './component/Hooks/UseContextHook.js/TopLevel';
import UseEffectHook from './component/Hooks/UseEffectHook';
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
      {/* <StateAndEffectHook /> */}
      {/* <UseEffectHook /> */}
      {/* <MemoCounter /> */}
      {/* <UseReducerHook /> */}
      {/* <UseRefHook /> */}
      {/* <FRParent /> */}
      {/* <TopLevel /> */}
      {/* <ReduxRootComponent /> */}
      {/* <RouterDom /> */}
      {/* <Parent /> */}
      {/* <ParentCallBack /> */}
      {/* <GenproUi /> */}
      <DynamicForm />
    </div>
  );
}

export default App;
