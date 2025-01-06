import {Nav} from './components/Nav'
import {ShoeDetail} from './components/ShoeDetail'
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant"
import {useState} from 'react'
import { CartItem } from "./components/CartItem";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <h2 className="mbb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[1]} />
        <CartItem item={SHOE_LIST[2]} />
      </Sidebar>
    </div>
  );
}
