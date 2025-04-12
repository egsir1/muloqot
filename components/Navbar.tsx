'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
	useUser,
} from '@clerk/nextjs';

const Navbar = () => {
	const { user } = useUser();
	return (
		<nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
			<Link href='/' className='flex items-center gap-1'>
				<Image
					src='/icons/logo.svg'
					alt='logo'
					width={32}
					height={32}
					className='max-sm:size-10'
				/>
				<p className='text-[26px] font-extrabold text-white max-sm:hidden'>
					Muloqot
				</p>
			</Link>

			<div className='flex items-center gap-5 text-white'>
				<SignedOut>
					<div className='flex gap-4 items-center'>
						<SignInButton>
							<button className='text-white w-24 py-1 flex justify-center items-center rounded hover:bg-dark-3 transition'>
								Sign In
							</button>
						</SignInButton>
						<SignUpButton>
							<button className='text-white w-24 py-1 flex justify-center items-center rounded hover:bg-dark-3 transition'>
								Sign Up
							</button>
						</SignUpButton>
					</div>
				</SignedOut>

				<SignedIn>
					<div className='flex items-center'>
						<span className='text-white font-medium mx-3'>
							{(user && user.username) ||
								user?.firstName ||
								user?.emailAddresses[0]?.emailAddress}
						</span>
						<UserButton
							appearance={{
								elements: {
									userButtonPopoverActionButton__manageAccount: 'text-white',
									userButtonPopoverActionButton__signOut: 'text-white',
								},
							}}
						/>
					</div>
				</SignedIn>

				<MobileNav />
			</div>
		</nav>
	);
};

export default Navbar;
