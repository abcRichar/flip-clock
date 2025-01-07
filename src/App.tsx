import React, { useState } from "react";
import "./app.less";
// 小于10kb的图片被转成了base64位格式的
import one from "@/assets/images/222.png";
import two from "@/assets/images/111.png";

function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <h2>webpack5+react+ts</h2>
      <p>受控组件</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
      <h2>webpack5-react-ts</h2>123
      <img src={one} alt="小于20kb的图片" />
      <img src={two} alt="大于于20kb的图片" />
      <div className="smallImg"></div> {/* 小图片背景容器 */}
      <div className="bigImg"></div> {/* 大图片背景容器 */}
    </>
  );
}
export default App;
