"use client"
import Link from 'next/link'
import React from 'react'
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { MenuData } from "@/data/menu-data";
import FavoriteModal from './FavoriteModal';
import Container from '@/app/Components/Common/Container';
type Props = {
  user: User;
};
const FavoritesSection = ({ user }: Props) => {
  return (
    <>
   <Container>
    <div className="mt-6 text-center">
      <h2 className="text-lg md:text-2xl lg:text-3xl  leading-tight tracking-tight text-gray-600 sm:text-4xl ">
        My Favorites
      </h2>
      <Link
        href="/user"
        className="inline-flex items-center justify-center
         bg-green-600 text-lg   px-4 py-1 text-white 
          border border-green-500 space-x-2 rounded-full
           hover:text-green-700 hover:bg-green-200  "
      >
        {" "}
        <HiOutlineChevronLeft /> <span>Back to my Profile</span>{" "}
      </Link>
    </div>

    <section className="my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-8">
      {MenuData?.map((favorite) => (
        <FavoriteModal
          key={favorite.id}
          favorite={favorite as Menu}
          user={user}
        />
      ))}
    </section>
    </Container>
    
  </>
  )
}

export default FavoritesSection
