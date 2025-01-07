import React, { useState, lazy, Suspense } from "react";
import "./app.less";
// 小于10kb的图片被转成了base64位格式的
import one from "@/assets/images/222.png";
import two from "@/assets/images/111.png";
import { Demo1, Demo2 } from "@/components";
const LazyDemo = lazy(() => import("@/components/LazyDemo")); // 使用import语法配合react的Lazy动态引入资源

// prefetch
const PreFetchDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreFetchDemo" */
      /*webpackPrefetch: true*/
      "@/components/PreFetchDemo"
    )
);
// preload
const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /*webpackPreload: true*/
      "@/components/PreloadDemo"
    )
);

function App() {
  const [count, setCounts] = useState("");
  const [show, setShow] = useState(false);
  // 点击事件中动态引入css, 设置show为true
  const onClick = () => {
    import("./app.css");
    setShow(true);
  };
  const onChange = (e: any) => {
    setCounts(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <Demo1 />
      <h2 onClick={onClick}>show为true时加载组件展示</h2>
      {/* show为true时加载LazyDemo组件  */}
      {show && (
        <Suspense fallback={null}>
          <LazyDemo />
        </Suspense>
      )}
      <h2 onClick={onClick}>展示</h2>
      {/* show为true时加载组件 */}
      {show && (
        <>
          <Suspense fallback={null}>
            <PreloadDemo />
          </Suspense>
          <Suspense fallback={null}>
            <PreFetchDemo />
          </Suspense>
        </>
      )}
      {/* <h2>webpack5+react+ts</h2>
      <p>受控组件</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
      <h2>webpack5-react-ts</h2>123 */}
      {/* <img src={one} alt="小于20kb的图片" />
      <img src={two} alt="大于于20kb的图片" />
      <div className="smallImg"></div> 
      <div className="bigImg"></div>  */}
    </>
  );
}
export default App;
