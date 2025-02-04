import { useState } from "react";
import data from "./data";
import Food from "./Food";
import Btn from "./Button";
import "./App.css";

function App() {
  const [food, setFood] = useState(data);
  let foodTemp = data;
  const listFood = food.map((items) => {
    return <Food key={items.id} {...items} />;
  });

  const listBtn = foodTemp.reduce(
    (values, items) => {
      if (!values.includes(items.category)) {
        values.push(items.category);
      }
      return values;
    },
    ["all"]
  );

  function handleChange(event) {
    let nameBtn = event.target.textContent.toLowerCase();
    if (nameBtn !== "all") {
      let filterList = foodTemp.filter((items) => {
        return items.category === nameBtn;
      });
      setFood(filterList);
    } else {
      setFood(data);
    }
  }

  const dataBtn = listBtn.map((items) => {
    return <Btn key={items.id} cate={items} change={handleChange} />;
  });

  window.addEventListener("load", () => {
    // Lấy danh sách tất cả các tài nguyên
    const startTime = performance.now();

    // Đợi một chút để đảm bảo tất cả các tài nguyên đã được tải
    setTimeout(() => {
      // Lấy danh sách tất cả các tài nguyên
      const resourceList = performance.getEntriesByType("resource");

      // Biến để lưu tổng thời gian
      let totalLoadTime = 0;

      // Duyệt qua tất cả các tài nguyên và tính tổng thời gian tải
      resourceList.forEach((resource) => {
        const loadTime = resource.responseEnd - resource.startTime;
        totalLoadTime += loadTime;
        // console.log(`${resource.name}: ${loadTime} ms`);
      });

      // Lấy thời gian kết thúc
      const endTime = performance.now();

      // Tính toán thời gian tải trang
      const loadTime = endTime - startTime;
      console.log(`Time load page: ${loadTime.toFixed(2)} ms`);

      // In ra tổng thời gian tải tất cả các tài nguyên
      console.log(
        `Total load time for all resources: ${totalLoadTime.toFixed(2)} ms`
      );
    }, 0); // Đảm bảo rằng thời gian trễ nhỏ hơn 1ms
  });

  return (
    <main className="w-1/2 mx-auto py-16">
      <h2 className="text-center text-4xl tracking-widest">Our Menu Vite</h2>
      <br />
      <div className="category flex justify-center mt-5">
        {dataBtn}
        {/* <button onClick={handleChange} className='px-2 bg-orange-400 text-white mx-2 rounded-md'>All</button>
        <button onClick={handleChange} className='px-2 bg-orange-400 text-white mx-2 rounded-md'>Breakfast</button>
        <button onClick={handleChange} className='px-2 bg-orange-400 text-white mx-2 rounded-md'>Lunch</button>
        <button onClick={handleChange} className='px-2 bg-orange-400 text-white mx-2 rounded-md'>Shakes</button> */}
      </div>
      <br />
      <div className="food_list grid grid-cols-3 gap-5">{listFood}</div>
    </main>
  );
}

export default App;
