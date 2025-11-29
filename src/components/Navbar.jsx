import { Bars3Icon, XMarkIcon, BoltIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-base-200">
      <nav className="mx-auto max-w-[2500px] flex justify-between items-center py-2">
        <div class="flex items-center text-primary gap-2 pl-6">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 211.1 211"
            className="w-8 h-8 fill-current text-base"
          >
            <path d="M115.1,0c6.5,1.5,13,2.3,19.4,4.1,34.3,9.3,62.6,37.5,72.3,71.6s2.8,13.5,4.3,20.2v19c-1.5,6.5-2.3,13-4.1,19.4-9.3,34.3-37.5,62.6-71.7,72.2-6.7,1.9-13.5,2.8-20.2,4.3-6.2-.4-12.9.5-19,0C40.8,206.1-1.9,156.5,0,101.4,1.9,49.4,44.2,4.5,96.1,0h19ZM115.1,84.9c8.8-16.7,11.8-44.4-6.7-55.8s-12.8-5.4-15.3-1.2c10.2,2.4,8.5,13.2,6.7,21.2-3.1,14.1-13.2,27.5-19.7,40.3-.6,3.1,4.9.7,6,1.5l-1,4,12-1c-2.3,4.1-7.7,5.1-12,5-.3,9.6-.5,24,11,27-.8-1.8-2.6-2.3-3-4.5-1.5-8.9,17.6-27.9,22-36.4-.1.2-.3,2.1.5,2,1.5-1.1,2.5-1,3.5.6,1.7,6.8-24.6,29.6-21.6,40.4s7.3,7,10.1,8,.9,0,1.1-1c2.1-17.2,20.7-29.5,22.4-40.5,1.9-12.5-13.2-13.9-15.9-9.4ZM105.1,138.9c-10.5-1.3-19,3.1-25.5,11-2.4-2.6,5.9-8.8,4.5-10-12-.1-28.5,6.1-29.6,20s5.5,12.3,14,13c19,1.6,55.1,1.6,74.1,0,11.1-.9,16.9-5.7,13.2-17.2s-18.7-16.6-29.4-12c-3,1.3-5.1,4.6-8.3,5.2-1.8-1.9,8.5-8.1,9-10-13.8-2-22,4.9-31,14l1.1-4.3,7.8-9.6Z" />
          </svg>
          <a className="font-semibold text-header text-primary text-3xl ml-2">
            Breka Bakery and Cafe
          </a>
        </div>

        <div class="flex-none hidden xl:block pr-6">
          <ul class="menu menu-horizontal font-semibold text-primary text-lg flex items-center">
            <li>
              <a href="#">Our Locations</a>
            </li>
            <li>
              <a href="#aboutUs">About Us</a>
            </li>
            <li>
              <a href="#">Join Our Team</a>
            </li>
            <li>
              <a href="#locations">Contact Us</a>
            </li>
            <li>
              <button className="btn btn-primary btn-lg ml-6">
                Order Online
              </button>
            </li>
          </ul>
        </div>

        <div class="flex-none xl:hidden">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-xl btn-square">
              <Bars3Icon className="h-6 w-6" />
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#animatedborders">Components</a>
              </li>
              <li>
                <a href="#getting-started">How It Works</a>
              </li>
              <li>
                <a href="#references">References</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
