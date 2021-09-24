import React from 'react';
import Rocket from '../../icons/rocket.svg';

export default function CustomerReviews() {
  return (
    <div class="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
      <div class="bg-white dark:bg-gray-800 w-full lg:w-1/4 max-w-108 shadow-lg mx-auto rounded-xl p-4">
        <p class="text-gray-600 dark:text-white">
          <span class="font-bold text-teal-500 text-lg">“</span>
          To get social media testimonials like these, keep your customers engaged with your social
          media accounts by posting regularly yourself
          <span class="font-bold text-teal-500 text-lg">”</span>
        </p>
        <div class="flex items-center mt-4">
          <a href="#" class="block relative">
            <img
              alt="profil"
              src="https://www.w3schools.com/howto/img_avatar.png"
              class="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
          <div class="flex flex-col ml-2 justify-between">
            <span class="font-semibold text-teal-500 text-sm">Jean Miguel</span>
            <span class="dark:text-gray-400 text-xs flex items-center">
              User of Tail-Kit
              <img src={Rocket} class="ml-2 h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 w-full lg:w-1/4 max-w-108 shadow-lg mx-auto rounded-xl p-4">
        <p class="text-gray-600 dark:text-white">
          <span class="font-bold text-teal-500 text-lg">“</span>
          To get social media testimonials like these, keep your customers engaged with your social
          media accounts by posting regularly yourself
          <span class="font-bold text-teal-500 text-lg">”</span>
        </p>
        <div class="flex items-center mt-4">
          <a href="#" class="block relative">
            <img
              alt="profil"
              src="https://www.w3schools.com/howto/img_avatar.png"
              class="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
          <div class="flex flex-col ml-2 justify-between">
            <span class="font-semibold text-teal-500 text-sm">Jean Miguel</span>
            <span class="dark:text-gray-400 text-xs flex items-center">
              User of Tail-Kit
              <img src={Rocket} class="ml-2 h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 w-full lg:w-1/4 max-w-108 shadow-lg mx-auto rounded-xl p-4">
        <p class="text-gray-600 dark:text-white">
          <span class="font-bold text-teal-500 text-lg">“</span>
          To get social media testimonials like these, keep your customers engaged with your social
          media accounts by posting regularly yourself
          <span class="font-bold text-teal-500 text-lg">”</span>
        </p>
        <div class="flex items-center mt-4">
          <a href="#" class="block relative">
            <img
              alt="profil"
              src="https://www.w3schools.com/howto/img_avatar.png"
              class="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
          <div class="flex flex-col ml-2 justify-between">
            <span class="font-semibold text-teal-500 text-sm">Jean Miguel</span>
            <span class="dark:text-gray-400 text-xs flex items-center">
              User of Tail-Kit
              <img src={Rocket} class="ml-2 h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
