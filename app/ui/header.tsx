'use client'

import { useState } from 'react'
import { PopoverGroup } from '@headlessui/react'
import Link from 'next/link'
import { Bars3Icon, SunIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white lg:border-b">
			<nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
            <p className="font-medium text-slate-700">Box Organizer</p>
          </a>
				</div>
				<div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-6 items-center">
          <div className="lg:border-r lg:flex lg:gap-x-6 lg:pr-6">
						<Link href='#' className="text-sm font-bold text-slate-700">
							Pokémon Home
						</Link>
						<Link href='#' className="text-sm font-bold text-slate-700">
							Scarlet/Violet
						</Link>
						<Link href='#' className="text-sm font-bold text-slate-700">
							Sword/Shield
						</Link>
					</div>
					<div>
						<span className="sr-only">Open color mode menu</span>
						<SunIcon aria-hidden="true" className="h-6 w-6" />
					</div>
					<Link href="#" className="text-sm font-medium text-slate-700 flex gap-x-1 items-center">
						<UserCircleIcon aria-hidden="true" className="h-6 w-6" />
						<span>Log in</span>
					</Link>
        </PopoverGroup>
			</nav>
		</header>
  );
}

export default Header;